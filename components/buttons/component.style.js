import {StyleSheet} from "react-native";
import {COLORS, FONT, SIZES} from "../../constants";

const styles = StyleSheet.create({
    tab: {
        width: 150,
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
    circle: {
        backgroundColor: COLORS.iconBackgroundColor,
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    menuIconText: {
        textAlign: "center",
        fontFamily: FONT.regular,
        color: COLORS.textColor,
        fontSize: SIZES.medium,
        fontWeight: "bold",
        marginVertical: 5,
    },
    attendanceButton: {
        backgroundColor: COLORS.primarySecond,
        borderRadius: 15,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    blueButton:{
        backgroundColor: COLORS.primarySecond,
        width: 250,
        // marginLeft: 25,
        marginTop: 15,
        borderRadius: 5,
        textAlign: "center",
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    blueButtonText:{
        color: COLORS.white,
        fontSize: SIZES.large,
        fontWeight: "bold",
    }
});

export default styles;