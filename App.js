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
import Routes from './src/routes';


const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
     <Routes/>
    </NavigationContainer>
  );
};
