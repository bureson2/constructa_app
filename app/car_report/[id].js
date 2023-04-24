import styles from "./component.style";
import {
    ActivityIndicator,
    ImageBackground,
    Text,
    TextInput,
    View,
    ScrollView,
    Button,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import ScreenHeader from "../../components/headers/ScreenHeader";
import {useRouter, useSearchParams} from "expo-router";
import useFetch from "../../hook/useFetch";
import sendData from "../../hook/sendData";
import React, {useEffect, useState} from "react";
import {COLORS, SIZES} from "../../constants";
import DateTimeInput from "../../components/date_input/DateTimeInput";
import BlueButton from "../../components/buttons/BlueButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../components/activity_indicator/Loading";

const PreparedCarReport = () => {
    const params = useSearchParams();
    const router = useRouter();

    const {data, isLoading, error, refetch} = useFetch("vehicles/" + params.id);
    const [inputHeight, setInputHeight] = useState(50);

    const [timeFrom, setTimeFrom] = useState(new Date());
    const [timeTo, setTimeTo] = useState(new Date());
    const [afterworkConditionMotorcycleWatch, setAfterworkConditionMotorcycleWatch] = useState(0);
    const [cargoMass, setCargoMass] = React.useState(0);
    const [cargoType, setCargoType] = useState(0);
    const [distance, setDistance] = useState(0);
    const [purchaseOfFuelLitres, setPurchaseOfFuelLitres] = useState(0);
    const [description, setDescription] = React.useState('');

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
        setInputHeight(event.nativeEvent.contentSize.height); // aktualizovat výšku TextInputu na základě velikosti obsahu
    }

    const handleSubmit = async () => {
        try {
            const dataToSend = {
                timeFrom: timeFrom,
                timeTo: timeTo,
                vehicle: params.id,
                originalConditionMotorcycleWatch: data.conditionMotorcycleWatch ,
                afterworkConditionMotorcycleWatch: afterworkConditionMotorcycleWatch,
                cargoMass: cargoMass,
                cargoType: cargoType,
                distance: distance,
                purchaseOfFuelLitres: purchaseOfFuelLitres,
                description: description,
            };

            if (token) {
                const response = await sendData("vehicles/reports", dataToSend, token);
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
            source={require("../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Dopravní záznam"}/>

            <ScrollView style={styles.detailTab}>
                {isLoading ? (
                    <Loading />
                ) : error ? (
                    <Text>Jejda, něco se nepodařilo</Text>
                ) : (
                    <View style={styles.inputs}>
                        <View>
                            <Text style={styles.label}>
                                Vozidlo
                            </Text>
                            <TextInput
                                multiline={true}
                                editable={false}
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
                                value={
                                    data.factory + " " + data.name +
                                    "(" + data.registrationNumber + ")"
                                }
                            />
                        </View>
                        <SafeAreaView>
                            <Text style={styles.label}>
                                Doba zahájení jízdy/práce
                            </Text>
                            <DateTimeInput setDate={setTimeFrom} date={timeFrom}/>
                        </SafeAreaView>
                        <SafeAreaView>
                            <Text style={styles.label}>
                                Doba ukončení jízdy/práce
                            </Text>
                            <DateTimeInput setDate={setTimeTo} date={timeTo}/>
                        </SafeAreaView>
                        {
                            data.type === "Auto" ?
                                <View>
                                    <Text style={styles.label}>
                                        Celková vzdálenost
                                    </Text>
                                    <TextInput
                                        style={styles.inputText}
                                        keyboardType={"numeric"}
                                        value={distance.toString()}
                                        onChangeText={(text) => setDistance(text)}
                                    />
                                </View>
                                :
                            data.type === "Stroj" ?
                                <>
                                    <View>
                                        <Text style={styles.label}>
                                            Původní stav motohodin
                                        </Text>
                                        <TextInput
                                            style={styles.inputText}
                                            keyboardType={"numeric"}
                                            value={data.conditionMotorcycleWatch.toString() }
                                            editable={false}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.label}>
                                            Nový stav motohodin
                                        </Text>
                                        <TextInput
                                            style={styles.inputText}
                                            keyboardType={"numeric"}
                                            value={afterworkConditionMotorcycleWatch.toString()}
                                            onChangeText={(text) => setAfterworkConditionMotorcycleWatch(text)}
                                        />
                                    </View>
                                </>
                                :
                                <>
                                </>
                        }

                        <View>
                            <Text style={styles.label}>
                                Poznámka
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
                                value={description}
                                onChangeText={(text) => setDescription(text)}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Nákup paliva [l]
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                keyboardType={"numeric"}
                                value={purchaseOfFuelLitres.toString()}
                                onChangeText={(text) => setPurchaseOfFuelLitres(text)}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Převážený materiál
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                value={cargoType}
                                onChangeText={(text) => setCargoType(text)}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Převážená hmotnost [kg]
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                keyboardType={"numeric"}
                                value={cargoMass.toString()}
                                onChangeText={(text) => setCargoMass(text)}
                            />
                        </View>
                        <BlueButton text={"Potvrdit"} onPress={handleSubmit}/>
                    </View>
                )}
            </ScrollView>
        </ImageBackground>
    );
}

export default PreparedCarReport;