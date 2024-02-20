import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

export default function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary400,
        padding: 24,
        margin: 10,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: Colors.primary400,
        fontSize:36,
        fontWeight:"bold",
    }

})