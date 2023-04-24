import styles from "./component.style";
import {Text, TouchableOpacity} from "react-native";

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