import styles from "./component.style";
import {View, Text, ActivityIndicator, FlatList} from "react-native";
import {useRouter} from "expo-router";
import useFetch from "../../../hook/useFetch";
import {COLORS, SIZES} from "../../../constants";
import ListItem from "../../list_item/ListItem";


const WorkReport = () => {
    const router = useRouter();
    const {data, isLoading, error} = useFetch("work-reports");

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
                            <ListItem itemType={"WORKREPORT"}
                                      item={item}
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

export default WorkReport;