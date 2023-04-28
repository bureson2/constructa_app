import styles from "./component.style";
import {ImageBackground, ScrollView, Text, TextInput, View} from "react-native";
import {COLORS, SIZES} from "../../constants";
import {useRouter, useSearchParams} from "expo-router";
import useFetch from "../../hook/useFetch";
import {useEffect, useState} from "react";
import ScreenHeader from "../../components/headers/ScreenHeader";
import MapView, {Marker} from 'react-native-maps';
import AttendanceButton from "../../components/buttons/AttendanceButton";
import {ICONS} from "../../constants/icons";
import sendData from "../../hook/sendData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../components/activity_indicator/Loading";

/**
 * Component that renders task detail.
 *
 * @returns {React.Element} A React component representing task detail
 */
const TaskDetail = () => {

    const params = useSearchParams();
    const router = useRouter();

    const {data, isLoading, error} = useFetch("tasks/" + params.id);
    const [inputHeight, setInputHeight] = useState(50);
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

    const onPressFinish = async () => {
        onPressHandle("Hotovo")
    }

    const onPressStop = async () => {
        onPressHandle("Pozastaveno")
    }

    const onPressInProgress = async () => {
        onPressHandle("V řešení")
    }

    const onPressHandle = async (state) => {
        try {
            const dataToSend = {
                id: params.id,
                state: state,
            };

            if (token) {
                await sendData("tasks/state", dataToSend, token);
                router.push(`/home`);
            } else {
                console.error("No token available");
            }
        } catch (error) {
            console.error("Error while sending data:", error);
        }
    }

    return (
        <ImageBackground
            source={require("../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={data.name}/>
            <ScrollView style={styles.detailTab}>
                {isLoading ? (
                    <Loading />
                ) : error ? (
                    <Text>Jejda, něco se nepodařilo</Text>
                ) : (
                    <View style={styles.inputs}>
                        <View>
                            <Text style={styles.label}>
                                Popis úkolu
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
                                value={data.description}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Aktuální stav
                            </Text>
                            <TextInput
                                value={data.state}
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Datum zahájení
                            </Text>
                            <TextInput
                                value={data.timeFrom ?
                                    data.timeFrom.substring(8, 10) + "." +
                                    data.timeFrom.substring(5, 7) + ". " +
                                    data.timeFrom.substring(0, 4)
                                    : ""
                                }
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Datum ukončení
                            </Text>
                            <TextInput
                                value={
                                    data.timeTo ?
                                        data.timeTo.substring(8, 10) + "." +
                                        data.timeTo.substring(5, 7) + ". " +
                                        data.timeTo.substring(0, 4)
                                        : ""
                                }
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Lokace
                            </Text>
                            <TextInput
                                value={data.locationName}
                                style={styles.inputText}
                                editable={false}
                            />
                            <MapView
                                style={styles.map}
                                initialRegion={{
                                    latitude: data.latitude ? data.latitude : 50.073658,
                                    longitude: data.longitude ? data.longitude : 14.41854,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                scrollEnabled={false}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: data.latitude ? data.latitude : 50.073658,
                                        longitude: data.longitude ? data.longitude : 14.41854,
                                    }}
                                    title={data.locationName}
                                    description={"data.description"}
                                />
                            </MapView>
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Zadavatel
                            </Text>
                            <TextInput
                                value={data.author ?
                                    (data.author.titleBeforeName ? data.author.titleBeforeName + " " : "")
                                    + data.author.firstname + " " + data.author.lastname + " " +
                                    (data.author.titleAfterName ? data.author.titleAfterName : "")
                                    : ""}
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View style={styles.horizontalButtons}>
                            <AttendanceButton icon={ICONS.settings}
                                              onPress={onPressInProgress}/>
                            <View style={styles.marginButtons}/>
                            <AttendanceButton icon={ICONS.pause}
                                              onPress={onPressStop}/>
                            <View style={styles.marginButtons}/>
                            <AttendanceButton icon={ICONS.check}
                                              onPress={onPressFinish}/>
                        </View>
                    </View>
                )}
            </ScrollView>
        </ImageBackground>
    );
}

export default TaskDetail;