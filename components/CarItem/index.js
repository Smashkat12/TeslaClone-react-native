import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

import StyledButton from "../StyledButton/";

const CarItem = ({ name, tagline, taglineCTA, image }) => {
  return (
    <View style={styles.carContainer}>
      {/* background image component from react-native */}
      <ImageBackground source={image} style={styles.image} />
      {/* container for text */}
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.tagline}>
          {tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      {/* container for buttons */}
      <View style={styles.styleButtonContainer}>
        <StyledButton
          type="primary"
          content="Custom Order"
          onPress={() => console.warn("Custom Order was pressed")}
        />

        <StyledButton
          type="secondary"
          content="Existing Inventory"
          onPress={() => console.warn("Existing Inventory was pressed")}
        />
      </View>
    </View>
  );
};

export default CarItem;
