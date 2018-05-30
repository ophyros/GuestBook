import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';

import styles from './styles';

const DateInputField = ({ label, value, onChange }) => (
  <View style={styles.inputField}>
    <View style={styles.inputLabelContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
    </View>
    <View style={styles.inputTextInputContainer}>
      <DatePicker
        style={styles.inputTextDateInput}
        date={value}
        mode="datetime"
        format="DD-MM-YYYY HH:mm"
        confirmBtnText="OK"
        cancelBtnText="Cancel"
        showIcon={false}
        is24Hour={true}
        customStyles={{
          dateInput: {
            borderWidth: 0,
            paddingHorizontal: 0,
            width: '100%',
            alignItems: 'flex-start',
          },
          dateText: {
            fontSize: 16,
            color: '#000',
          }
        }}
        onDateChange={onChange}
      />
    </View>
  </View>
);

DateInputField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.object,
};

export default DateInputField;
