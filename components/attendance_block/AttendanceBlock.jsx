import React, {useState, useEffect} from 'react';
import {AppState, View, Text} from 'react-native';
import styles from './component.style';
import AttendanceButton from '../buttons/AttendanceButton';
import {ICONS} from '../../constants/icons';
import {useRouter} from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";
import sendData from "../../hook/sendData";

/**
 * Component with attendance timer and control buttons.
 *
 * @returns {React.Element} with timer and control buttons.
 */
const AttendanceBlock = ({title, icon}) => {
    // Hooks
    const router = useRouter();
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [appState, setAppState] = useState(AppState.currentState);
    const [token, setToken] = useState(null);

    // Listen for app state changes
    useEffect(() => {
        const handleAppStateChange = (nextAppState) => {
            setAppState(nextAppState);
        };

        AppState.addEventListener('change', handleAppStateChange);

        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
        };
    }, []);

    // Timer functionality
    useEffect(() => {
        let interval;

        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [timerOn, appState]);

    // Fetch token from storage
    useEffect(() => {
        const fetchToken = async () => {
            const storedToken = await AsyncStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
            }
        };
        fetchToken();
    }, []);

    // Handle stop button press
    const handleOnStopPress = async () => {
        try {
            const dataToSend = {
                time: time,
            };

            if (token) {
                const response = await sendData("work-reports/end-work", dataToSend, token);
                setTimerOn(false);
                setTime(0);

            } else {
                console.error("No token available");
            }
        } catch (error) {
            console.error("Error while sending data:", error);
        }
    };

    // Handle play button press
    const handleOnPlayPress = () => {
        setTimerOn(true);
        router.push(`/qr_scanner/qrScanner`);
    };

    // Handle continue button press
    const handleOnContinuePress = () => {
        setTimerOn(true);
    };

    // Handle pause button press
    const handleOnPausePress = () => {
        setTimerOn(false);
    };

    // Format time display
    const displayTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <View style={styles.block}>
            <Text style={styles.title}>Docházka</Text>
            <View style={styles.timerBlock}>
                { time === 0 ?
                    <AttendanceButton icon={ICONS.play} onPress={handleOnPlayPress} />
                    :
                    timerOn ?
                    <AttendanceButton icon={ICONS.pause} onPress={handleOnPausePress} />
                    :
                    <AttendanceButton icon={ICONS.play} onPress={handleOnContinuePress} />
                }
                <Text style={styles.time}>{displayTime(time)}</Text>
                <AttendanceButton icon={ICONS.stop} onPress={handleOnStopPress} />
            </View>
        </View>
    );
};

export default AttendanceBlock;
