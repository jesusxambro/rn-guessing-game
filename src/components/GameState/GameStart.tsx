import React, { Dispatch, SetStateAction, useState } from "react";
import { View, Text, TextInput, Button,StyleSheet } from "react-native";

interface GameStartProps {
    setNumberToGuess: Dispatch<SetStateAction<number | null>>
  }
  
  const GameStart = ({ setNumberToGuess }: GameStartProps) => {
    const [enteredValue, setEnteredValue] = useState('');
  
    const numberInputHandler = (inputText: string) => {
      setEnteredValue(inputText.replace(/[^0-9]/g, '')); 
    };
  
    const confirmInputHandler = () => {
      const chosenNumber = parseInt(enteredValue);
      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        return;
      }
      setNumberToGuess(chosenNumber);
    };
  
    return (
      <View style={styles.gameStartScreen}>
        <Text>Enter a Number</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <Button title="Confirm" onPress={confirmInputHandler} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    gameStartScreen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'purple',
    },
    input: {
      width: 50,
      textAlign: 'center',
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      marginVertical: 10,
    },
  });
  
  export default GameStart;
