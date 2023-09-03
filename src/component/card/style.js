import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    marginHorizontal: 24,
    marginVertical: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 0.3,
    elevation: 6,
  },
  contentSubtitle: {
    flexDirection: "row",
    marginVertical: 5,
  },
  title: {
    color: "#262a2d",
    fontWeight: "bold",
    fontSize: 22,
  },
  subtitle: {
    color: "#c6c6c6",
    fontSize: 16,
    marginLeft: 5,
  },
  price: {
    color: "#face58",
    fontWeight: "800",
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});
