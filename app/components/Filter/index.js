import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

import Separator from './Separator';

import moment from 'moment';

import styles from './styles';

const Filter = ({ filterDate, onAllPress, onDateChange }) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <TouchableOpacity
        onPress={onAllPress}
        style={[styles.allguests, !filterDate && styles.active]}
      >
        <Text
          style={[styles.text, !filterDate && styles.activeText]}
        >
          All guests
        </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    <View style={styles.right}>
      <DatePicker
        style={[styles.dateInput, filterDate && styles.active]}
        date={filterDate || moment()}
        mode="date"
        format="DD-MM-YYYY"
        confirmBtnText="OK"
        cancelBtnText="Cancel"
        showIcon={false}
        is24Hour={true}
        customStyles={{
          dateInput: {
            height: 50,
            borderWidth: 0,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          },
          dateText: {
            fontSize: 18,
            color: filterDate ? '#fff' : 'rgb(0, 122, 255)',
          }
        }}
        onDateChange={onDateChange}
      />
    </View>
  </View>
);

Filter.propTypes = {
  filter: PropTypes.string,
  onAllPress: PropTypes.func,
  onDateChange: PropTypes.func,
};

export default Filter;
