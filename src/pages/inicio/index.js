import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Logo from '../../../assets/logo.png';

export default function Inicio({navigation}) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Cadastro")}>
            <Image source={Logo}/>
            <StatusBar style="auto"/>
            <Text style={{fontWeight: 'bold',}}>Por Grupo Genisys</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
