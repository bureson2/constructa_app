 import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../../constants";

const styles = StyleSheet.create({
    tabLines:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // borderStyle: "solid",
        // borderWidth: 2,
        // borderColor: "red",
    },
    tabCol:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        paddingVertical: 15,
    }
});

export default styles;