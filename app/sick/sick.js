import styles from "./component.style";
import {ImageBackground, Text, View} from "react-native";
import ScreenHeader from "../../components/headers/ScreenHeader";

const Sick = () => {
    return (
        <ImageBackground
            source={require("../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Záznam nemoci"}/>
            <View style={styles.detailTab}>
                <Text>
                    Ahoj
                </Text>
            </View>

        </ImageBackground>
    );
}

export default Sick;