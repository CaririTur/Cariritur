import React, {useContext} from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Alert, Text, TouchableOpacity} from "react-native";
import Logo from "../../assets/logo.svg"
import StackNavigation from "./stack_navigation";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    const {AuthContext} = require("../routes/login_routes")
    const {logOut} = useContext(AuthContext);

    const confirmLogout = () => {
        Alert.alert(
            "Sair",
            "Você deseja realmente sair?",
            [{ text: "Cancelar", style: "cancel" }, { text: "Sair", onPress: logOut }]
        );
    };

    const EmptyComp = () => { return null }

    return (
        <Drawer.Navigator
            initialRouteName="StackNavigation"
            useLegacyImplementation={true}
            screenOptions={{drawerPosition: 'right', headerShown: false}}
        >
            <Drawer.Screen name="StackNavigation" component={StackNavigation} options={{
                drawerLabel: () => null,
                drawerIcon: () => <Logo width={'100%'} height={40}/>
            }}/>
            <Drawer.Screen
                name="Logout"
                component={EmptyComp}
                options={{
                    title: 'Sair',
                    drawerIcon: ({focused}) => (
                        <TouchableOpacity onPress={confirmLogout} style={{ width: '100%', height: '100%' }}>
                            <Text style={{color: focused ? 'blue' : 'black'}}>Sair</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
