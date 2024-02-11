import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GuessInput from './src/components/GuessInput';
import { useState } from 'react';
import GameStart from './src/components/GameState/GameStart';
import GuessingComponent from './src/components/GameState/GuessingComponent';

export default function App() {
  const [numberToGuess, setNumberToGuess] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <View>
        <Text>
          Guessing Game!
        </Text>
      </View>
      {(numberToGuess == null)? <GameStart setNumberToGuess={setNumberToGuess}/> : <></>}
      {(numberToGuess != null)? <GuessingComponent numberToGuess={numberToGuess} setNumberToGuess={setNumberToGuess}/> : <></>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
