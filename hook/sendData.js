const origin = "192.168.1.9";

const sendData = async (endpoint, data, token) => {
    try {
        const response = await fetch(`http://${origin}:8080/api/v1/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        console.log(JSON.stringify(data));

        if (response.status === 204 || !response.headers.get('Content-Type').includes('application/json')) {
            return null; // or any default value you want to return in case of void response
        } else {
            return await response.json();
        }
        // const responseData = await response.json();
        // return responseData;
    } catch (error) {
        console.error("Error:", error);
        return { error };
    }
};

export default sendData;
