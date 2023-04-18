import styles from "./component.style";
import {View, Text, ActivityIndicator, FlatList, ImageBackground} from "react-native";
import {useRouter} from "expo-router";
import useFetch from "../../../hook/useFetch";
import {COLORS, SIZES} from "../../../constants";
import ListItem from "../../list_item/ListItem";


const Task = () => {

    const router = useRouter();
    const {data, isLoading, error} = useFetch("tasks");

    const handleCardPress = (item) => {
        router.push(`/task/${item.id}`);
    };

    return (
        <ImageBackground
            source={require("../../../assets/backgrounds/basicBG.png")}
            style={styles.background}
            resizeMode="cover"
        >
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