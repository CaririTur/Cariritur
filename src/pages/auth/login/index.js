import {LinearGradient} from 'expo-linear-gradient';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Google from "../../../../assets/google.png";
import Ios from "../../../../assets/ios.png";
import Facebook from "../../../../assets/facebook.png";

import {StatusBar} from 'expo-status-bar';
import Logo from '../../../../assets/logo.png';
import {useContext, useEffect, useState} from "react";
export function Login({navigation}) {
    const { AuthContext } = require("../../../routes/login_routes");
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const { signIn } = useContext(AuthContext);

    return <>
        <LinearGradient
            style={{
                height: "110%",
                width: "120%",
                marginTop: 0,
                position: "absolute",
                borderRadius: 5,
            }}

            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            locations={[0.25, 0.75]}
            colors={['#00b9fb', '#cdf2ff']}>

        </LinearGradient>


        <View style={styles.container}>
            <View>
                <Text style={styles.text_bold}>Bem-vindo</Text>
                <Text style={styles.text_static}>Entre com sua conta</Text>
            </View>

            <View style={styles.container_input}>
                <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} placeholderTextColor="#190152"
                           style={styles.text_input}/>
            </View>

            <View style={styles.container_input}>
                <TextInput placeholder="Senha" value={password} onChangeText={setPassword}
                           placeholderTextColor="#190152" style={styles.text_input}
                           secureTextEntry={true}/>
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={() => {
                    signIn({email, password})
                }}>
                    <Text style={styles.text_button}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.entra_como}>Ou entre com</Text>
            </View>

            <View style={styles.container_img}>
                <Image source={Google} style={styles.img}/>
                <Image source={Ios} style={styles.img}/>
                <Image source={Facebook} style={styles.img}/>
            </View>

            <View style={styles.container_text}>
                <Text>Ainda não tem uma conta?</Text>
                <Text style={styles.text_blue} onPress={() => navigation.navigate("Cadastro")}>Registre-se</Text>
            </View>


        </View>

    </>
}



const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center"
    },

    text_input: {
        borderRadius: 12,
        width: 340,
        height: 55,
        padding: 17,
        borderColor: "#190152",
        borderWidth: 1
    },

    container_input: {
        flexDirection: 'row',
        paddingBottom: 19,
    },

    text_bold: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 9,
    },

    text_static: {
        fontSize: 15,
        marginBottom: 90,
    },

    text_button: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },

    button: {
        width: 340,
        height: 55,
        backgroundColor: "#190152",
        borderRadius: 12,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    entra_como: {
        marginTop: 37,
        marginBottom: 30,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },

    img: {
        marginLeft: 20,
        marginRight: 20,
    },

    container_img: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    text_blue: {
        color: '#FFFFFF',
        marginLeft: 5,
        fontWeight: 'bold'
    },

    container_text: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
    }

});
