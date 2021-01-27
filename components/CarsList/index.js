import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import styles from "./styles";

import CarItem from "../CarItem";
import cars from "./cars";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"} /* handles snap scroll */
        decelerationRate={"fast"} /* handles the speed of the animation */
        snapToInterval={
          Dimensions.get("window").height
        } /* how tall are the rendered items */
      />
    </View>
  );
};

export default CarsList;
