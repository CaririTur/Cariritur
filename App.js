import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from "./src/routes/stack_navigation";
import {createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function App(){
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" useLegacyImplementation={true}  screenOptions={{drawerPosition: 'right', headerShown: false}} >
            <Drawer.Screen name="Home" component={StackNavigation}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
};
