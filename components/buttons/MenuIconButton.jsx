import styles from "./component.style";
import {Text, TouchableOpacity, View} from "react-native";
import {Path, Svg} from 'react-native-svg';
import {COLORS} from "../../constants";
import {useRouter} from "expo-router";

/**
 * MenuIconButton component that renders a custom button with an SVG icon and text.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.title - The text to be displayed below the icon.
 * @param {string} props.icon - SVG path data for the icon.
 * @param {string} props.routeTo - The route to navigate to when the button is pressed.
 * @returns {React.Element} A React component representing a MenuIconButton.
 */
const MenuIconButton = ({title, icon, routeTo}) => {
    // useRouter hook to handle navigation
    const router = useRouter();

    // Function to handle button press and navigation
    function handleOnPress() {
        router.push(`/${routeTo}`);
    }

    return(
        // Render TouchableOpacity with custom styles and onPress handler
        <TouchableOpacity style={styles.tab} onPress={handleOnPress}>
            {/* Render the circle container */}
            <View style={styles.circle}>
                {/* Render SVG icon with specified dimensions */}
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="60"
                  viewBox="0 96 960 960"
                  width="60"
              >
                    {/* Render the icon's path with a specified fill color */}
                    <Path
                      d={icon}
                      fill={COLORS.textColor}
                  />
              </Svg>
          </View>
            {/* Render the text with custom text styles */}
            <Text style={styles.menuIconText}>
              {title}
          </Text>
      </TouchableOpacity>
    );
}

export default MenuIconButton;