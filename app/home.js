import React, { useState } from 'react';
import { Text } from 'react-native';
import {useRouter, useSearchParams} from 'expo-router';
import MainNavigation from "../components/main_navigation/MainNavigation";
import ScreenHeader from "../components/headers/ScreenHeader";
import {useRoute} from "@react-navigation/native";

const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");
    const params = useSearchParams();
    const route = useRoute();


    return (
        <>
            <ScreenHeader title={""} show={false} />
            <MainNavigation />
        </>
    );
}

export default Home;
