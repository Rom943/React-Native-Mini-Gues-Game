import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children }) {
  function pressHandler() {}
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
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
    margin: 4,
    overflow: "hidden",
    borderRadius: 28,
    margin: 4,
    minWidth: 150,
  },
  pressed: {
    opacity: 0.75,
  },
});
