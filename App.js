import Home from './src/pages/Homepage/home';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Routes from './src/components/menunavigation/routes/routes'; 


const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
     <Routes/>
    </NavigationContainer>
  );
};
