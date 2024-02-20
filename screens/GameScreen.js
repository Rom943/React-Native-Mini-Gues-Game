import {  View, StyleSheet, Alert } from "react-native"
import Title from "../components/Title"
import { useState,useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import {Ionicons} from '@expo/vector-icons'


function generateRandomBetween(min, max, exlude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exlude) {
        return generateRandomBetween(1, 100, exlude);
    }
    else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber,onGameOver }) {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(()=>{
        if(currentGuess === userNumber){
            onGameOver();
        }
    },[currentGuess,userNumber,onGameOver])

    function nextGuessHandler (direction) {
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert('Dont lie!!',"You know that this is wrong",[{text:'sorry',style:'cancel'}])
            return;
        }
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
        <Card>
            <InstructionText>Higher or Lower</InstructionText>
            <View style={styles.buttonsContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}><Ionicons name="arrow-up-circle-sharp" size={35}/></PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}><Ionicons name="arrow-down-circle-sharp" size={35}/></PrimaryButton>
            </View>

        </Card>
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
    buttonsContainer:{
        flexDirection:"row",
        padding:10,
        justifyContent:"center"

    }
})