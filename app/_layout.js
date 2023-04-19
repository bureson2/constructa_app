import { Stack } from "expo-router";
import { useFonts } from "expo-font";

const Layout = () => {
    return (
        <Stack initialRouteName="home">
            <Stack.Screen name="home"/>
        </Stack>
    )
};

export default Layout;