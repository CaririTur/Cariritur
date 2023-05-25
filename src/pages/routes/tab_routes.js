import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Inicio from "./inicio";
// import Login from "./login";
// import Cadastro from "./cadastro";
import Home from "../../pages/homepage/home";
import Eventos from "../eventos";


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Events" component={Eventos} />
      {/* <Tab.Screen name="Rotas" component={Rotas} />
      <Tab.Screen name="Novo" component={Novo} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
}