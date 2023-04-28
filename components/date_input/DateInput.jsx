import React, {useState} from 'react';
import {Platform, Text, TextInput, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './component.style';

/**
 * DateInput component that renders a date picker input.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.setDate - Function to set the selected date.
 * @param {Date} props.date - The currently selected date.
 * @returns {React.Element} A React component representing a DateInput.
 */
const DateInput = ({ setDate, date }) => {
    // State to control visibility of the date picker
    const [show, setShow] = useState(false);

    // Function to handle date picker value change
    const onChange = (event, selectedValue) => {
        setShow(Platform.OS === 'ios');
        if (selectedValue) {
            const selectedDate = selectedValue;
            setDate(selectedDate);
        }
    };

    // Function to show the date picker
    const showDateTimePicker = () => {
        setShow(true);
    };

    return (
        <View>
            {/* Render a row with TextInput and TouchableOpacity */}
            <View style={styles.rowView}>
                {/* Display the selected date in a non-editable TextInput */}
                <TextInput
                    value={date.toLocaleDateString()} // Changed to toLocaleDateString() to display only the date
                    editable={false}
                    style={styles.textView}
                />
                {/* Render a button to trigger the date picker */}
                <TouchableOpacity onPress={showDateTimePicker} style={styles.button}>
                    <Text style={styles.buttonText}>Nastav</Text>
                </TouchableOpacity>
            </View>
            {/* Render the date picker when show is true */}
            {show && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default DateInput;
