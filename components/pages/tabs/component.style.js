 import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../../constants";

const styles = StyleSheet.create({
    tabLines:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: '100%',
    },
    tabCol:{
        flexDirection: "column",
        justifyContent: "space-around",
        paddingVertical: 15,
    },
    background: {
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: 580,
    }
});

export default styles;