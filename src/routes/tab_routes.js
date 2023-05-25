import * as React from "react";
import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {CommonActions, useNavigation} from '@react-navigation/native';


import New from "../pages/new";
import Profile from "../pages/profile";
import Rotas from "../pages/rotas";
import Eventos from "../pages/Eventos";
import Home from "../pages/homepage";

import HomeIcon from "../../assets/tabnavigation/Home.svg"
import HomeFillIcon from "../../assets/tabnavigation/HomeFill.svg"
import RoutesIcon from "../../assets/tabnavigation/Routes.svg"
import RoutesFillIcon from "../../assets/tabnavigation/RoutesFill.svg"
import EventosIcon from "../../assets/tabnavigation/Eventos.svg"
import EventosFillIcon from "../../assets/tabnavigation/EventosFill.svg"
import UserIcon from "../../assets/tabnavigation/User.svg"
import UserFillIcon from "../../assets/tabnavigation/UserFill.svg"
import AddcircleIcon from "../../assets/tabnavigation/addcircle.svg"
import CircleFillIcon from "../../assets/tabnavigation/CircleFill.svg"

import CaririTur from "../../assets/components/CaririTur.svg";
import Menu from "../../assets/components/Menu.svg";
import Vector from "../../assets/components/left_arrow.svg";

function Header({type, name}) {

    const navigation = useNavigation();

    if (type === 'back') {
        return <>
            <>
                <StatusBar/>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        navigation.dispatch(CommonActions.goBack());
                    }
                    }>
                        <Vector/>
                    </TouchableOpacity>
                    <View>
                        <Text>{name}</Text>
                    </View>
                    <TouchableOpacity>
                        <Menu/>
                    </TouchableOpacity>
                </View>
            </>
        </>
    } else {
        return <>
            <StatusBar/>
            <View style={styles.header}>
                <CaririTur/>
                <TouchableOpacity>
                    <Menu/>
                </TouchableOpacity>
            </View>
        </>
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between",
        alignItems: 'center'
    },
});

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                    borderTopWidth: 0,
                    },
                }}
            >
                <Tab.Screen name="Home" component={Home} options={{
                    headerTitle: () => <Header/>,
                    tabBarIcon: ({focused}) => {
                        return (
                            focused ? <HomeFillIcon/> : <HomeIcon/>
                        )
                    }
                }}/>
                <Tab.Screen name="Routes" component={Rotas} options={{
                    headerTitle: () => <Header type={'back'} name={"Rotas"}/>,
                    tabBarIcon: ({focused}) => {
                        return (
                            focused ? <RoutesFillIcon/> : <RoutesIcon/>
                        )
                    }
                }}/>
             <Tab.Screen name="Novo" component={New} options={{
                    headerTitle: () => <Header type={'back'} name={"New"}/>,
                    tabBarIcon: ({focused}) => {
                        return (
                            focused ? <CircleFillIcon/> : <AddcircleIcon/>
                        )
                    }
                }}/>
            <Tab.Screen name="Eventos" component={Eventos} options={{
                    headerTitle: () => <Header type={'back'} name={"Eventos"}/>,
                    tabBarIcon: ({focused}) => {
                        return (
                            focused ? <EventosFillIcon/> : <EventosIcon/>
                        )
                    }
                }}/>
           <Tab.Screen name="Profile" component={Profile} options={{
                    headerTitle: () => <Header type={'back'} name={"Profile"}/>,
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
