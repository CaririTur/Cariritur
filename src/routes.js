import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/home page/home";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Routes from "../../routes";
import TabRoutes from "./pages/routes/tab_routes";

import Inicio from "./pages/inicio";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
      <Stack.Navigator initialRouteName="Inicio" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        />
        <Stack.Screen
          name="TabHome"
          component={TabRoutes}
        />
      </Stack.Navigator>
  );
}