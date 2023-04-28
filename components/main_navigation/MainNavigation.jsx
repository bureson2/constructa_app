import styles from "./component.style";

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WorkReport from "../pages/work_report/WorkReport";
import Employee from "../pages/employees/Employee";
import Task from "../pages/tasks/Task";
import HomeTabs from "../pages/tabs/HomeTabs";

// Import icons
import {
    homeFocusedIcon,
    homeIcon,
    reportsFocusedIcon,
    reportsIcon,
    tasksFocusedIcon,
    tasksIcon,
    usersFocusedIcon,
    usersIcon,
} from '../../constants/icons';

// Initialize Tab Navigator
const Tab = createBottomTabNavigator();

// MainNavigation component
const MainNavigation = () => {
    // Render Tab Navigator with custom styling and options
    return (
        <Tab.Navigator
            style={styles.bottomNav}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let IconComponent;

                    // Choose the correct icon based on the route name and focus state
                    switch (route.name) {
                        case 'Home':
                            IconComponent = focused ? homeFocusedIcon : homeIcon;
                            break;
                        case 'Reports':
                            IconComponent = focused ? reportsFocusedIcon : reportsIcon;
                            break;
                        case 'Users':
                            IconComponent = focused ? usersFocusedIcon : usersIcon;
                            break;
                        case 'Tasks':
                            IconComponent = focused ? tasksFocusedIcon : tasksIcon;
                            break;
                    }

                    return <IconComponent width={size} height={size}/>;
                },
                tabBarActiveTintColor: '#114FBA',
                tabBarInactiveTintColor: '#3C3939',
            })}
        >
            {/* Define Tab Screens with custom labels and options */}
            <Tab.Screen name="Home" component={HomeTabs} options={{
                tabBarLabel: 'Domů',
                headerShown: false
            }}/>
            <Tab.Screen name="Reports" component={WorkReport} options={{
                tabBarLabel: 'Docházka',
                headerShown: false
            }}/>
            <Tab.Screen name="Users" component={Employee} options={{
                tabBarLabel: 'Kontakty',
                headerShown: false
            }}/>
            <Tab.Screen name="Tasks" component={Task} options={{
                tabBarLabel: 'Úkoly',
                headerShown: false
            }}/>
        </Tab.Navigator>
    );
}

export default MainNavigation;