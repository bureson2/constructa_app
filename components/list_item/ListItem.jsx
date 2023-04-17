import styles from "./component.style";
import {View, Text, TouchableOpacity, Image} from "react-native";


const ListItem = ({itemType, item, handleCardPress}) => {

    // const firstLetter = item.name.charAt(0);
    const firstLetter = item.id;

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => handleCardPress(item)}
        >
            <View style={styles.circle}>
                <Text style={styles.circleText}>{firstLetter}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text numberOfLines={1}>
                    {item.id}
                </Text>

                {/*<Text numberOfLines={1}>*/}
                {/*    {item.name}*/}
                {/*</Text>*/}

                {/*{*/}
                {/*    itemType === "GYM" ? (*/}
                {/*        <View>*/}
                {/*            <Text numberOfLines={1}>*/}
                {/*                {item.city + item.street + item.post_number}*/}
                {/*            </Text>*/}
                {/*        </View>*/}
                {/*    ) : (*/}
                {/*        <>*/}
                {/*        </>*/}
                {/*    )*/}
                {/*}*/}
            </View>
        </TouchableOpacity>
    );
}

export default ListItem;