import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";


export default function Card({children}){
return(
    <View style = {styles.card}>{children}</View>
)
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        width:'90%',
        marginTop: 10,
        backgroundColor: Colors.primary600,
        marginHorizontal: 24,
        borderRadius: 8,
        shadowColor: "black",
        shadowOffset: { width: 3, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})