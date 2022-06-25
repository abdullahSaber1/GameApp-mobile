import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import PrimaryButton from '../component/ui/PrimaryButton';
import Title from '../component/ui/Title';
import {Colors} from '../utils/colors';

function GameOverScreen({userNumber, roundesNumber, onRestart}) {
  const {width, height} = useWindowDimensions();

  let imageSize = 250;
  // if (width > 380 && width < 480) {
  //   imageSize = 300;
  // }
  if (height > 380 && height < 420) {
    imageSize = 100;
  }

  let imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title title='Game Over !' />
        <View>
          <Image
            style={[styles.ImageContainer, imageStyle]}
            source={require('../../assets/images/success.jpg')}
          />
        </View>
        <Text style={styles.summaryContainer}>
          Your Phone Needed <Text style={styles.heighlight}>{roundesNumber}</Text>{' '}
          Rounded to Guess the Number of{' '}
          <Text style={styles.heighlight}>{userNumber}</Text>
        </Text>

        <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    marginTop: 36,
    marginBottom: 20,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: Colors.primary800,
  },
  summaryContainer: {
    marginVertical: 24,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'montserrat-bold',
  },
  heighlight: {
    color: Colors.primary500,
    fontFamily: 'montserrat-bold',
  },
});

export default GameOverScreen;
