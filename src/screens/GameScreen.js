import {useEffect, useMemo, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import NumberContainer from '../component/game/NumberContainer';
import Title from '../component/ui/Title';
import PrimaryButton from '../component/ui/PrimaryButton';
import Card from '../component/ui/Card';
import InstructionText from '../component/ui/InstructionText';

import {Ionicons} from '@expo/vector-icons';
import GuessNumberLog from '../component/game/GuessItemLog';

function generateRandomNumber(min, max, exclude) {
  const rnNum = Math.floor(Math.random() * (max - min)) + min;

  if (rnNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rnNum;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({userNumber, onGameOver, onRoundesNumberHandler}) {
  const initNumber = useMemo(
    () => generateRandomNumber(1, 100, userNumber),
    [userNumber]
  );
  const [currentGuess, setCurrentGuess] = useState(initNumber);
  const [guessRounds, setGuessRoundes] = useState([initNumber]);

  const {width, height} = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(true);
    }
  }, [currentGuess, onGameOver]);

  function nextCurrentGuess(direction) {
    onRoundesNumberHandler((currentGuess) => currentGuess + 1);
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert('Wrong Guess!', 'You Know that this is wrong !', [
        {text: 'Sorry!!', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'higher') minBoundry = currentGuess;
    else maxBoundry = currentGuess;
    const nextNumber = generateRandomNumber(minBoundry, maxBoundry, currentGuess);
    setCurrentGuess(nextNumber);
    setGuessRoundes((currentGuess) => [...currentGuess, nextNumber]);
  }

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower
        </InstructionText>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextCurrentGuess.bind(this, 'higher')}>
              <Ionicons name='md-add' size={24} color='white' />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextCurrentGuess.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.gameContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextCurrentGuess.bind(this, 'higher')}>
              <Ionicons name='md-add' size={24} color='white' />
            </PrimaryButton>
          </View>

          <NumberContainer>{currentGuess}</NumberContainer>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextCurrentGuess.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <Title title="Opponent's Guess" />
      {content}
      <View style={styles.listContainer}>
        <FlatList
          alwaysBounceHorizontal={false}
          data={guessRounds}
          renderItem={({item, index}) => (
            <GuessNumberLog
              roundNumber={guessRounds.length - index}
              guessNumber={item}
            />
          )}
          key={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    paddingBottom: 0,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 16,
  },
  listContainer: {
    flex: 1,
    padding: 10,
    paddingBottom: 0,
  },
  gameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default GameScreen;
