import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function CycleItem({ item }) {
  return (
    <View style={styles.section4}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "black",
        }}
      >
        <Image
          style={styles.itemImg}
          source={require("../images/cycle1.png")}
        ></Image>
      </View>
      <View style={styles.itemDistance}>
        <Text>Distance {item.distance}</Text>
      </View>
      <View style={styles.section3Item1}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text>{item.dateUsed}</Text>
      </View>
    </View>
  );
}

export default CycleItem;

const styles = StyleSheet.create({
  section4: {
    backgroundColor: "#D1FFEF",
    width: 310,
    height: 300,
    borderRadius: 20,
    marginLeft: 10,
  },
  itemImg: { width: 180, height: 180, resizeMode: "contain" },
  itemDistance: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 50,
    backgroundColor: "#7CE787",
    marginLeft: 50,
    borderRadius: 30,
  },
  section3Item1: {
    flexDirection: "row", // Set the direction to row
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});
