import {StyleSheet} from "react-native";
import {COLORS, SIZES, SHADOWS} from "../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        height: 60,
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    },

    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.listCircle,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    circleText: {
        fontSize: 18,
        color: COLORS.listText,
        fontWeight: 'bold',
    },
    contentContainer: {
        flexDirection: "column",
    }

});

export default styles;