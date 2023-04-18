import styles from "./component.style";
import {View, Text, ActivityIndicator, FlatList, ImageBackground} from "react-native";
import {useRouter} from "expo-router";
import useFetch from "../../../hook/useFetch";
import {useState} from "react";
import ListItem from "../../list_item/ListItem";
import {COLORS, SIZES} from "../../../constants";


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