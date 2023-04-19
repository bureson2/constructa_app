import styles from "./component.style";
import {COLORS} from "../../constants";
import {View, Text} from "react-native";
import {Stack} from "expo-router";
// import LinearGradient from 'react-native-linear-gradient';

const ScreenHeader = ({title}) => {
    return (
        <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.white},
                headerShadowVisible: false,
                headerTitle: title,
                headerTitleStyle: {color: COLORS.textColor},
            }}
        />
    );

}

export default ScreenHeader;