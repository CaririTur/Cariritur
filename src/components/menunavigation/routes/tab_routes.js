import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';


import New from "../../../pages/New";
import Profile from "../../../pages/Profile";
import Rotas from "../../../pages/Rotas";
import Eventos from "../../../pages/Eventos";
import Home from "../../../pages/Homepage/home";
import ButtonNew from "../../ButtonNew";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false,
        tabBarStyle: {
        backgroundColor: "#121212",
        borderTopWidth: 0,
      },
   }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        Option={{
          tabBarIcon: ({ size, color, focused }) => {
            if(focused){
              return <Ionicons name="home" size={size} color={color} />
            }
            return <Ionicons name="home-outline" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Rotas"
        component={Rotas}
        option={{
     
        }}
      />
      <Tab.Screen
        name="Novo"
        component={New}
        option={{
          tabBarIcon: ({ size, color }) =>(
            <ButtonNew/>
          )
        }}
      />
      <Tab.Screen
        name="Eventos"
        component={Eventos}
        option={{
          tabBaricon: ({ size, color }) => (
            <Feather name="event" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        option={{
          tabBaricon: ({ size, color }) => (
            <Feather name="profile" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
