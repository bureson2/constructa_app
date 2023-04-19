import styles from "./component.style";
import {ActivityIndicator, FlatList, ImageBackground, Text, View} from "react-native";
import ScreenHeader from "../../components/headers/ScreenHeader";
import {COLORS, SIZES} from "../../constants";
import ListItem from "../../components/list_item/ListItem";
import React from "react";
import {useRouter} from "expo-router";
import useFetch from "../../hook/useFetch";

const Projects = () => {

    const router = useRouter();
    const {data, isLoading, error} = useFetch("projects");

    const handleCardPress = (item) => {
        router.push(`/projects/${item.id}`);
    };

    return (
        <ImageBackground
            source={require("../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScreenHeader title={"Projekty"}/>
            {/*<View style={styles.detailTab}>*/}
            {/*    <Text>*/}
            {/*        Ahoj*/}
            {/*    </Text>*/}
            {/*</View>*/}

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
                            <ListItem itemType={"PROJECT"}
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

export default Projects;