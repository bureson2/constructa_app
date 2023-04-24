import React from "react";
import styles from "../component.style";
import {FlatList, ImageBackground, Text, View} from "react-native";
import useFetch from "../../../hook/useFetch";
import {SIZES} from "../../../constants";
import ListItem from "../../list_item/ListItem";
import ScreenHeader from "../../headers/ScreenHeader";
import Loading from "../../activity_indicator/Loading";
import {useFocusEffect} from "@react-navigation/native";

const WorkReport = () => {
    const { data, isLoading, error, refetch } = useFetch("work-reports/my");

    useFocusEffect(
        React.useCallback(() => {
            refetch();
        }, [])
    );

    const handleCardPress = (item) => {};

    return (
        <ImageBackground
            source={require("../../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Docházka"} />

            <View style={styles.centerFlatList}>
                {isLoading ? (
                    <Loading />
                ) : error ? (
                    <Text>Jejda, něco se nepodařilo</Text>
                ) : (
                    <FlatList
                        data={data}
                        style={styles.backgroundColor}
                        renderItem={({ item }) => (
                            <ListItem
                                itemType={"WORKREPORT"}
                                item={item}
                                handleCardPress={handleCardPress}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                    />
                )}
            </View>
        </ImageBackground>
    );
};

export default WorkReport;
