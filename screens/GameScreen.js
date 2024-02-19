import { Text, View, StyleSheet } from "react-native"
import Title from "../components/Title"
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exlude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exlude) {
        return generateRandomBetween(min, max, exlude);
    }
    else {
        return rndNum;
    }
}


export default function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1,100,userNumber)
    const [currentGuess,setCurrentGuess] = useState(initialGuess);
    return (<View style={styles.screen}>
        <Title>Oponents Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or Lower</Text>
            {/* +
        - */}
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