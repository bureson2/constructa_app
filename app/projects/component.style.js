import {StyleSheet} from "react-native";
import {COLORS, FONT, SIZES} from "../../constants";

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
        height: '100%',
    },
    inputText:{
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
        marginBottom: 20,
    },
    background:{
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    detailTab:{
        // justifyContent: "center",
        // alignItems: "center",
        height: '100%',
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
    inputs: {
        alignItems: "center",
        padding: 20,
    },
    label:{
        color: COLORS.textColor,
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
        marginBottom: 10,
    },
});

export default styles;