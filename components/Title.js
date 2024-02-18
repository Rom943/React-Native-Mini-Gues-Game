import { StyleSheet } from "react-native"


export default function Title ({title}){
    return <Text style={styles.title}>
        {title}
        </Text>
    
}

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:"bold",
        color:'#ddb52f',
        textAlign:"center",
        borderWidth:2,
        borderColor:'#ddb52f',
        padding:10
    }
})