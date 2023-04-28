import styles from "./../component.style";
import {ImageBackground, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import {COLORS, SIZES} from "../../../constants";
import {useRouter, useSearchParams} from "expo-router";
import useFetch from "../../../hook/useFetch";
import React, {useEffect, useState} from "react";
import ScreenHeader from "../../../components/headers/ScreenHeader";
import MapView, {Marker, PROVIDER_DEFAULT, UrlTile} from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimeInput from "../../../components/date_input/DateTimeInput";
import sendData from "../../../hook/sendData";
import BlueButton from "../../../components/buttons/BlueButton";
import Loading from "../../../components/activity_indicator/Loading";

/**
 * Component that renders new task form.
 *
 * @returns {React.Element} A React component representing new task form
 */
const TaskDetail = () => {

    const params = useSearchParams();
    const router = useRouter();

    const {data, isLoading, error, refetch} = useFetch("users/" + params.id);
    const [inputHeight, setInputHeight] = useState(50);
    const [token, setToken] = useState(null);
    const [timeFrom, setTimeFrom] = useState(new Date());
    const [timeTo, setTimeTo] = useState(new Date());
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskLocation, setTaskLocation] = useState('');

    const [location, setLocation] = useState({
        latitude: 50.073658,
        longitude: 14.41854,
    });

    const handleMapPress = (event) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        setLocation({ latitude, longitude });
    };

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

    const handleSubmit = async () => {
        try {
            const dataToSend = {
                name: taskName,
                description: taskDescription,
                timeFrom: timeFrom,
                timeTo: timeTo,
                locationName: taskLocation,
                longitude: location.longitude,
                latitude: location.latitude,
                userId: params.id,
            };

            if (token) {
                const response = await sendData("tasks", dataToSend, token);
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
            <ScreenHeader title={"Zadat úkol"}/>

            <ScrollView style={styles.detailTab}>
                {isLoading ? (
                    <Loading />
                ) : error ? (
                    <Text>Jejda, něco se nepodařilo</Text>
                ) : (
                    <View style={styles.inputs}>
                        <View>
                            <Text style={styles.label}>
                                Povřená osoba
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                value={
                                    (data.titleBeforeName ? data.titleBeforeName + " " : "")
                                    + data.firstname + " " + data.lastname + " " +
                                    (data.titleAfterName ? data.titleAfterName : "")
                                }
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Název úkolu
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                keyboardType={"numeric"}
                                value={taskName}
                                onChangeText={(text) => setTaskName(text)}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Popis úkolu
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
                                value={taskDescription}
                                onChangeText={(text) => setTaskDescription(text)}
                            />
                        </View>

                        <SafeAreaView>
                            <Text style={styles.label}>
                                Doba zahájení úkoli
                            </Text>
                            <DateTimeInput setDate={setTimeFrom} date={timeFrom}/>
                        </SafeAreaView>

                        <SafeAreaView>
                            <Text style={styles.label}>
                                Doba dokončení úkolu
                            </Text>
                            <DateTimeInput setDate={setTimeTo} date={timeTo}/>
                        </SafeAreaView>

                        <View>
                            <Text style={styles.label}>
                                Lokace
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                value={taskLocation}
                                onChangeText={(text) => setTaskLocation(text)}
                            />
                            <MapView
                                style={styles.map}
                                region={{
                                    latitude: location.latitude ? location.latitude : 50.073658,
                                    longitude: location.longitude ? location.longitude : 14.41854,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                provider={PROVIDER_DEFAULT}
                                customMapStyle={[
                                    {
                                        featureType: "all",
                                        elementType: "all",
                                        stylers: [{ visibility: "on" }],
                                    },
                                ]}
                                onPress={handleMapPress}
                            >
                                <UrlTile
                                    urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    maximumZ={19}
                                    flipY={false}
                                />
                                <Marker
                                    coordinate={location}
                                    title={""}
                                    description={"data.description"}
                                />
                            </MapView>
                        </View>
                        <BlueButton text={"Potvrdit"} onPress={handleSubmit}/>
                    </View>
                )}
            </ScrollView>
        </ImageBackground>
    );
}

export default TaskDetail;