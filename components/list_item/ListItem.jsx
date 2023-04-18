import styles from "./component.style";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {Path, Svg} from "react-native-svg";
import {COLORS} from "../../constants";
import {ICONS} from "../../constants/icons";


const ListItem = ({itemType, item, handleCardPress}) => {

    function getIcon(state){
        if(state === "Hotovo"){
            return ICONS.check;
        } else if (state === "V řešení"){
            return ICONS.work;
        } else if (state === "Pozastaveno"){
            return ICONS.pause;
        } else return ICONS.eye;
    }


    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => handleCardPress(item)}
        >
            <View style={styles.circle}>
                {
                    itemType === "EMPLOYEE" ?
                        <Text style={styles.circleText}>
                            {item.lastname.charAt(0)}
                        </Text> :
                    itemType === "TASK" ?
                        <Svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="30"
                            viewBox="0 96 960 960"
                            width="30"
                        >
                            <Path
                                d={getIcon(item.state)}
                                fill={COLORS.textColor}
                            />
                        </Svg>
                        :
                        <Text style={styles.circleText}>
                            {item.id}
                        </Text>
                }
            </View>
            <View style={styles.contentContainer}>
                {itemType === "EMPLOYEE" ?
                    <View>
                        <Text>
                            {
                                (item.titleBeforeName ? item.titleBeforeName + " " : "")
                                + item.firstname + " " + item.lastname + " " +
                                (item.titleAfterName ? item.titleAfterName : "")
                            }
                        </Text>
                        <Text>
                            {
                                item.role
                            }
                        </Text>
                    </View>
                    :
                    itemType === "TASK" ?
                        <View>
                            <Text>
                                {
                                    item.name
                                }
                            </Text>
                            <Text>
                                {item.timeFrom.substring(0, 10)}
                                &nbsp;(
                                {item.timeFrom.substring(11, 16)}
                                &nbsp;-&nbsp;
                                {item.timeTo.substring(11, 16)}
                                )
                            </Text>
                        </View>
                    :
                    <>
                    </>
                }
            </View>
        </TouchableOpacity>
    );
}

export default ListItem;