import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

function Login({ navigation }) {
  return (
    <ImageBackground
      source={require("../images/Back.png")}
      style={styles.backgroundImg}
    >
      <View style={styles.container}>
        <Image source={require("../images/logo.png")} style={styles.logo} />
        <Text style={styles.heading}>Welcome to Login</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signup}>
        <Text style={styles.loginText}>
          Don't have any account?
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text style={styles.boldText}> Sign up here!</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ImageBackground>
  );
}

export default Login;

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
    // bottom: 300,
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
    marginLeft: 45,
  },
  boldText: {
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 16,
  },
});
