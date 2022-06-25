import {StyleSheet, Text} from 'react-native';
import {Colors} from '../../utils/colors';

function InstructionText({children, style}) {
  return <Text style={[styles.instarctionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instarctionText: {
    fontSize: 20,
    fontFamily: 'montserrat-semibold',
    color: Colors.accent500,
  },
});

export default InstructionText;
