import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabRoutes from "./tab_navigation";
import Eventos from "../pages/eventos";
import EventosUnicos from "../pages/evento-unico";
import Profile from "../pages/profile";


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName="TabRoutes" screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="TabRoutes"
                component={TabRoutes}
            />
            <Stack.Screen
                name="Eventos"
                component={Eventos}
            />

            <Stack.Screen
                name="EventosUnicos"
                component={EventosUnicos}
            />
             <Stack.Screen
                name="Profile"
                component={Profile}
            />
        </Stack.Navigator>
    );
}
