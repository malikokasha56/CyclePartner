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

function MySettings() {
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
        <Text style={styles.heading}>My Settings</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.boxHeading}>Phone Number</Text>
          <Text style={styles.boxValue}>123-456-7890</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.infoBox}>
          <Text style={styles.boxHeading}>Email</Text>
          <Text style={styles.boxValue}>malik.okasha@example.com</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.infoBox}>
          <Text style={styles.boxHeading}>Address</Text>
          <Text style={styles.boxValue}>Lahore , Pakistan</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default MySettings;

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
  formContainer: {
    width: "100%",
    height: 600,
    marginTop: 270,
    backgroundColor: "white",
    bottom: 0,
    position: "absolute",
    borderTopLeftRadius: 50,
    padding: 20,
    // alignItems: "center",
  },
  infoBox: {
    marginBottom: 20,
  },
  boxHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "black",
  },
  boxValue: {
    fontSize: 16,
    color: "#333",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 20,
  },
});
