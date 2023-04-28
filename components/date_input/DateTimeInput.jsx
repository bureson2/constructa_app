import React, {useState} from 'react';
import {Platform, Text, TextInput, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./component.style";

/**
 * DateTimeInput component that renders a date and time picker input.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.setDate - Function to set the selected date and time.
 * @param {Date} props.date - The currently selected date and time.
 * @returns {React.Element} A React component representing a DateTimeInput.
 */
const DateTimeInput = ({setDate, date}) => {
    // State to control date or time mode and visibility of the date/time picker
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    // Function to handle date/time picker value change
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

    // Function to show the date/time picker
    const showDateTimePicker = () => {
        setShow(true);
    };

    return (
        <View>
            {/* Render a row with TextInput and TouchableOpacity */}
            <View style={styles.rowView}>
                {/* Display the selected date and time in a non-editable TextInput */}
                <TextInput
                    value={date.toLocaleString()}
                    editable={false}
                    style={styles.textView}
                />
                {/* Render a button to trigger the date/time picker */}
                <TouchableOpacity onPress={showDateTimePicker}
                                  style={styles.button}
                >
                    <Text style={styles.buttonText}>Nastav</Text>
                </TouchableOpacity>
            </View>
            {/* Render the date/time picker when show is true */}
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
