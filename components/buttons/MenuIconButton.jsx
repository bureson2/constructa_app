import styles from "./component.style";
import {View, Text, TouchableOpacity, Linking} from "react-native";
import { Svg, Path } from 'react-native-svg';
import {COLORS} from "../../constants";
import {useRouter} from "expo-router";

const MenuIconButton = ({title, icon, routeTo}) => {
    const router = useRouter();

    function handleOnPress() {
        router.push(`/${routeTo}`);
    }

    return(
      <TouchableOpacity style={styles.tab} onPress={handleOnPress}>
          <View style={styles.circle}>
              <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="60"
                  viewBox="0 96 960 960"
                  width="60"
              >
                  <Path
                      d={icon}
                      fill={COLORS.textColor}
                  />
              </Svg>
          </View>
          <Text style={styles.menuIconText}>
              {title}
          </Text>
      </TouchableOpacity>
    );
}

export default MenuIconButton;