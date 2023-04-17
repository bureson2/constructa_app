import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: `http://192.168.1.9:8080/${endpoint}`,
        // headers: {
        //   // "X-RapidAPI-Key": '',
        //   // "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        // },
        // params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            console.log(options.url)
            const response = await axios.request(options);
            setData(response.data);
            console.log(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
