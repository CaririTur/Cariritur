import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Inicio from './src/pages/inicio';
import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';


const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='inicio'>
        <Stack.Screen options={{headerShown: false}} name='Inicio' component={Inicio}/>
        <Stack.Screen options={{headerShown: false}} name='Login' component={Login}/>
        <Stack.Screen options={{headerShown: false}} name='Cadastro' component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
