import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabRoutes from "./tab_navigation";

import StartPage, {Login} from "../pages/login";
import Cadastro from "../pages/cadastro";
import Eventos from "../pages/eventos";
import EventosUnicos from "../pages/evento-unico";


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
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
                name="EventosUnicos"
                component={EventosUnicos}
            />
        </Stack.Navigator>
    );
}
