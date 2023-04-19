import styles from "./component.style";
import {COLORS} from "../../constants";
import {View, Text, TouchableOpacity} from "react-native";
import {Stack} from "expo-router";
import {Path, Svg} from "react-native-svg";
import {ICONS} from "../../constants/icons";
// import LinearGradient from 'react-native-linear-gradient';

const ScreenHeader = ({title, show, qrCode, onQrPress}) => {
    return (
        <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.white},
                headerShadowVisible: false,
                headerTitle: title,
                headerTitleStyle: {color: COLORS.textColor},
                headerShown: show !== false,
                headerRight: () => (
                    qrCode ?
                        <TouchableOpacity onPress={onQrPress}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="40"
                                viewBox="0 96 960 960"
                                width="40"
                            >
                                <Path
                                    d={ICONS.qr}
                                    fill={COLORS.textColor}
                                />
                            </Svg>
                        </TouchableOpacity>
                        :
                        <></>
                ),

            }}

        />
    );
}

export default ScreenHeader;