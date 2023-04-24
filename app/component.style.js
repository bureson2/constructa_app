import {StyleSheet} from "react-native";
import {COLORS, FONT, SIZES} from "../constants";

const styles = StyleSheet.create({
    container: {
        height: 400,
        width: 300,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        justifyContent: "space-evenly"
    },
    background:{
        paddingVertical: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    loginText:{
        marginBottom: 20,
        color: COLORS.white,
        fontSize: SIZES.xxLarge,
        fontWeight: "bold",
        fontFamily: FONT.regular,
    },
    label:{
        marginLeft: 25,
        color: COLORS.textColor,
        fontSize: SIZES.large,
        fontFamily: FONT.regular,
        marginBottom: 10,
    },
    inputText:{
        marginLeft: 25,
        color: COLORS.textColor,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        width: 250,
        height: 50,
        padding: 15,
        fontSize: SIZES.medium,
    },

});

export default styles;