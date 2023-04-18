import styles from "./component.style";
import {View, Text, ImageBackground} from "react-native";
import MenuIconButton from "../../buttons/MenuIconButton";
import {ICONS} from "../../../constants/icons";
import AttendanceBlock from "../../attendance_block/AttendanceBlock";


const HomeTabs = () => {
    return (
        <View style={styles.tabCol}>
            <View style={styles.tabLines}>
                <AttendanceBlock/>
            </View>
            <View style={styles.tabLines}>
                <MenuIconButton title={"Stazka"} icon={ICONS.cars}/>
                <MenuIconButton title={"Stavební deník"} icon={ICONS.ing}/>
            </View>
            <View style={styles.tabLines}>
                <MenuIconButton title={"Projekty"} icon={ICONS.work}/>
                <MenuIconButton title={"Nemoc"} icon={ICONS.illnes}/>
            </View>
        </View>
    )
}

export default HomeTabs;