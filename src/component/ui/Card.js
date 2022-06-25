import {StyleSheet, View} from 'react-native';
import {Colors} from '../../utils/colors';

function Card({children}) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    marginTop: 50,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Card;
