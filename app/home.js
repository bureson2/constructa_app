import React from 'react';
import MainNavigation from "../components/main_navigation/MainNavigation";
import ScreenHeader from "../components/headers/ScreenHeader";

const Home = () => {
    return (
        <>
            <ScreenHeader title={""} show={false} />
            <MainNavigation />
        </>
    );
}

export default Home;
