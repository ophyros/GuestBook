import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  list: {
    width: '100%',
    flex: 1,
  },
  row: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5
  },
  name: {
    color: '#000',
    fontSize: 16,
  },
  visiting: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'rgb(76, 217, 100)',
  },
  date: {
    color: '#000',
    fontSize: 14,
  },
  separator: {
    backgroundColor: '#e2e2e2',
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20,
  },
  notfound: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
  },
  notfoundText: {
    fontSize: 18,
  }
});

export default styles;
