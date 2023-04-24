import styles from "./component.style";
import ScreenHeader from "../../components/headers/ScreenHeader";
import {ActivityIndicator, ImageBackground, Text, TextInput, View, TouchableOpacity} from "react-native";
import {COLORS, SIZES} from "../../constants";
import AttendanceButton from "../../components/buttons/AttendanceButton";
import {ICONS} from "../../constants/icons";
import {useRouter, useSearchParams} from "expo-router";
import useFetch from "../../hook/useFetch";
import {useState} from "react";
import Loading from "../../components/activity_indicator/Loading";

const ConstructionReportDetail = () => {

    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch("construction-reports/" + params.id);
    const [noteInpitHeight, setNoteInputHeight] = useState(50);
    const [weatherInputHeight, setWeatherInputHeight] = useState(50);

    function handleExecutorPress(){
        router.push(`/employee/${data.executor.id}`);
    }

    function handleNoteSizeChange(event) {
        setNoteInputHeight(event.nativeEvent.contentSize.height);
    }

    function handleWeatherSizeChange(event) {
        setWeatherInputHeight(event.nativeEvent.contentSize.height);
    }

    return (
        <ImageBackground
            source={require("../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={
                data.taskName
            }/>

            <View style={styles.detailTab}>
                {isLoading ? (
                    <Loading />
                ) : error ? (
                    <Text>Jejda, něco se nepodařilo</Text>
                ) : (
                    <View style={styles.inputs}>
                        <View>
                            <Text style={styles.label}>
                                Popis
                            </Text>
                            <TextInput
                                multiline={true}
                                editable={false}
                                onContentSizeChange={handleNoteSizeChange}
                                style={{ height: noteInpitHeight,
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
                                value={data.note}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Počasí
                            </Text>
                            <TextInput
                                multiline={true}
                                editable={false}
                                onContentSizeChange={handleWeatherSizeChange}
                                style={{ height: weatherInputHeight,
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
                                value={data.weather}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Stav
                            </Text>
                            <TextInput
                                value={data.state}
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Datum
                            </Text>
                            <TextInput
                                value={
                                    data.date ?
                                        data.date.substring(8,10) + "." +
                                        data.date.substring(5,7) + ". " +
                                        data.date.substring(0,4)
                                        : ""
                                }
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Zodpovědná osoba
                            </Text>
                            <TouchableOpacity onPress={handleExecutorPress}>
                                <TextInput
                                    value={
                                        data.executor ?
                                            data.executor.firstname  + " " + data.executor.lastname : ""
                                    }
                                    style={styles.inputText}
                                    editable={false}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
            </View>

        </ImageBackground>
    );
}

export default ConstructionReportDetail;