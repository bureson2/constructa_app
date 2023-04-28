import styles from "./component.style";
import {TouchableOpacity} from "react-native";
import {Path, Svg} from 'react-native-svg';
import {COLORS} from "../../constants";


/**
 * AttendanceButton component that renders a custom button with an SVG icon.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.icon - SVG path data for the icon.
 * @param {Function} props.onPress - Function to be called when the button is pressed.
 * @returns {React.Element} A React component representing an AttendanceButton.
 */
const AttendanceButton = ({icon, onPress}) => {
    return (
        // Render TouchableOpacity with custom styles and onPress handler
        <TouchableOpacity style={styles.attendanceButton}
            onPress={onPress}>
            {/* Render SVG icon with specified dimensions */}
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 96 960 960"
                width="40"
            >
                {/* Render the icon's path with a specified fill color */}
                <Path
                    d={icon}
                    fill={COLORS.white}
                />
            </Svg>
        </TouchableOpacity >
    );
}

export default AttendanceButton;