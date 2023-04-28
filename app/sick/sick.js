import styles from "./component.style";
import {ImageBackground, SafeAreaView, Text, TextInput, View} from "react-native";
import ScreenHeader from "../../components/headers/ScreenHeader";
import DateInput from "../../components/date_input/DateInput";
import React, {useEffect, useState} from "react";
import {COLORS, SIZES} from "../../constants";
import BlueButton from "../../components/buttons/BlueButton";
import sendData from "../../hook/sendData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useRouter} from "expo-router";

/**
 * Component that renders sick form.
 *
 * @returns {React.Element} A React component representing sick form
 */
const Sick = () => {
    const router = useRouter();
    const [timeFrom, setTimeFrom] = useState(new Date());
    const [timeTo, setTimeTo] = useState(new Date());
    const [inputHeight, setInputHeight] = useState(50);
    const [token, setToken] = useState(null);

    function handleContentSizeChange(event) {
        setInputHeight(event.nativeEvent.contentSize.height);
    }

    useEffect(() => {
        const fetchToken = async () => {
            const storedToken = await AsyncStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
            }
        };
        fetchToken();
    }, []);

    const handleSubmit = async () => {
        try {
            const dataToSend = {
                timeFrom: timeFrom,
                timeTo: timeTo,
            };

            if (token) {
                const response = await sendData("work-reports/illness", dataToSend, token);
                router.push(`/home`);
            } else {
                console.error("No token available");
            }
        } catch (error) {
            console.error("Error while sending data:", error);
        }
    };

    return (
        <ImageBackground
            source={require("../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Záznam nemoci"}/>
            <SafeAreaView style={styles.detailTab}>
                <View style={styles.inputs}>

                    <View>
                        <Text style={styles.label}>
                            Popis zdravotních problémů
                        </Text>
                        <TextInput
                            multiline={true}
                            onContentSizeChange={handleContentSizeChange}
                            style={{
                                height: inputHeight,
                                width: 250, color: COLORS.textColor,
                                backgroundColor: COLORS.secondary,
                                borderRadius: 5,
                                shadowColor: '#000',
                                shadowOffset: {width: 0, height: 2},
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 5,
                                padding: 15,
                                fontSize: SIZES.medium,
                                marginBottom: 20,
                            }}
                        />
                    </View>

                    <SafeAreaView>
                        <Text style={styles.label}>
                            Datum zahájení neschopenky
                        </Text>
                        <DateInput setDate={setTimeFrom} date={timeFrom}/>
                    </SafeAreaView>

                    <SafeAreaView>
                        <Text style={styles.label}>
                            Datum ukončení neschopenky
                        </Text>
                        <DateInput setDate={setTimeTo} date={timeTo}/>
                    </SafeAreaView>
                    <BlueButton text={"Potvrdit"} onPress={handleSubmit}/>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default Sick;