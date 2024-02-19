import { Text, View, StyleSheet } from "react-native"
import Title from "../components/Title"
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomBetween(min, max, exlude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exlude) {
        return generateRandomBetween(min, max, exlude);
    }
    else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber }) {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler (direction) {
        if(direction ==='lower'){
            maxBoundary = currentGuess;
        }
        else{
            minBoundary =currentGuess+1;
        }
        const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber)
    }


    return (<View style={styles.screen}>
        <Title>Oponents Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or Lower</Text>
            <View>
                <PrimaryButton onPress={nextGuessHandler('greater')}>+</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler('lower')}>-</PrimaryButton>
            </View>

        </View>
        <View>
            {/* Log Rounds */}
        </View>
    </View>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },

})