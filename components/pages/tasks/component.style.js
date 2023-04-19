import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../../constants";

const styles = StyleSheet.create({
    backgroundColor:{
        width: 320,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        marginVertical: 20,
    },
    centerFlatList:{
        justifyContent: "center",
        alignItems: "center",
        height: 580,
    },
});

export default styles;