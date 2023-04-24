import styles from "./../component.style";
import {ActivityIndicator, ImageBackground, Text, TextInput, View, ScrollView, SafeAreaView} from "react-native";
import {COLORS, SIZES} from "../../../constants";
import {useNavigation, useRouter, useSearchParams} from "expo-router";
import useFetch from "../../../hook/useFetch";
import React, {useCallback, useEffect, useState} from "react";
import ScreenHeader from "../../../components/headers/ScreenHeader";
import MapView, {Marker} from 'react-native-maps';
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimeInput from "../../../components/date_input/DateTimeInput";

const TaskDetail = () => {

    const params = useSearchParams();
    const router = useRouter();

    const {data, isLoading, error, refetch} = useFetch("users/" + params.id);
    const [refreshing, setRefreshing] = useState(false);
    const [inputHeight, setInputHeight] = useState(50);
    const [token, setToken] = useState(null);
    const [timeFrom, setTimeFrom] = useState(new Date());
    const [timeTo, setTimeTo] = useState(new Date());

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

    return (
        <ImageBackground
            source={require("../../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={data.name}/>

            <ScrollView style={styles.detailTab}>
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
                            value={""}
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
                            value={data.description}
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
                            value={""}
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
                                title={""}
                                description={"data.description"}
                            />
                        </MapView>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

export default TaskDetail;