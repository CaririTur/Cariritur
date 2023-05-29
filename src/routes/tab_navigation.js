import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {DrawerActions, useNavigation} from '@react-navigation/native';
import New from "../pages/new";
import Profile from "../pages/profile";
import Rotas from "../pages/rotas";
import Eventos from "../pages/eventos";
import Home from "../pages/homepage";
import HomeIcon from "../../assets/tabnavigation/Home.svg"
import HomeFillIcon from "../../assets/tabnavigation/HomeFill.svg"
import RoutesIcon from "../../assets/tabnavigation/Routes.svg"
import RoutesFillIcon from "../../assets/tabnavigation/RoutesFill.svg"
import EventosIcon from "../../assets/tabnavigation/Eventos.svg"
import EventosFillIcon from "../../assets/tabnavigation/EventosFill.svg"
import UserIcon from "../../assets/tabnavigation/User.svg"
import UserFillIcon from "../../assets/tabnavigation/UserFill.svg"
import AddCircleIcon from "../../assets/tabnavigation/addcircle.svg"
import CircleFillIcon from "../../assets/tabnavigation/CircleFill.svg"

import CaririTur from "../../assets/components/CaririTur.svg";
import Menu from "../../assets/components/Menu.svg";

const Tab = createBottomTabNavigator();


export default function TabRoutes() {

    const navigation = useNavigation()

    const Header = ({name}) => {
        return (
            <View style={styles.header}>
                {(name === "Home" ? <CaririTur/> : <Text style={{ fontWeight: "500", fontSize: 20, color: "#027dc1" }}>{name}</Text>)}
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Menu/>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: true,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        borderTopWidth: 0,
                    },
                }}
            >
                <Tab.Screen name="Home" component={Home} options={{
                    headerTitle: () => <Header name="Home"/>,
                    tabBarIcon: ({focused}) => {
                        return (
                            focused ? <HomeFillIcon/> : <HomeIcon/>
                        )
                    }
                }}/>
                <Tab.Screen name="Routes" component={Rotas} options={{
                    headerTitle: () => <Header name="Rotas"/>,
                    tabBarIcon: ({focused}) => {
                        return (
                            focused ? <RoutesFillIcon/> : <RoutesIcon/>
                        )
                    }
                }}/>
                <Tab.Screen name="Novo" component={New} options={{
                    headerTitle: () => <Header name="Nova Rota"/>,
                    tabBarIcon: ({focused}) => {
                        return (
                            focused ? <CircleFillIcon/> : <AddCircleIcon/>
                        )
                    }
                }}/>
                <Tab.Screen name="Eventos" component={Eventos} options={{
                    headerTitle: () => <Header name="Eventos"/>,
                    tabBarIcon: ({focused}) => {
                        return (
                            focused ? <EventosFillIcon/> : <EventosIcon/>
                        )
                    }
                }}/>
                <Tab.Screen name="Profile" component={Profile} options={{
                    headerTitle: () => <Header name="Perfil"/>,
                    tabBarIcon: ({focused}) => {
                        return (
                            focused ? <UserFillIcon/> : <UserIcon/>
                        )
                    }
                }}/>
            </Tab.Navigator>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between",
        alignItems: 'center'
    },

    header_container: {
        flexDirection: 'row',
        width: '25%',
        alignItems: 'center'
    }
});
