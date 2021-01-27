import React from "react";
import { View, Text, FlatList } from "react-native";
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
      />
    </View>
  );
};

export default CarsList;
