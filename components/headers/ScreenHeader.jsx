import styles from "./component.style";
import {COLORS} from "../../constants";
import {View, Text} from "react-native";
import {Stack} from "expo-router";
// import LinearGradient from 'react-native-linear-gradient';

const ScreenHeader = () => {
    return (
        <Stack.Screen
            options={{
                // headerStyle: {backgroundColor: COLORS.primaryFirst},
                headerStyle: {backgroundColor: "tranparent"},
                headerShadowVisible: false,
                headerTitle: "Test",
                headerTitleStyle: {color: COLORS.white},
            }}
        />
    );

}

export default ScreenHeader;