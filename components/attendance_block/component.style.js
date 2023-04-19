import {StyleSheet} from "react-native";
import {COLORS, SIZES, FONT} from "../../constants";

const styles = StyleSheet.create({
    block:{
        width: 320,
        height: 150,
        backgroundColor: COLORS.white,
        color: COLORS.textColor,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        fontWeight: "bold",
        fontSize: SIZES.xxLarge,
        fontFamily: FONT.regular,
        color: COLORS.textColor,
        margin: 10,
    },
    time: {
        fontSize: SIZES.medium,
        color: COLORS.textColor,
        fontFamily: FONT.regular,
        marginHorizontal: 30,
    },
    timerBlock: {
        flexDirection: "row",
        alignItems: "center",
    }
});

export default styles;