import styles from "./component.style";
import {View, Text} from "react-native";
import { Svg, Path } from 'react-native-svg';
import {COLORS} from "../../constants";

const MenuIconButton = ({title, icon}) => {
    return(
      <View style={styles.tab}>
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
      </View>
    );
}

export default MenuIconButton;