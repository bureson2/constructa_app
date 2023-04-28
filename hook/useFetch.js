import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_ORIGIN } from "../constants/app.config";

/**
 * Custom hook to fetch data from an API endpoint.
 *
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @returns {Object} An object containing the fetched data, loading state, error state, and a refetch function.
 */
const useFetch = (endpoint) => {
    // State variables
    const [token, setToken] = useState(null);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [refetchIndex, setRefetchIndex] = useState(0); // Add this line

    // Fetch the stored token from AsyncStorage on initial render
    useEffect(() => {
        const fetchToken = async () => {
            const storedToken = await AsyncStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
            }
        };
        fetchToken();
    }, []);

    // Fetch data function, using the token and endpoint as dependencies
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

    // Fetch data when fetchData or refetchIndex changes
    useEffect(() => {
        fetchData();
    }, [fetchData, refetchIndex]);

    // Function to refetch data
    const refetch = () => {
        setRefetchIndex((prevIndex) => prevIndex + 1);
    };

    // Return the fetched data, loading state, error state, and refetch function
    return { data, isLoading, error, refetch };
};

export default useFetch;
