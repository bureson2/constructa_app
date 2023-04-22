import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const origin = "192.168.2.31";

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

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error:", error);
        return { error };
    }
};

export default sendData;
