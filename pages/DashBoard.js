import React from "react";
import "react-native-gesture-handler";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";

import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  TouchableOpacityComponent,
  View,
} from "react-native";
import CycleItem from "../components/CycleItem";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function formatTodayDate() {
  const options = {
    day: "numeric",
    month: "long",
    weekday: "long",
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", options);

  return formattedDate;
}

function DashBoard() {
  const navigation = useNavigation();

  const openDrawer = () => {
    console.log("Okasha");
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../images/Back.png")}
      style={styles.backgroundImg}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={openDrawer}>
            <Image
              style={styles.searchIcon}
              source={require("../images/drawer.png")}
            />
          </TouchableOpacity>

          <Image source={require("../images/logo.png")} />
          <TouchableOpacity>
            <Image
              style={styles.profileImage}
              source={require("../images/user.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.helloText}>Hello User,</Text>
        <Text style={styles.userNameText}>Wanna take a ride today?</Text>
      </View>
      <View style={styles.section2}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>
            Welcome to <Text style={styles.helloText}>Cycle Partner</Text>
          </Text>
        </View>
        <View style={styles.bottomBox}>
          <Text style={styles.date}>{formatTodayDate()}</Text>
        </View>
      </View>
      <View style={styles.section3}>
        <View style={styles.section3Item1}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Recent orders
          </Text>
          <TouchableOpacity>
            <Text>Browse map</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginLeft: 32 }}>
        <FlatList
          data={data}
          renderItem={CycleItem}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false} // Optional: hide scroll indicator
        />
      </View>
    </ImageBackground>
  );
}

const data = [
  {
    key: "1",
    name: "Item 1 name",
    distance: 10,
    dateUsed: formatTodayDate(),
    pic: "../images/cycle1.png",
  },
  {
    key: "2",
    name: "Item 2 name",
    distance: 10,
    dateUsed: formatTodayDate(),
    pic: "../images/cycle1.png",
  },
  {
    key: "3",
    name: "Item 3 name",
    distance: 10,
    dateUsed: formatTodayDate(),
    pic: "../images/cycle1.png",
  },
  {
    key: "4",
    name: "Item 4 name",
    distance: 10,
    dateUsed: formatTodayDate(),
    pic: "../images/cycle1.png",
  },
  // Add more items as needed
];

export default DashBoard;

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
  },

  container: {
    marginTop: 10,
    padding: 13,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  searchIcon: {
    width: 34,
    height: 34,
  },
  content: {
    // flex: 1,
    // alignItems: "center",
    flexDirection: "column",
    marginLeft: 20,
  },
  helloText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userNameText: {
    fontSize: 18,
    marginTop: 8,
  },
  section2: {
    margin: 30,
    marginLeft: "auto",
    marginRight: "auto",
    shadowColor: "#4124",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 3.3,
    shadowRadius: 3,
    backgroundColor: "#D1FFEF",
    width: 300,
    height: 150,
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 29,
    textAlign: "center",
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  bottomBox: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "#FFFF", // Change the background color as needed
    borderRadius: 26,
  },
  date: {
    textAlign: "center",
    padding: 13,
    fontSize: 18,
  },
  section3: {
    marginLeft: "auto",
    marginRight: "auto",
    // backgroundColor: "#D1FFEF",
    width: 310,
    height: 40,
    borderRadius: 20,
  },
  section3Item1: {
    flexDirection: "row", // Set the direction to row
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});
