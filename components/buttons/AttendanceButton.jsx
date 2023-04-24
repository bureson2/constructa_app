import styles from "./component.style";
import {TouchableOpacity} from "react-native";
import {Path, Svg} from 'react-native-svg';
import {COLORS} from "../../constants";

const AttendanceButton = ({icon, onPress}) => {
    return (
        <TouchableOpacity style={styles.attendanceButton}
            onPress={onPress}>
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
        </TouchableOpacity >
    );
}

export default AttendanceButton;