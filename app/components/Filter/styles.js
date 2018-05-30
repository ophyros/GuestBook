import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#e2e2e2',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
  },
  allguests: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'rgb(0, 122, 255)',
  },
  separator: {
    width: StyleSheet.hairlineWidth,
    height: 50,
    backgroundColor: '#e2e2e2',
  },
  active: {
    backgroundColor: 'rgb(0, 122, 255)',
  },
  activeText: {
    color: '#fff',
  }
});

export default styles;
