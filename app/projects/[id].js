import styles from "./component.style";
import {ActivityIndicator, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import ScreenHeader from "../../components/headers/ScreenHeader";
import {useRouter, useSearchParams} from "expo-router";
import useFetch from "../../hook/useFetch";
import React, {useCallback, useState} from "react";
import {COLORS, SIZES} from "../../constants";
import MapView, {Marker} from "react-native-maps";
import AttendanceButton from "../../components/buttons/AttendanceButton";
import {ICONS} from "../../constants/icons";
import BlueButton from "../../components/buttons/BlueButton";
import DateTimeInput from "../../components/date_input/DateTimeInput";
import Loading from "../../components/activity_indicator/Loading";

const ProjectDetail = () => {
    const router = useRouter();
    const params = useSearchParams();

    const { data, isLoading, error, refetch } = useFetch("projects/" + params.id);
    const [refreshing, setRefreshing] = useState(false);
    const [inputHeight, setInputHeight] = useState(50);

    function handleOnPress(){
        router.push(`/construction_report/list/${params.id}`);
    }

    function handleContentSizeChange(event) {
        setInputHeight(event.nativeEvent.contentSize.height); // aktualizovat výšku TextInputu na základě velikosti obsahu
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch()
        setRefreshing(false)
    }, []);

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
                                Stavební objekt
                            </Text>
                            <TextInput
                                editable={false}
                                multiline={true}
                                onContentSizeChange={handleContentSizeChange}
                                style={{ height: inputHeight,
                                    width: 250, color: COLORS.textColor,
                                    backgroundColor: COLORS.secondary,
                                    borderRadius: 5,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.5,
                                    shadowRadius: 2,
                                    elevation: 5,
                                    padding: 15,
                                    fontSize: SIZES.medium,
                                    marginBottom: 20, }}
                                value={data.buldingFacility}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Stav projektu
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
                                value={
                                    data.startedAt ?
                                        data.startedAt.substring(8,10) + "." +
                                        data.startedAt.substring(5,7) + ". " +
                                        data.startedAt.substring(0,4)
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
                                    data.deadline ?
                                        data.deadline.substring(8,10) + "." +
                                        data.deadline.substring(5,7) + ". " +
                                        data.deadline.substring(0,4)
                                        : ""
                                }
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View style={styles.horizontalButtons}>
                            <BlueButton text={"Stavební deník"} onPress={handleOnPress}/>
                        </View>
                    </View>
                )}
            </ScrollView>

        </ImageBackground>
    );
}

export default ProjectDetail;