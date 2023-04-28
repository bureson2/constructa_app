import React from 'react';
import MainNavigation from "../components/main_navigation/MainNavigation";
import ScreenHeader from "../components/headers/ScreenHeader";

// Home component
const Home = () => {
    // Render the ScreenHeader and MainNavigation components
    return (
        <>
            <ScreenHeader title={""} show={false} />
            <MainNavigation />
        </>
    );
}

export default Home;
