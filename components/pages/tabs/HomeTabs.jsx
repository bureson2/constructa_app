import styles from "./component.style";
import {View, Text, ImageBackground} from "react-native";
import MenuIconButton from "../../buttons/MenuIconButton";
import {ICONS} from "../../../constants/icons";
import AttendanceBlock from "../../attendance_block/AttendanceBlock";
import ScreenHeader from "../../headers/ScreenHeader";
import React from "react";


const HomeTabs = () => {
    return (
        <View style={styles.tabCol}>
            <ScreenHeader title={"Hlavní menu"}/>

            <View style={styles.tabLines}>
                <AttendanceBlock/>
            </View>
            <View style={styles.tabLines}>
                <MenuIconButton title={"Stazka"}
                                icon={ICONS.cars}
                                routeTo={"car_report/empty"}
                />
                <MenuIconButton title={"Stavební deník"}
                                icon={ICONS.ing}
                                routeTo={"construction_report/create"}
                />
            </View>
            <View style={styles.tabLines}>
                <MenuIconButton title={"Projekty"}
                                icon={ICONS.work}
                                routeTo={"projects/projects"}
                />
                <MenuIconButton title={"Nemoc"}
                                icon={ICONS.illnes}
                                routeTo={"sick/sick"}
                />
            </View>
        </View>
    )
}

export default HomeTabs;