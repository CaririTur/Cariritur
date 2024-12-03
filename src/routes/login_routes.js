import { Login } from "../pages/auth/login";
import Cadastro from "../pages/auth/cadastro";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import api from "../services/api";
import { Alert, Image, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DrawerNavigation from "./drawer_navigation";
import Logo from "../../assets/logo.png";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

const Stack = createNativeStackNavigator();

export function LoginStackNavigator() {
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        debugger
        const getTokenData = async () => {
            try {
                setTimeout(async () => {
                    const storedToken = await AsyncStorage.getItem("token");
                    setToken(storedToken);
                    setIsLoading(false);
                }, 2000);
            } catch (error) {
                console.error("Erro ao obter o token:", error);
                setIsLoading(false);
            }
        };

        getTokenData();
    }, []);

    const authContext = useMemo(
        () => ({
            signIn: (data) => {
                api
                    .post("/user/sessions", { email: data.email, password: data.password })
                    .then((response) => {
                        AsyncStorage.setItem("token", response.data.token);
                        setToken(response.data.token)
                    })
                    .catch((error) => {
                        if (error.response && error.response.status === 401) {
                            Alert.alert(
                                "Dados de login incorretos",
                                "Email ou senha errados, tente digitar novamente."
                            );
                        }
                    });
            },
            logOut: () => {
                AsyncStorage.removeItem("token");
                setToken(null);
            },
            token: token,
        }),
        [token]
    );

    if (isLoading) {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Image source={Logo} />
                <StatusBar style="auto" />
                <Text style={{ fontWeight: "bold" }}>Por Grupo Genisys</Text>
            </TouchableOpacity>
        );
    }

    return (
        <>
            <AuthContext.Provider value={authContext}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {!token ? (
                        <>
                            <Stack.Screen name="Login" component={Login} />
                            <Stack.Screen name="Cadastro" component={Cadastro} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen
                                name="Homepage"
                                component={DrawerNavigation}
                            />
                        </>
                    )}
                </Stack.Navigator>
            </AuthContext.Provider>
        </>
    );
}
