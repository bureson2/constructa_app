import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    background:{
        paddingVertical: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    detailTab:{
        width: 320,
        height: 450,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        marginVertical: 20,
    },
});

export default styles;