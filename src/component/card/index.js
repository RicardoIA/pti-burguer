import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./style";

export default function Card({ item }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.contentSubtitle}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/426/426833.png",
            }}
          />
          <Text style={styles.subtitle}>{item.calories} Calories</Text>
        </View>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
      <View>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
}
