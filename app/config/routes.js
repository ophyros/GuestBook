import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import GuestScreen from '../screens/GuestScreen';

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => null,
      },
    },
    Guest: {
      screen: GuestScreen,
      navigationOptions: ({ navigation }) => ({
        header: () => null,
      }),
    },
  },
);
