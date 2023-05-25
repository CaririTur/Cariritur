import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login_routes from './src/routes/login_routes';


const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
     <Login_routes/>
    </NavigationContainer>
  );
};
