import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";

function Signup({ navigation }) {
  return (
    <ImageBackground
      source={require("../images/Back.png")}
      style={styles.backgroundImg}
    >
      <View style={styles.container}>
        <Image source={require("../images/logo.png")} style={styles.logo} />
        <Text style={styles.heading}>Sign up here</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Create password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Re-type password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign Up!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signup}>
        <Text style={styles.loginText}>
          Already have an account?
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.boldText}> Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ImageBackground>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  formContainer: {
    width: "100%",
    height: 600,
    marginTop: 270,
    backgroundColor: "white",
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
    width: 200, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    resizeMode: "contain",
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
    marginLeft: 60,
  },
  boldText: {
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 16,
  },
});
