import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "./HomePage";
import Login from "./Login";
import DashBoard from "./DashBoard";

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Statistics from "./Statistics";
import MySettings from "./Settings";

const Drawer = createDrawerNavigator();
const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: "black", // Customize button color
    padding: 25,
    alignItems: "center",
    marginTop: 450,
    marginLeft: 65,
    borderRadius: 39,
    width: 150,
    // height: 40,
  },
  logoutButtonText: {
    color: "white", // Customize text color
    fontWeight: "bold",
  },
});

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="My Wallet"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={DashBoard}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="My Statistics"
        component={Statistics}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Settings"
        component={MySettings}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
