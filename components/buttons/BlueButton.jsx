import styles from "./component.style";
import {View, Text, TouchableOpacity} from "react-native";
import {Svg, Path} from 'react-native-svg';
import {COLORS} from "../../constants";

const BlueButton = ({text, onPress}) => {
    return (
        <TouchableOpacity style={styles.blueButton} onPress={onPress}>
            <Text style={styles.blueButtonText}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default BlueButton;