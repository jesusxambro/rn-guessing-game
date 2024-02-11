import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Alert, View, Button, Text } from 'react-native';


interface GuessingProps{
    numberToGuess: number;
    setNumberToGuess: Dispatch<SetStateAction<number | null>>;
}
const GuessingComponent = ({numberToGuess, setNumberToGuess} : GuessingProps) => {
    const [guess, setGuess] = useState<number>(Math.floor(Math.random() * 99) + 1);
    const [tries, setTries] = useState<number>(0);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [min, setMin] = useState<number>(1);
    const [max, setMax] = useState<number>(100);

    const adjustGuess = (isHigher: boolean) => {
        if (isHigher) {
          setMin(guess + 1);
        } else {
          setMax(guess - 1);
        }
        newGuess();
        checkGuess();


      };


    const newGuess = () => {
        const newGuess = Math.floor((min + max) / 2);
        setGuess(newGuess);
        setTries(tries + 1);
    };

    const checkGuess = () => {
        if (tries >= 9) {
            setIsGameOver(true);
            Alert.alert("Game Over", "You've run out of guesses!");
            return;
        }

        if (guess === numberToGuess) {
            setIsGameOver(true);
            Alert.alert("Congratulations!", "The app guessed your number!");
        } else {
            newGuess();
        }
    };

    const restartGame = () => {
        setGuess(Math.floor(Math.random() * 100) + 1);
        setMin(1);
        setMax(100);
        setTries(0);
        setIsGameOver(false);
        setNumberToGuess(null);
      };

    return (
        <View>
            {isGameOver ? (
                <View>
                    <Text>Game Over! {guess === numberToGuess ? 'The app guessed your number!' : 'The app failed to guess your number.'}</Text>
                    <Button title="Restart Game" onPress={restartGame} />
                </View>
            ) : (
                <View>
                    <Text>App's Guess: {guess}</Text>
                    <Text>Tries: {tries}/9</Text>
                    <Button title="Guess Higher" onPress={() => adjustGuess(true)} /> 
                    <Button title="Guess Lower" onPress={() => adjustGuess(false)} /> 
                </View>
            )}
        </View>
    );
};

export default GuessingComponent