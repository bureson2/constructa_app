import styles from "./component.style";
import {ActivityIndicator, ImageBackground, Text, TextInput, View, ScrollView} from "react-native";
import ScreenHeader from "../../components/headers/ScreenHeader";
import {useRouter} from "expo-router";


const EmptyCarReport = () => {
    const router = useRouter();

    function onQrPressHandle(){
        router.push(`/qr_scanner/carScanner`);
    }

    return (
        <ImageBackground
            source={require("../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Záznam dopravní stazky"} qrCode={true} onQrPress={onQrPressHandle} />
            <View style={styles.detailTab}>
                <View style={styles.detailTab}>
                    <View>
                        <Text style={styles.label}>
                            Email
                        </Text>
                        <TextInput
                            // value={email}
                            style={styles.inputText}
                            placeholder="Email..."
                            placeholderTextColor="#003f5c"
                            autoCompleteType="email"
                            keyboardType="email-address"
                            // onChangeText={text => setEmail(text)}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>
                            Email
                        </Text>
                        <TextInput
                            // value={email}
                            style={styles.inputText}
                            placeholder="Email..."
                            placeholderTextColor="#003f5c"
                            autoCompleteType="email"
                            keyboardType="email-address"
                            // onChangeText={text => setEmail(text)}
                        />
                    </View>
                </View>
            </View>

        </ImageBackground>
    );
}

export default EmptyCarReport;