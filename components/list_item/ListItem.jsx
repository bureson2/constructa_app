import styles from "./component.style";
import {Text, TouchableOpacity, View} from "react-native";
import {Path, Svg} from "react-native-svg";
import {COLORS} from "../../constants";
import {ICONS} from "../../constants/icons";

/**
 * ListItem component that renders different item types.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.itemType - The type of item to render.
 * @param {Object} props.item - The item object containing data.
 * @param {Function} props.handleCardPress - Function to handle card press event.
 * @returns {React.Element} A React component representing a ListItem.
 */
const ListItem = ({itemType, item, handleCardPress}) => {

    // Functions to get the appropriate icons based on the item type and state
    // ... (all get*Icon functions)
    function getTaskIcon(state) {
        if (state === "Hotovo") {
            return ICONS.check;
        } else if (state === "V řešení") {
            return ICONS.settings;
        } else if (state === "Pozastaveno") {
            return ICONS.pause;
        } else return ICONS.eye;
    }

    function getReportIcon(type) {
        if (type === "Nemocenská") {
            return ICONS.illnes;
        } else if (type === "Dovolená") {
            return ICONS.plane;
        } else return ICONS.work;
    }

    function getProjectIcon(type) {
        if (type === "Hotovo") {
            return ICONS.check;
        } else if (type === "Příprava") {
            return ICONS.prepare;
        } else return ICONS.settings;
    }

    function getConstructionReportIcon(type) {
        if (type === "Dokončeno") {
            return ICONS.check;
        } else if (type === "Blokováno") {
            return ICONS.pause;
        } else return ICONS.settings;
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => handleCardPress(item)}
        >
            <View style={styles.circle}>
                {
                    // Render appropriate icon or text based on the itemType
                    // ... (all itemType conditions)

                    itemType === "EMPLOYEE" ?
                        <Text style={styles.circleText}>
                            {item.lastname.charAt(0)}
                        </Text>
                    : itemType === "TASK" ?
                    <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30"
                        viewBox="0 96 960 960"
                        width="30"
                    >
                        <Path
                            d={getTaskIcon(item.state)}
                            fill={COLORS.textColor}
                        />
                    </Svg>
                    : itemType === "WORKREPORT" ?
                    <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30"
                        viewBox="0 96 960 960"
                        width="30"
                    >
                        <Path
                            d={getReportIcon(item.type)}
                            fill={COLORS.textColor}
                        />
                    </Svg>
                    : itemType === "PROJECT" ?
                    <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30"
                        viewBox="0 96 960 960"
                        width="30"
                    >
                        <Path
                            d={getProjectIcon(item.state)}
                            fill={COLORS.textColor}
                        />
                    </Svg>
                    : itemType === "CONSTRUCTIONREPORT" ?
                    <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30"
                        viewBox="0 96 960 960"
                        width="30"
                    >
                        <Path
                            d={getConstructionReportIcon(item.state)}
                            fill={COLORS.textColor}
                        />
                    </Svg>

                    : <>
                    </>
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
                    : itemType === "WORKREPORT" ?
                        <View>
                            <Text>
                                {item.timeFrom.substring(8, 10)}
                                .
                                {item.timeFrom.substring(5, 7)}
                                .&nbsp;
                                {item.timeFrom.substring(0, 4)}
                                &nbsp;-&nbsp;
                                {item.timeFrom.substring(11, 16)}
                                &nbsp;(
                                {Math.floor(item.minutes / 60)}h {item.minutes % 60 !== 0 ? item.minutes % 60 : ""}min)
                            </Text>
                            <Text>
                                {item.timeTo.substring(8, 10)}
                                .
                                {item.timeTo.substring(5, 7)}
                                .&nbsp;
                                {item.timeTo.substring(0, 4)}
                                &nbsp;-&nbsp;
                                {item.timeTo.substring(11, 16)}
                            </Text>
                        </View>
                    : itemType === "PROJECT" ?
                        <View>
                            <Text>
                                {
                                    item.name
                                }
                            </Text>
                            <Text>
                                {
                                    item.buldingFacility
                                }
                            </Text>
                        </View>
                    : itemType === "CONSTRUCTIONREPORT" ?
                        <View>
                            <Text>
                                {item.date.substring(8, 10)}
                                .
                                {item.date.substring(5, 7)}
                                .&nbsp;
                                {item.date.substring(0, 4)}
                                &nbsp;-&nbsp;
                                {item.date.substring(11, 16)}
                            </Text>
                            <Text>
                                {
                                    item.taskName
                                }
                            </Text>
                        </View>
                                : <>
                                </>
                }
            </View>
        </TouchableOpacity>
    );
}

export default ListItem;