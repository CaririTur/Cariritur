import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Logo from '../../../assets/logo.png';
import {useEffect} from "react";

export default function Inicio({navigation}) {
    useEffect(() => {
        const time = setTimeout(() => {
            navigation.navigate("Login");

        }, 2000);

        return () => clearTimeout(time)
    }, []);

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={Logo}/>
            <StatusBar style="auto"/>
            <Text style={{fontWeight: 'bold',}}>Por Grupo Genisys</Text>
        </TouchableOpacity>


)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
