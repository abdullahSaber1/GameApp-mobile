import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utils/colors';

function GuessNumberLog({roundNumber, guessNumber}) {
  return (
    <View style={styles.listItems}>
      <Text style={styles.textItem}>#{roundNumber}</Text>
      <Text style={styles.textItem}>Opponent's Guess : {guessNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 16,
    backgroundColor: Colors.accent500,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.primary600,
  },
  textItem: {
    fontFamily: 'montserrat-regular',
  },
});

export default GuessNumberLog;
