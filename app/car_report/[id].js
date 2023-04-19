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
import {useSearchParams} from "expo-router";
import useFetch from "../../hook/useFetch";
import {useState} from "react";
import {COLORS, SIZES} from "../../constants";
import DateTimeInput from "../../components/date_input/DateTimeInput";

const PreparedCarReport = () => {
    const params = useSearchParams();

    const {data, isLoading, error, refetch} = useFetch("vehicles/" + params.id);
    const [inputHeight, setInputHeight] = useState(50);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function handleContentSizeChange(event) {
        setInputHeight(event.nativeEvent.contentSize.height); // aktualizovat výšku TextInputu na základě velikosti obsahu
    }

    return (
        <ImageBackground
            source={require("../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Záznam dopravní stazky"}/>

            <ScrollView style={styles.detailTab}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primarySecond}/>
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
                            <DateTimeInput setDate={setStartDate} date={startDate}/>
                        </SafeAreaView>
                        <SafeAreaView>
                            <Text style={styles.label}>
                                Doba ukončení jízdy/práce
                            </Text>
                            <DateTimeInput setDate={setEndDate} date={endDate}/>
                        </SafeAreaView>
                        {
                            data.type === "Auto" ?
                                <View>
                                    <Text style={styles.label}>
                                        Celková vzdálenost
                                    </Text>
                                    <TextInput
                                        style={styles.inputText}
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
                                            value={data.originalConditionMotorcycleWatch}
                                            editable={false}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.label}>
                                            Nový stav motohodin
                                        </Text>
                                        <TextInput
                                            style={styles.inputText}
                                        />
                                    </View>
                                </>
                                :
                                <>
                                </>
                        }

                        {/* todo editovatelna velikot podle obsahu*/}
                        <View>
                            <Text style={styles.label}>
                                Poznámka
                            </Text>
                            <TextInput
                                style={styles.inputText}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Nákup paliva
                            </Text>
                            <TextInput
                                style={styles.inputText}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Převážený materiál
                            </Text>
                            <TextInput
                                style={styles.inputText}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Převážená hmotnost
                            </Text>
                            <TextInput
                                style={styles.inputText}
                            />
                        </View>
                    </View>
                )}
            </ScrollView>

        </ImageBackground>
    );
}

export default PreparedCarReport;