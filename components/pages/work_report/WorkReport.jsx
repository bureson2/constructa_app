import styles from "./component.style";
import {View, Text, ActivityIndicator, FlatList, ImageBackground} from "react-native";
import {useRouter} from "expo-router";
import useFetch from "../../../hook/useFetch";
import {COLORS, SIZES} from "../../../constants";
import ListItem from "../../list_item/ListItem";
import ScreenHeader from "../../headers/ScreenHeader";
import React from "react";


const WorkReport = () => {
    const router = useRouter();
    const {data, isLoading, error} = useFetch("work-reports");

    const handleCardPress = (item) => {
    };

    return (
        <ImageBackground
            source={require("../../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Docházka"}/>

            <View style={styles.centerFlatList}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primarySecond}/>
                ) : error ? (
                    <Text>Jejda, něco se nepodařilo</Text>
                ) : (
                    <FlatList
                        data={data}
                        style={styles.backgroundColor}
                        renderItem={({item}) => (
                            <ListItem itemType={"WORKREPORT"}
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

export default WorkReport;