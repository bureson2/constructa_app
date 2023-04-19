import styles from "./component.style";
import {ActivityIndicator, ImageBackground, Text, TextInput, View, ScrollView} from "react-native";
import ScreenHeader from "../../components/headers/ScreenHeader";


const EmptyCarReport = () => {

    return (
        <ImageBackground
            source={require("../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Záznam dopravní stazky"}/>
            <View style={styles.detailTab}>
                <Text>
                    Ahoj
                </Text>
            </View>

        </ImageBackground>
    );
}

export default EmptyCarReport;