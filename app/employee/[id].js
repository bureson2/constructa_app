import styles from "./component.style";
import {ImageBackground, Linking, Text, TextInput, View} from "react-native";
import {useSearchParams} from "expo-router";
import useFetch from "../../hook/useFetch";
import ScreenHeader from "../../components/headers/ScreenHeader";
import {ICONS} from "../../constants/icons";
import AttendanceButton from "../../components/buttons/AttendanceButton";
import Loading from "../../components/activity_indicator/Loading";

/**
 * Component that renders employee detail.
 *
 * @returns {React.Element} A React component representing employee detail
 */
const EmployeeDetail = () => {
    const params = useSearchParams();

    const { data, isLoading, error, refetch } = useFetch("users/" + params.id);

    function handleCallPress() {
        Linking.openURL(`tel:${data.phone}`);
    }

    function handleEmailPress() {
        Linking.openURL(`mailto:${data.email}`);
    }

    return(
        <ImageBackground
            source={require("../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={
                (data.titleBeforeName ? data.titleBeforeName + " " : "")
                + data.firstname + " " + data.lastname + " " +
                (data.titleAfterName ? data.titleAfterName : "")
            } addTask={true} />
            <View style={styles.detailTab}>
                {isLoading ? (
                    <Loading />
                ) : error ? (
                    <Text>Jejda, něco se nepodařilo</Text>
                ) : (
                    <View style={styles.inputs}>
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
                        <View style={styles.horizontalButtons}>
                            <AttendanceButton icon={ICONS.phone}
                                              onPress={handleCallPress}
                            />
                            <View style={styles.marginButtons}/>
                            <AttendanceButton icon={ICONS.mail}
                                              onPress={handleEmailPress}/>
                        </View>
                    </View>
                )}
            </View>
        </ImageBackground>
    )
}

export default EmployeeDetail;