import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/homepage/home';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Inicio from './src/pages/inicio';
import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';
import Eventos from './src/pages/eventos';


const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='inicio'>
        <Stack.Screen options={{headerShown: false}} name='Inicio' component={Inicio}/>
        <Stack.Screen options={{headerShown: false}} name='Login' component={Login}/>
        <Stack.Screen options={{headerShown: false}} name='Cadastro' component={Cadastro}/>
        <Stack.Screen options={{headerShown: false}} name='Homepage' component={Home}/>
        <Stack.Screen options={{headerShown: false}} name='Eventos' component={Eventos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
