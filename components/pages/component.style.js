import {StyleSheet} from "react-native";
import {COLORS} from "../../constants";

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
        height: '100%',
    },
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
});

export default styles;