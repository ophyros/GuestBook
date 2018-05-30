import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const InputField = ({ label, keyboard, value, onChange }) => (
  <View style={styles.inputField}>
    <View style={styles.inputLabelContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
    </View>
    <View style={styles.inputTextInputContainer}>
      <TextInput
        style={styles.inputTextInput}
        underlineColorAndroid="transparent"
        value={value}
        keyboardType={keyboard}
        onChangeText={onChange}
      />
    </View>
  </View>
);

InputField.propTypes = {
  label: PropTypes.string,
  keyboard: PropTypes.string,
  value: PropTypes.string,
};

export default InputField;
