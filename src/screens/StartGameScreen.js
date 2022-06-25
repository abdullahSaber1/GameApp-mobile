import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {TextInput} from 'react-native';
import Card from '../component/ui/Card';
import InstructionText from '../component/ui/InstructionText';
import PrimaryButton from '../component/ui/PrimaryButton';
import Title from '../component/ui/Title';
import {Colors} from '../utils/colors';

function StartGameScreen({onPickedNumber}) {
  const [enterNumberInput, setEnterNumberInput] = useState('');

  function inputNumberHandler(value) {
    setEnterNumberInput(value);
  }
  function startGameHandler() {
    const enteredNumber = parseInt(enterNumberInput);

    if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 100) {
      Alert.alert('Invalid Number', 'Number has to be between 1 and 99', [
        {text: 'Okay', style: 'destructive', onPress: resetGameHandler},
      ]);
      return;
    }

    onPickedNumber(enteredNumber);
  }
  function resetGameHandler() {
    setEnterNumberInput(null);
  }

  const {width, height} = useWindowDimensions();
  const marginTopDistance = height < 420 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.container, {marginTop: marginTopDistance}]}>
          <Title title='Start a New Game!' />
          <Card>
            <InstructionText>Enter Your Number</InstructionText>
            <TextInput
              style={styles.textInput}
              maxLength={2}
              keyboardType='number-pad'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={inputNumberHandler}
              value={enterNumberInput}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetGameHandler}>Reset</PrimaryButton>
              </View>

              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={startGameHandler}>Start</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    fontSize: 32,
    fontWeight: 'bold',
    width: 50,
    color: Colors.accent500,
    textAlign: 'center',
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
