import styles from "../component.style";
import {ActivityIndicator, FlatList, ImageBackground, Text, View} from "react-native";
import ScreenHeader from "../../../components/headers/ScreenHeader";
import {COLORS, SIZES} from "../../../constants";
import ListItem from "../../../components/list_item/ListItem";
import React from "react";
import {useRouter, useSearchParams} from "expo-router";
import useFetch from "../../../hook/useFetch";

const ConstructionReports = () => {

    const router = useRouter();
    const params = useSearchParams();

    const {data, isLoading, error} = useFetch(`construction-reports/project/${params.id}`);

    const handleCardPress = (item) => {
        router.push(`/construction_report/${item.id}`);
    };

    return (
        <ImageBackground
            source={require("../../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Stavební deník"}/>

            <View style={styles.centerFlatList}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primarySecond} />
                ) : error ? (
                    <Text>Jejda, něco se nepodařilo</Text>
                ) : (
                    <FlatList
                        data={data}
                        style={styles.backgroundColor}
                        renderItem={({item}) => (
                            <ListItem itemType={"CONSTRUCTIONREPORT"}
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
    );
}

export default ConstructionReports;