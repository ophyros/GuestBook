import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_SIZE = 36;
const ICON_COLOR = 'rgb(0, 122, 255)';

const Header = ({
  onPress,
  buttonIcon,
  text,
  backButton,
  onBackButtonPress
}) => (
  <View style={styles.container}>
    <View style={styles.left}>
      {backButton ?
        <TouchableOpacity onPress={onBackButtonPress} style={styles.backButton}>
          <Ionicons name={ICON_PREFIX + '-arrow-round-back'} size={ICON_SIZE} color={ICON_COLOR} />
        </TouchableOpacity>
        : null}
    </View>
    <Text style={styles.text}>{text}</Text>
    <View style={styles.right}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Ionicons
          name={ICON_PREFIX + '-' + buttonIcon}
          size={ICON_SIZE}
          color={ICON_COLOR}
        />
      </TouchableOpacity>
    </View>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func,
  onBackButtonPress: PropTypes.func,
  icon: PropTypes.any,
  backButton: PropTypes.bool,
};

export default Header;
