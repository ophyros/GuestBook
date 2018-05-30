import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, FlatList } from 'react-native';

import moment from 'moment';

import ListItem from './ListItem';
import Separator from './Separator';

import styles from './styles';

const GuestsList = ({ guests, filterDate, onGuestPress }) => {
  const now = moment();
  const list = guests
                .filter((guest) => (
                    !filterDate ||
                    moment(guest.checkIn).isSame(moment(filterDate, 'DD-MM-YYYY'), 'day')
                ))
                .sort((a, b) => a.checkIn > b.checkIn);

  return (
    <View style={styles.list}>
      {list.length > 0 ?
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <ListItem
              name={item.firstName + ' ' + item.lastName}
              date={moment(item.checkIn).format('DD-MM-YYYY HH:mm')}
              visiting={
                moment(item.checkIn).isSameOrBefore(now) &&
                moment(item.checkOut).isSameOrAfter(now)
              }
              id={item.id}
              onPress={onGuestPress}
            />
          )}
          keyExtractor={item => '' + item.id}
          ItemSeparatorComponent={Separator}
        /> :
        <View style={styles.notfound}>
          <Text style={styles.notfoundText}>
            No guests at this date
          </Text>
        </View>
      }
    </View>
  );
}

GuestsList.propTypes = {
  guests: PropTypes.array,
  filterDate: PropTypes.any,
  onGuestPress: PropTypes.func,
};

export default GuestsList;
