import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      {/* background image component from react-native */}
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      {/* container for text */}
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $68,420</Text>
      </View>
    </View>
  );
};

export default CarItem;
