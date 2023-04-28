import {COLORS} from "../../constants";
import {TouchableOpacity} from "react-native";
import {Stack, useRouter, useSearchParams} from "expo-router";
import {Path, Svg} from "react-native-svg";
import {ICONS} from "../../constants/icons";

/**
 * ScreenHeader component that renders a custom screen header.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title of the header.
 * @param {boolean} [props.show=true] - A flag to show or hide the header.
 * @param {boolean} [props.addTask=false] - A flag to enable or disable the "add task" button.
 * @returns {React.Element} A React component representing a ScreenHeader.
 */
const ScreenHeader = ({title, show, addTask}) => {

    // Hooks for navigation and search params
    const router = useRouter();
    const params = useSearchParams();

    // Function to handle the "add task" button click
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
                // Display the header only when show prop is not false
                headerShown: show !== false,
                // Conditionally render the "add task" button
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