import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const ListItem = ({ name, date, visiting, id, onPress }) => (
  <TouchableHighlight onPress={() => onPress(id)} underlayColor='#e2e2e2'>
    <View style={styles.row}>
      <View style={styles.line}>
        <Text style={styles.name}>{name}</Text>
        {visiting ? <View style={styles.visiting}></View> : null}
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  visiting: PropTypes.bool,
  id: PropTypes.number,
  onPress: PropTypes.func,
};

export default ListItem;
