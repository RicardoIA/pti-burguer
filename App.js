import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "./src/component/card";

const data = [
  {
    id: 1,
    name: "Beef Burguer",
    calories: 70,
    price: 12.0,
    image: "https://cdn-icons-png.flaticon.com/512/1812/1812050.png",
  },
  {
    id: 2,
    name: "Pancakes",
    calories: 60,
    price: 15.0,
    image: "https://cdn-icons-png.flaticon.com/512/9622/9622201.png",
  },
];

export default function App() {
  return (
    <View style={styles.container} backgroundColor="#eee">
      <StatusBar style="auto" />
      <View>
        <FlatList
          data={data}
          renderItem={Card}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: "#fff",
  },
});
