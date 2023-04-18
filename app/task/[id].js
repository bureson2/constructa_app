import styles from "./component.style";
import {ActivityIndicator, ImageBackground, Text, TextInput, View, ScrollView} from "react-native";
import {COLORS} from "../../constants";
import {useNavigation, useRouter, useSearchParams} from "expo-router";
import useFetch from "../../hook/useFetch";
import {useCallback, useState} from "react";

const TaskDetail = () => {

    // TODO stav, mapa, data, vytvoril (stav prepinatelny)

    const params = useSearchParams();
    const navigation = useNavigation();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch("tasks/" + params.id);
    const [refreshing, setRefreshing] = useState(false);

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
            <ScrollView style={styles.detailTab}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primarySecond}/>
                ) : error ? (
                    <Text>Jejda, něco se nepodařilo</Text>
                ) : (
                    <View style={styles.inputs}>
                        <View>
                            <Text style={styles.label}>
                                Jméno
                            </Text>
                            <TextInput
                                value={
                                    data.description
                                }
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Pozice
                            </Text>
                            <TextInput
                                value={data.state}
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Email
                            </Text>
                            <TextInput
                                value={data.timeTo}
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Telefon
                            </Text>
                            <TextInput
                                value={data.locationName}
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Telefon
                            </Text>
                            <TextInput
                                value={data.locationName}
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Telefon
                            </Text>
                            <TextInput
                                value={data.locationName}
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Telefon
                            </Text>
                            <TextInput
                                value={data.locationName}
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>

                    </View>
                )}
            </ScrollView>
        </ImageBackground>
    );
}

export default TaskDetail;