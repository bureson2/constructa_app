import styles from "./component.style";
import {RefreshControl, Text, ActivityIndicator, ScrollView, ImageBackground, View, TextInput} from "react-native";
import { useRouter, useSearchParams, useNavigation } from "expo-router";
import { useCallback, useState } from "react";
import useFetch from "../../hook/useFetch";
import {COLORS} from "../../constants";


const EmployeeDetail = () => {
    const params = useSearchParams();
    const navigation = useNavigation();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch("users/" + params.id);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch()
        setRefreshing(false)
    }, []);



    return(
        <ImageBackground
            source={require("../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.detailTab}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primarySecond} />
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
                                    (data.titleBeforeName ? data.titleBeforeName + " " : "")
                                    + data.firstname + " " + data.lastname + " " +
                                    (data.titleAfterName ? data.titleAfterName : "")
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
                                value={data.role}
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Email
                            </Text>
                            <TextInput
                                value={data.email}
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Telefon
                            </Text>
                            <TextInput
                                value={data.phone}
                                style={styles.inputText}
                                editable={false}
                            />
                        </View>

                    </View>
                )}
            </View>
        </ImageBackground>
    )
}

export default EmployeeDetail;