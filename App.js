import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginStackNavigator} from "./src/routes/login_routes";

export default function App(){
    return (
        <NavigationContainer>
            <LoginStackNavigator/>
        </NavigationContainer>
    );
};
