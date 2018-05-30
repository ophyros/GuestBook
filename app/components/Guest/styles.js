import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  saveButton: {
    width: '40%',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgb(0, 122, 255)',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgb(0, 122, 255)',
    borderRadius: 4,
  },
  cancelButtonText: {
    fontSize: 20,
    color: 'rgb(0, 122, 255)',
  },
  inputField: {
    width: '100%',
    marginVertical: 10,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputLabelContainer: {
    width: '30%',
    marginRight: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  inputLabel: {
    fontSize: 18,
  },
  inputTextInputContainer: {
    width: '70%',
    height: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#e2e2e2',
    borderRadius: 4,
  },
  inputTextInput: {
    height: 40,
    paddingHorizontal: 8,
    fontSize: 18,
  },
  inputTextDateInput: {
    height: 40,
    width: '100%',
    paddingHorizontal: 8,
    alignItems: 'flex-start',
    borderWidth: 0,
  }
});

export default styles;
