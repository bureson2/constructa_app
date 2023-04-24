import React, { useEffect } from "react"; // Import useEffect
import styles from "./component.style";
import { View, Text, ActivityIndicator, FlatList, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import useFetch from "../../../hook/useFetch";
import { COLORS, SIZES } from "../../../constants";
import ListItem from "../../list_item/ListItem";
import ScreenHeader from "../../headers/ScreenHeader";
import Loading from "../../activity_indicator/Loading";

const WorkReport = () => {
    const router = useRouter();
    const { data, isLoading, error, refetch } = useFetch("work-reports/my"); // Add refetch function

    useEffect(() => {
        // Call refetch on component mount or any other dependency changes
        refetch();
    }, []); // Add dependencies here, if any. Leave it empty for running only on component mount

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
