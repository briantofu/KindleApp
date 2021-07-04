import {Platform, StyleSheet, Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: '100%',
    height: '60%',
  },
  content: {
    marginHorizontal: scale(10),
    fontSize: scale(10),
  },
  counter: {
    marginTop: scale(18),
    fontSize: scale(12),
    fontWeight: 'bold',
    textAlign: 'center',
  },

  picker: {
    transform: Platform.OS == 'android' ? [{scaleX: 1.5}, {scaleY: 2.2}] : [],
    justifyContent: 'center',
    alignContent: 'center',
    width: width / 1.9,
    height: height / 4,
  },
  picker_text: {
      fontSize: scale(23)
  }
});
