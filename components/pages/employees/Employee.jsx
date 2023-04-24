import styles from "./component.style";
import {View, Text, ActivityIndicator, FlatList, ImageBackground} from "react-native";
import {useRouter} from "expo-router";
import useFetch from "../../../hook/useFetch";
import React, {useState} from "react";
import ListItem from "../../list_item/ListItem";
import {COLORS, SIZES} from "../../../constants";
import ScreenHeader from "../../headers/ScreenHeader";
import {useRoute} from "@react-navigation/native";
import Loading from "../../activity_indicator/Loading";


const Employee = () => {

    const router = useRouter();
    const {data, isLoading, error} = useFetch("users");

    const handleCardPress = (item) => {
        router.push(`/employee/${item.id}`);
    };

    return (
        <ImageBackground
            source={require("../../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Kontakty"} />

            <View style={styles.centerFlatList}>
                {isLoading ? (
                    <Loading />
                ) : error ? (
                    <Text>Jejda, něco se nepodařilo</Text>
                ) : (
                    <FlatList
                        data={data}
                        style={styles.backgroundColor}
                        renderItem={({item}) => (
                            <ListItem itemType={"EMPLOYEE"}
                                      item={item}
                                      handleCardPress={handleCardPress}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{columnGap: SIZES.medium}}
                    />
                )}
            </View>
        </ImageBackground>
    )
}

export default Employee;