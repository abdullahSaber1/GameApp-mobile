import {Text, StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

function Title({title}) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'montserrat-bold',
    color: Colors.accent500,
    textAlign: 'center',
    padding: 16,
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 8,
  },
});

export default Title;
