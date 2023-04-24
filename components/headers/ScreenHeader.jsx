import {COLORS} from "../../constants";
import {TouchableOpacity} from "react-native";
import {Stack, useRouter, useSearchParams} from "expo-router";
import {Path, Svg} from "react-native-svg";
import {ICONS} from "../../constants/icons";

const ScreenHeader = ({title, show, addTask}) => {

    const router = useRouter();
    const params = useSearchParams();


    function onAddTaskHandle(){
        router.push(`/task/new/${params.id}`);
    }

    return (
        <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.white},
                headerShadowVisible: false,
                headerTitle: title,
                headerTitleStyle: {color: COLORS.textColor},
                headerShown: show !== false,
                headerRight: () => (
                    addTask ?
                        <TouchableOpacity onPress={onAddTaskHandle}
                        // style={{ marginRight: title==="Hlavní menu" ? 10 : 0}}
                            >
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="40"
                                viewBox="0 96 960 960"
                                width="40"
                            >
                                <Path
                                    d={ICONS.create}
                                    fill={COLORS.textColor}
                                />
                            </Svg>
                        </TouchableOpacity>
                        :
                        <></>
                ),

            }}

        />
    );
}

export default ScreenHeader;