import React, {useState} from 'react';
import {Platform, Text, TextInput, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './component.style';

const DateInput = ({ setDate, date }) => {
    const [show, setShow] = useState(false);

    const onChange = (event, selectedValue) => {
        setShow(Platform.OS === 'ios');
        if (selectedValue) {
            const selectedDate = selectedValue;
            setDate(selectedDate);
        }
    };

    const showDateTimePicker = () => {
        setShow(true);
    };

    return (
        <View>
            <View style={styles.rowView}>
                <TextInput
                    value={date.toLocaleDateString()} // Changed to toLocaleDateString() to display only the date
                    editable={false}
                    style={styles.textView}
                />
                <TouchableOpacity onPress={showDateTimePicker} style={styles.button}>
                    <Text style={styles.buttonText}>Nastav</Text>
                </TouchableOpacity>
            </View>
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
