import { TextInput, View ,Alert,Text} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { StyleSheet } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";

export default function StartGameScreen({onPickNumber}) {
  
  const [enteredNumber,setEnteredNumber] = useState('');

  function numberInputHandler (enteredText){
    setEnteredNumber(enteredText);
  }

  function resetInputHandler (){
    setEnteredNumber('')
  }

  function confirmInputHandler (){
    const chosenNumber = parseInt(enteredNumber);
    if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
        Alert.alert('Invalid Number','Number has to be a number between 1-99',
        [{text:"Okay",style:'destructive',onPress:resetInputHandler}])
      return
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
    <View style={styles.inputContainer}>
      <Text style={styles.instructionText}>Enter A Number</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          keyboardAppearance="dark"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
      </View>
      <View style={styles.buttonsArea}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:"center"
  },
  instructionText:{
    color:Colors.primary400,
    fontSize:24,
    textAlign:"center"
  },
  inputContainer: {
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary600,
    marginHorizontal: 24,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  textInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.primary400,
    borderBottomWidth: 2,
    color: Colors.primary400,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  textInputContainer: {
    alignItems: "center",
  },
  buttonsArea: {
    flexDirection: "row",
    justifyContent:"center",
    marginTop:10,
    gap:15,
  },
});
