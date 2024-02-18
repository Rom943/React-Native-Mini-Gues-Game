import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import StartGameScreen from "../screens/StartGameScreen";
import GameScreen from "../screens/GameScreen";

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
