import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const origin = "192.168.2.31";

const useFetch = (endpoint) => {
    const [token, setToken] = useState(null);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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
                const response = await fetch(`http://${origin}:8080/api/v1/${endpoint}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    }, [`http://${origin}:8080/api/v1/${endpoint}`, token]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const refetch = async () => { // Add async keyword here
        setIsLoading(true);
        await fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
