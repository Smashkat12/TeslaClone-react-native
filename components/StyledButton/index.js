import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = ({ type }) => {
  /* handle dynamic styling of button background */
  const backgroundColor = type === "primary" ? "black" : "white";

  /* handle dynamic styling of button text */

  const textColor = type === "primary" ? "white" : "black";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          console.warn("hey there 😃");
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>Custom Order</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
