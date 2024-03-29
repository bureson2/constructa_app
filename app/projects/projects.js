import styles from "./component.style";
import {FlatList, ImageBackground, Text, View} from "react-native";
import ScreenHeader from "../../components/headers/ScreenHeader";
import {SIZES} from "../../constants";
import ListItem from "../../components/list_item/ListItem";
import React from "react";
import {useRouter} from "expo-router";
import useFetch from "../../hook/useFetch";
import Loading from "../../components/activity_indicator/Loading";

/**
 * Component that renders projects list.
 *
 * @returns {React.Element} A React component representing projects list
 */
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