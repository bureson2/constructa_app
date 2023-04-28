import {API_ORIGIN} from "../constants/app.config"


/**
 * Function to send data to a specified API endpoint using POST method.
 *
 * @param {string} endpoint - The API endpoint to send data to.
 * @param {Object} data - The data to be sent as JSON object.
 * @param {string} token - The authentication token to be included in the request headers.
 * @returns {Promise<Object|null>} A promise that resolves to the response JSON object, null in case of void response, or an error object.
 */
const sendData = async (endpoint, data, token) => {
    try {
        // Send the POST request to the API
        const response = await fetch(`http://${API_ORIGIN}:8080/api/v1/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        // Handle the response based on its status and content type
        if (response.status === 204 || !response.headers.get('Content-Type').includes('application/json')) {
            return null; // or any default value you want to return in case of void response
        } else {
            return await response.json();
        }
    } catch (error) {
        // Log and return the error
        console.error("Error:", error);
        return { error };
    }
};

export default sendData;
