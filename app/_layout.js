import {Stack} from "expo-router";

// Layout component
const Layout = () => {
    // Render Stack with an initial route name of 'home'
    return (
        <Stack initialRouteName="home">
            <Stack.Screen name="home"/>
        </Stack>
    )
};

export default Layout;