import styles from "./component.style";
import ScreenHeader from "../../components/headers/ScreenHeader";
import {ActivityIndicator, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import {COLORS, SIZES} from "../../constants";
import DateInput from "../../components/date_input/DateInput";
import {Picker} from "@react-native-picker/picker";
import BlueButton from "../../components/buttons/BlueButton";
import React from "react";

const PreparedAttendance = () => {


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
                                Projekt
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                value={data.name}
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