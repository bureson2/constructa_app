import styles from "./component.style";
import {View, Text, ActivityIndicator, FlatList} from "react-native";
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
        <View style={{flex: 1}}>
            <View>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primarySecond}/>
                ) : error ? (
                    <Text>Jejda, něco se nepodařilo</Text>
                ) : (
                    <FlatList
                        data={data}
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
        </View>

    )
}

export default Employee;