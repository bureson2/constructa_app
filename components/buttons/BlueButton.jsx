import styles from "./component.style";
import {Text, TouchableOpacity} from "react-native";


/**
 * BlueButton component that renders a custom button with text.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.text - The text to be displayed on the button.
 * @param {Function} props.onPress - Function to be called when the button is pressed.
 * @returns {React.Element} A React component representing a BlueButton.
 */
const BlueButton = ({text, onPress}) => {
    return (
        // Render TouchableOpacity with custom styles and onPress handler
        <TouchableOpacity style={styles.blueButton} onPress={onPress}>
            {/* Render the text with custom text styles */}
            <Text style={styles.blueButtonText}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default BlueButton;