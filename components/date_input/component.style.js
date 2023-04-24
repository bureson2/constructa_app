import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    rowView: {
        flexDirection: "row"
    },
    textView: {
        height: 50,
        width: 180,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: COLORS.textColor,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        padding: 15,
        fontSize: SIZES.medium,
    },
    button: {
        width: 70,
        height: 50,
        backgroundColor: COLORS.primarySecond,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: COLORS.white,
    }
});

export default styles;