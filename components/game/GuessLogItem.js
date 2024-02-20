import { Text, View, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

export default function GuessLogItem({roundNumber,guess }){
    return (
        <View style={styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text>Opponent`s Guess:{guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem:{
        borderColor:Colors.primary800,
        borderWidth: 1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Colors.primary400,
        flexDirection:"row",
        justifyContent:"space-evenly",
        width:'100%'
    }
})