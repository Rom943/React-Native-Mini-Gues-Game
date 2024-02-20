import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";


export default function InstructionText({children}){
    return (
        <Text style={styles.instructionText}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText:{
        color:Colors.primary400,
        fontSize:24,
        textAlign:"center",
        
      },
})