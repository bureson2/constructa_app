import {API_ORIGIN} from "../constants/app.config"

const sendData = async (endpoint, data, token) => {
    try {
        const response = await fetch(`http://${API_ORIGIN}:8080/api/v1/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        if (response.status === 204 || !response.headers.get('Content-Type').includes('application/json')) {
            return null; // or any default value you want to return in case of void response
        } else {
            return await response.json();
        }
    } catch (error) {
        console.error("Error:", error);
        return { error };
    }
};

export default sendData;
