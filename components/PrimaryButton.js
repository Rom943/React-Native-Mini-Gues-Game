import { View, Text, Pressable, StyleSheet } from "react-native";


export default function PrimaryButton({ children, onPress }) {


  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: "#850561",

    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: "hidden",
    borderRadius: 28,
    margin: 4,
  },
  pressed: {
    opacity: 0.75,
  },
});
