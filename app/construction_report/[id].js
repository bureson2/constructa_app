import styles from "./component.style";
import ScreenHeader from "../../components/headers/ScreenHeader";
import {ImageBackground, Text, View} from "react-native";

const ConstructionReportDetail = () => {
    return (
        <ImageBackground
            source={require("../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"TODO - PROJECT NAME, DATE?"}/>
            <View style={styles.detailTab}>
                <Text>
                    Ahoj
                </Text>
            </View>

        </ImageBackground>
    );
}

export default ConstructionReportDetail;