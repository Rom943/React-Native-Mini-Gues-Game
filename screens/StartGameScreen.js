import { TextInput, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { StyleSheet } from "react-native"


export default function StartGameScreen (){
return(
<View style={styles.inputContainer}>
    <TextInput style={styles.textInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>
    <PrimaryButton>Reset</PrimaryButton>
    <PrimaryButton>Confirm</PrimaryButton>
</View>
) 

}

const styles = StyleSheet.create({
    inputContainer:{
        padding:16,
        marginTop:100,
        backgroundColor:'#72065c',
        marginHorizontal: 24,
        borderRadius:8,
        shadowColor:'black',
        shadowOffset:{width:3,height:3},
        shadowRadius:6,
        shadowOpacity:0.25
    },
    textInput:{
        height:50,
        fontSize:32,
        borderBottomColor:"#ddb52f",
        borderBottomWidth:2,
        color:"#ddb52f",
        marginVertical:8,
        fontWeight:'bold',
        width:50,
        textAlign:'center'
    }
})