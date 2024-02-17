import { View,Text, Pressable, StyleSheet } from "react-native"

export default function PrimaryButton ({children}){
    function pressHandler (){

    }
    return (
        <View style={styles.container}>
        <Pressable onPress={pressHandler} >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#560c40',
        borderRadius:28,
        paddingVertical:8,
        paddingHorizontal:16,
        margin:4,
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:"hidden",
    },
    buttonInnerContainer:{

    }
})