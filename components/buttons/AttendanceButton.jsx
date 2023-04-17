import styles from "./component.style";
import {View, Text} from "react-native";
import {Svg, Path} from 'react-native-svg';
import {COLORS} from "../../constants";

const AttendanceButton = ({icon}) => {
    return (
        <View style={styles.attendanceButton}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 96 960 960"
                width="40"
            >
                <Path
                    d={icon}
                    fill={COLORS.white}
                />
            </Svg>
        </View>
    );
}

export default AttendanceButton;