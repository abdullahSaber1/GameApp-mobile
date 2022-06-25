import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numText: {
    fontSize: 32,
    fontFamily: 'montserrat-regular',

    color: Colors.accent500,
  },
});

export default NumberContainer;
