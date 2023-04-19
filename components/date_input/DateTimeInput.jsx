import React, { useState } from 'react';
import { View, TouchableOpacity, Platform, TextInput, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {COLORS} from "../../constants";
import styles from "./component.style";

const DateTimeInput = ({setDate, date}) => {
    // const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedValue) => {
        setShow(Platform.OS === 'ios');
        if (mode === 'date') {
            const selectedDate = selectedValue || date;
            setDate(selectedDate);
            setMode('time');
            setShow(Platform.OS !== 'ios');
        } else {
            const selectedTime = selectedValue || date;
            setDate(selectedTime);
            setMode('date');
        }
    };

    const showDateTimePicker = () => {
        setShow(true);
    };

    return (
        <View>
            <View style={styles.rowView}>
            <TextInput
                value={date.toLocaleString()}
                editable={false}
                style={styles.textView}
            />
            <TouchableOpacity onPress={showDateTimePicker}
                    style={styles.button}
            >
                <Text style={styles.buttonText}>Nastav</Text>
            </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default DateTimeInput;
