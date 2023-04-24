import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_ORIGIN } from "../constants/app.config";

const useFetch = (endpoint) => {
    const [token, setToken] = useState(null);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [refetchIndex, setRefetchIndex] = useState(0); // Add this line

    useEffect(() => {
        const fetchToken = async () => {
            const storedToken = await AsyncStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
            }
        };
        fetchToken();
    }, []);

    const fetchData = useCallback(async () => {
        if (token) {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `http://${API_ORIGIN}:8080/api/v1/${endpoint}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    }, [`http://${API_ORIGIN}:8080/api/v1/${endpoint}`, token]);

    useEffect(() => {
        fetchData();
    }, [fetchData, refetchIndex]);

    const refetch = () => {
        setRefetchIndex((prevIndex) => prevIndex + 1);
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
