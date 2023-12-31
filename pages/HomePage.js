import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function HomePage({ navigation }) {
  return (
    <>
      <ImageBackground
        source={require("../images/Back.png")}
        style={styles.backgroundImg}
      >
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require("../images/logo.png")} style={styles.logo} />
            <Text
              style={{ fontWeight: "bold", fontSize: 30, fontFamily: "System" }}
            >
              Cycle Partner
            </Text>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>
            Already have an account?
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.boldText}> Log in</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: "contain",
  },
  buttonContainer: {
    backgroundColor: "#671", // Light Green
    padding: 15,
    width: "60%",
    alignItems: "center",
    position: "absolute",
    bottom: 70,
    borderRadius: 60,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  loginText: {
    bottom: 45,
  },
  boldText: {
    fontWeight: "bold",
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
  },
});
