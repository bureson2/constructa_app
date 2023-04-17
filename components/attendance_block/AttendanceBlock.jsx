import styles from "./component.style";
import {View, Text} from "react-native";
import {Svg, Path} from 'react-native-svg';
import {COLORS} from "../../constants";
import AttendanceButton from "../buttons/AttendanceButton";
import {ICONS} from "../../constants/icons";

const AttendanceBlock = ({title, icon}) => {

    // TODO
    const time = "00:00";

    return (
        <View style={styles.block}>
            <Text style={styles.title}>Docházka</Text>
            <View style={styles.timerBlock}>
                <AttendanceButton icon={ICONS.play}/>
                <Text style={styles.time}>
                    {time}
                </Text>
                <AttendanceButton icon={ICONS.stop}/>
            </View>
        </View>
    );
}

export default AttendanceBlock;