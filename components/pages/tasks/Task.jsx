import styles from "./component.style";
import {View, Text, ActivityIndicator, FlatList} from "react-native";
import {useRouter} from "expo-router";
import useFetch from "../../../hook/useFetch";
import {COLORS, SIZES} from "../../../constants";
import ListItem from "../../list_item/ListItem";


const Task = () => {

    const router = useRouter();
    const {data, isLoading, error} = useFetch("tesks");

    const handleCardPress = (item) => {
        router.push(`/task/${item.id}`);
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
        </View>
    )
}

export default Task;