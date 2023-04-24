import styles from "./component.style";
import ScreenHeader from "../../components/headers/ScreenHeader";
import {ActivityIndicator, ImageBackground, ScrollView, Text, TextInput, View} from "react-native";
import {COLORS, SIZES} from "../../constants";
import BlueButton from "../../components/buttons/BlueButton";
import React, {useEffect, useState} from "react";
import useFetch from "../../hook/useFetch";
import {useRouter, useSearchParams} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import sendData from "../../hook/sendData";
import * as Location from 'expo-location';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

const PreparedAttendance = () => {
    const params = useSearchParams();
    const router = useRouter();
    const [inputHeight, setInputHeight] = useState(50);
    const [token, setToken] = useState(null);

    const {data, isLoading, error, refetch} = useFetch("work-reports/location/" + params.id);
    const [location, setLocation] = useState(null);

    const getLocation = async () => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            console.warn('Android emulator detected. You may have trouble getting location on an Android emulator. Try using a physical device or the iOS simulator.');
        }

        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.warn('Permission to access location was denied');
            return;
        }

        const loc = await Location.getCurrentPositionAsync({});
        setLocation({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
        });
    };

    const handleSubmit = async () => {
        try {
            const dataToSend = {
                locationId: params.id,
                latitude: location ? location.latitude : null,
                longitude: location ? location.longitude : null,
            };

            if (token) {
                const response = await sendData("work-reports/attendance", dataToSend, token);
                router.push(`/home`);
            } else {
                console.error("No token available");
            }
        } catch (error) {
            console.error("Error while sending data:", error);
        }
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

    useEffect(() => {
        getLocation();
    }, []);

    function handleContentSizeChange(event) {
        setInputHeight(event.nativeEvent.contentSize.height);
    }

    return (
        <ImageBackground
            source={require("../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Záznam docházky"}/>
            <ScrollView style={styles.detailTab}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primarySecond}/>
                ) : error ? (
                    <Text>Jejda, něco se nepodařilo</Text>
                ) : (
                    <View style={styles.inputs}>
                        <View>
                            <Text style={styles.label}>
                                Lokalita
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
                                value={data.city + ", " + data.street + " " + data.postCode}
                                editable={false}
                            />
                        </View>

                        <BlueButton text={"Potvrdit"} onPress={handleSubmit}/>
                    </View>
                )
                }
            </ScrollView>

        </ImageBackground>
    );
}

export default PreparedAttendance;