import {StyleSheet} from "react-native";
import {COLORS, FONT, SIZES} from "../../constants";

const styles = StyleSheet.create({
    background:{
        paddingVertical: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    inputs: {
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 20,
    },
    detailTab:{
        width: 320,
        height: 500,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        marginVertical: 20,
    },
    label:{
        color: COLORS.textColor,
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
        marginBottom: 10,
    },
});

export default styles;