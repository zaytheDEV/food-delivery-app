import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Home, Restaurant, OrderDelivery } from "./screens";
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Tabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Restaurant"
          component={Restaurant}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="OrderDelivery"
          component={OrderDelivery}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
