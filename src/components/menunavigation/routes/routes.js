import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tab_routes";

import Inicio from "../../../pages/Inicio";
import Login from "../../../pages/Login";
import Cadastro from "../../../pages/Cadastro";
import Eventos from "../../../pages/Eventos";
import Profile from "../../../pages/Profile";
import New from "../../../pages/New";
import Rotas from "../../../pages/Rotas";



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
        <Stack.Screen
          name="Eventos"
          component={Eventos}
        />
          <Stack.Screen
          name="Profile"
          component={Profile}
        />
          <Stack.Screen
          name="Rotas"
          component={Rotas}
        />
          <Stack.Screen
          name="Novo"
          component={New}
        />
        
      </Stack.Navigator>
  );
}