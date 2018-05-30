import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import moment from 'moment';

import InputField from './InputField';
import DateInputField from './DateInputField';
import styles from './styles';

const Guest = ({
  guest,
  onChangeFirstName,
  onChangeLastName,
  onChangeCheckIn,
  onChangeCheckOut,
  onChangeTo,
  onChangeBadge,
}) => (
    <View style={styles.container}>
      <InputField
        label={'Firstname:'}
        keyboard={'default'}
        value={guest.firstName || ''}
        onChange={onChangeFirstName}
      />
      <InputField
        label={'Lastname:'}
        keyboard={'default'}
        value={guest.lastName || ''}
        onChange={onChangeLastName}
      />
      <DateInputField
        label={'CheckIn:'}
        type={'datetime'}
        value={guest.checkIn ? moment(guest.checkIn) : moment()}
        onChange={onChangeCheckIn}
      />
      <DateInputField
        label={'CheckOut:'}
        value={guest.checkOut ? moment(guest.checkOut) : moment()}
        onChange={onChangeCheckOut}
      />
      <InputField
        label={'To:'}
        value={guest.visiting || ''}
        onChange={onChangeTo}
      />
      <InputField
        label={'Badge:'}
        keyboard={'numeric'}
        value={guest.badge || ''}
        onChange={onChangeBadge}
      />
    </View>
);

Guest.propTypes = {
  onChangeFirstName: PropTypes.func,
  onChangeLastName: PropTypes.func,
  onChangeCheckIn: PropTypes.func,
  onChangeCheckOut: PropTypes.func,
  onChangeTo: PropTypes.func,
  onChangeBadge: PropTypes.func,
  guest: PropTypes.object,
};

export default Guest;
