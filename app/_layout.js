import { Stack } from "expo-router";
import { useFonts } from "expo-font";

const Layout = () => {
    const [fontsLoaded] = useFonts({
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack initialRouteName="home">
            <Stack.Screen name="home"
            />
        </Stack>
    )
};

export default Layout;
