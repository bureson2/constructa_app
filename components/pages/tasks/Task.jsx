import styles from "../component.style";
import {FlatList, ImageBackground, Text, View} from "react-native";
import {useRouter} from "expo-router";
import useFetch from "../../../hook/useFetch";
import {SIZES} from "../../../constants";
import ListItem from "../../list_item/ListItem";
import ScreenHeader from "../../headers/ScreenHeader";
import React from "react";
import Loading from "../../activity_indicator/Loading";
import {useFocusEffect} from "@react-navigation/native";

const Task = () => {

    const router = useRouter();
    const {data, isLoading, error, refetch} = useFetch("tasks/my");

    const handleCardPress = (item) => {
        router.push(`/task/${item.id}`);
    };

    useFocusEffect(
        React.useCallback(() => {
            refetch();
        }, [])
    );

    return (
        <ImageBackground
            source={require("../../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Seznam úkolů"}/>

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
                            <ListItem itemType={"TASK"}
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

export default Task;