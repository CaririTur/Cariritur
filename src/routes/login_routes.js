import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tab_routes";

import StartPage, {Login} from "../pages/login";
import Cadastro from "../pages/cadastro";
import Eventos from "../pages/eventos";
import Profile from "../pages/profile";
import New from "../pages/new";
import Rotas from "../pages/rotas";



const Stack = createNativeStackNavigator();

export default function Login_routes() {
  return (
      <Stack.Navigator initialRouteName="Inicio" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Inicio"
          component={StartPage}
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
