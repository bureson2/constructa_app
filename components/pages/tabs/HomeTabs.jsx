import styles from "../component.style";
import {ImageBackground, View} from "react-native";
import MenuIconButton from "../../buttons/MenuIconButton";
import {ICONS} from "../../../constants/icons";
import AttendanceBlock from "../../attendance_block/AttendanceBlock";
import ScreenHeader from "../../headers/ScreenHeader";
import React from "react";

/**
 * Component with home tabs on main page.
 *
 * @returns {React.Element} A React component with home option tabs
 */
const HomeTabs = () => {

    return (
        <ImageBackground
            source={require("../../../assets/backgrounds/basicBG.png")}
            resizeMode="cover"
            style={styles.background}
        >
            <ScreenHeader title={"Hlavní menu"} />

            <View style={styles.container}>
                <View style={styles.tabCol}>
                    <View style={styles.tabLines}>
                        <AttendanceBlock />
                    </View>
                    <View style={styles.tabLines}>
                        <MenuIconButton title={"Stazka"}
                                        icon={ICONS.cars}
                                        routeTo={"qr_scanner/qrScanner"}
                        />
                        <MenuIconButton title={"Stavební záznam"}
                                        icon={ICONS.ing}
                                        routeTo={"qr_scanner/qrScanner"}
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
            </View>
        </ImageBackground>
    )
}

export default HomeTabs;