import {useState} from 'react';
import {GameOverScreen, GameScreen, StartGameScreen} from './src/screens';
import {LinearGradient} from 'expo-linear-gradient';
import {Colors} from './src/utils/colors';
import {useFonts} from 'expo-font';

import {StatusBar} from 'expo-status-bar';

import {Platform, SafeAreaView, StyleSheet, ImageBackground} from 'react-native';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontLoaded] = useFonts({
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'montserrat-black': require('./assets/fonts/Montserrat-Black.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  function startGameHandler() {
    setGuessRounds(0);
    setGameOver(false);
    setUserNumber(null);
  }

  let screen = <StartGameScreen onPickedNumber={setUserNumber} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={setGameOver}
        onRoundesNumberHandler={setGuessRounds}
      />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        onRestart={startGameHandler}
        userNumber={userNumber}
        roundesNumber={guessRounds}
      />
    );
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={[Colors.primary600, Colors.accent500]}
        style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/dices1.jpg')}
          resizeMode='cover'
          imageStyle={{opacity: 0.15}}
          style={styles.rootScreen}>
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? 35 : 0,
  },
  rootScreen: {
    flex: 1,
  },
});
