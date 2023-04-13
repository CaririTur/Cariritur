import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Inicio from './src/pages/Inicio';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';


const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='inicio' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Inicio' component={Inicio}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};