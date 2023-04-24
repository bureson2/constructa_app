import styles from "./../component.style";
import {ActivityIndicator, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, View,} from "react-native";
import ScreenHeader from "../../../components/headers/ScreenHeader";
import {useRouter, useSearchParams} from "expo-router";
import useFetch from "../../../hook/useFetch";
import sendData from "../../../hook/sendData";
import React, {useEffect, useState} from "react";
import {COLORS, SIZES} from "../../../constants";
import BlueButton from "../../../components/buttons/BlueButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateInput from "../../../components/date_input/DateInput";
import {Picker} from "@react-native-picker/picker";

const PreparedConstructionReport = () => {
    const params = useSearchParams();
    const router = useRouter();

    const {data, isLoading, error, refetch} = useFetch("projects/" + params.id);
    const [inputHeight, setInputHeight] = useState(50);
    const [inputNoteHeight, setInputNoteHeight] = useState(50);
    const [inputWeatherHeight, setInputWeatherHeight] = useState(50);

    const [taskName, setTaskName] = useState('');
    const [note, setNote] = useState('');
    const [weather, setWeather] = useState('');
    const [state, setState] = useState("IN_PROGRESS");
    const [date, setDate] = useState(new Date());

    const [token, setToken] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            const storedToken = await AsyncStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
            }
        };
        fetchToken();
    }, []);

    function handleContentSizeChange(event) {
        setInputHeight(event.nativeEvent.contentSize.height);
    }

    function handleNoteSizeChange(event) {
        setInputNoteHeight(event.nativeEvent.contentSize.height);
    }

    function handleWeatherSizeChange(event) {
        setInputWeatherHeight(event.nativeEvent.contentSize.height);
    }

    const handleSubmit = async () => {
        try {
            const dataToSend = {
                taskName: taskName,
                note: note,
                date: date,
                weather: weather,
                state: state,
                projectId: params.id,
            };

            if (token) {
                const response = await sendData("construction-reports", dataToSend, token);
                // setSendDataResponse(response);
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
            source={require("../../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Stavební záznam"}/>
            <ScrollView style={styles.detailTab}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primarySecond}/>
                ) : error ? (
                    <Text>Jejda, něco se nepodařilo</Text>
                ) : (
                    <View style={styles.inputs}>
                        <View>
                            <Text style={styles.label}>
                                Projekt
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                value={data.name}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Stavební objekt
                            </Text>
                            <TextInput
                                editable={false}
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
                                value={data.buldingFacility}
                            />
                        </View>
                        <SafeAreaView>
                            <Text style={styles.label}>
                                Datum pracovního úkonu
                            </Text>
                            <DateInput setDate={setDate} date={date}/>
                        </SafeAreaView>
                        <View>
                            <Text style={styles.label}>
                                Úkol
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                value={taskName}
                                onChangeText={(text) => setTaskName(text)}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Poznámka
                            </Text>
                            <TextInput
                                multiline={true}
                                onContentSizeChange={handleNoteSizeChange}
                                style={{
                                    height: inputNoteHeight,
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
                                value={note}
                                onChangeText={(text) => setNote(text)}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Počasí
                            </Text>
                            <TextInput
                                multiline={true}
                                onContentSizeChange={handleWeatherSizeChange}
                                style={{
                                    height: inputWeatherHeight,
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
                                value={weather}
                                onChangeText={(text) => setWeather(text)}
                            />
                        </View>

                        <View>
                            <Text style={styles.label}>
                                Stav
                            </Text>
                            <Picker
                                selectedValue={state}
                                onValueChange={(itemValue, itemIndex) => setState(itemValue)}
                                style={styles.inputText}
                            >
                                <Picker.Item label="Rozpracováno" value="IN_PROGRESS" />
                                <Picker.Item label="Dokončeno" value="FINISHED" />
                                <Picker.Item label="Blokováno" value="BLOCKED" />
                            </Picker>
                        </View>

                        <BlueButton text={"Potvrdit"} onPress={handleSubmit}/>
                    </View>
                )
                }
            </ScrollView>
        </ImageBackground>
    );
}

export default PreparedConstructionReport;