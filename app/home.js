import React, { useState } from 'react';
import { Text } from 'react-native';
import {useRouter, useSearchParams} from 'expo-router';
import MainNavigation from "../components/main_navigation/MainNavigation";

const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");
    const params = useSearchParams();

    return (
        <>
            <MainNavigation />
        </>
    );
}

export default Home;
