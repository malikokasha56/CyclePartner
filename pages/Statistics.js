import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

const data = [
  {
    id: "1",
    name: "Duration",
    icon: "timer.png",
    unit: "mins",
    value: "28",
  },
  {
    id: "2",
    name: "Calories",
    icon: "flame.png",
    unit: "cal",
    value: "34",
  },
  {
    id: "3",
    name: "Distance",
    icon: "walk.png",
    unit: "m",
    value: "3752",
  },
  {
    id: "4",
    name: "Carbon",
    icon: "leaf.png",
    unit: "oz",
    value: "6",
  },
  // Add more items as needed
];

function Statistics() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../images/Back.png")}
      style={styles.backgroundImg}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <Image
            source={require("../images/backButton.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>My Statistics</Text>
      </View>

      <View style={styles.formContainer}>
        <FlatList
          data={data}
          renderItem={StatsItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <TouchableOpacity
        style={{
          marginBottom: 50,
          marginLeft: 40,
          //   marginTop: 30,
          backgroundColor: "#0CDB7A",
          width: 300,
          height: 50,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Share</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

function StatsItem({ item }) {
  return (
    <View
      style={{
        // marginRight: 560,
        marginLeft: 30,
        marginBottom: 20,
        marginTop: 10,
        width: 320,
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#D1FFEF",
        flexDirection: "row",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 3.3,
        shadowRadius: 3,
      }}
    >
      <View style={styles1.iconContainer}>
        {/* Replace 'YourIcon' with your actual icon component */}
        <Image source={require(`../images/timer.png`)} style={styles.logo} />
      </View>

      {/* Box with two rows on the right side */}
      <View style={styles1.boxContainer}>
        <View style={styles1.row}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
        </View>
        <View style={styles1.row}>
          <Text style={styles1.text}>
            {item.value} {item.unit}{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange children horizontally
    alignItems: "center", // Center items vertically
    padding: 16,
  },
  iconContainer: {
    marginRight: 16,
  },
  icon: {
    fontSize: 24,
    // Additional styling for your icon
  },
  boxContainer: {
    flex: 1, // Take remaining space
  },
  row: {
    // borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default Statistics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 10,
    marginTop: 20,
  },
  heading: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
    marginLeft: "auto",
    marginRight: "auto",
    // backgroundColor: "red",
  },
  formContainer: {
    width: "100%",
    height: 600,
    marginTop: 270,
    backgroundColor: "white",
    bottom: 0,
    position: "absolute",
    borderTopLeftRadius: 50,
  },
  input: {
    height: 50,
    borderColor: "transparent",
    borderBottomColor: "#000",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    color: "#000",
    width: 400, // Adjust the width as needed
    marginLeft: 20,
  },
  logo: {
    width: 60, // Adjust the width as needed
    height: 80, // Adjust the height as needed
    resizeMode: "contain",
    // backgroundColor: "blue",
  },
  loginButton: {
    backgroundColor: "black", // Adjust the color as needed
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    borderRadius: 60,
    width: "60%",
    marginLeft: 75,
    position: "relative",
    marginTop: 10,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
  },
  signup: {
    marginBottom: 90,
    marginLeft: 45,
  },
  boldText: {
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 16,
  },
});
