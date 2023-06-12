import React, {useContext, useState} from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Google from "../../../../assets/google.png";
import Ios from "../../../../assets/ios.png";
import Facebook from "../../../../assets/facebook.png";
import api from "../../../services/api";
import {useNavigation} from "@react-navigation/native";

export default function Cadastro() {
    const navigation = useNavigation()
    const {AuthContext} = require("../../../routes/login_routes")
    const { signIn } = useContext(AuthContext)
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const verificarSenha = () => {
        if (senha === confirmarSenha) {
            api.post('/user', {name: nome, email: email, password: senha}).then(() => {
                    Alert.alert("Sucesso", "Conta criada com sucesso!")
                    signIn({email: email, password: senha})
                }).catch((error) => {
                if (error.response && error.response.status === 409) {
                    Alert.alert("Erro", "Este Email já existe");
                } else {
                    Alert.alert("Erro", "Ocorreu um erro ao registrar. Por favor, tente novamente.");
                }
            })
        } else {
            Alert.alert("Erro", "As senhas não conferem. Por favor, verifique novamente.");
        }
    };

    return (
        <>
            <LinearGradient
                style={{
                    height: "110%",
                    width: "120%",
                    marginTop: 0,
                    position: "absolute",
                    borderRadius: 5,
                }}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                locations={[0.25, 0.75]}
                colors={['#00b9fb', '#cdf2ff']}
            />
            <View style={styles_jl.container}>
                <View>
                    <Text style={styles_jl.text_bold}>Bem vindos !</Text>
                    <Text style={styles_jl.text_static}>Faça seu registro</Text>
                </View>
                <View style={styles_jl.container_input}>
                    <TextInput
                        placeholder="Nome Completo"
                        placeholderTextColor="#190152"
                        style={styles_jl.text_input}
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>
                <View style={styles_jl.container_input}>
                    <TextInput
                        placeholder="Example@gmail.com"
                        placeholderTextColor="#190152"
                        style={styles_jl.text_input}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles_jl.container_input}>
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor="#190152"
                        style={styles_jl.text_input}
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>
                <View style={styles_jl.container_input}>
                    <TextInput
                        placeholder="Confirme sua senha"
                        placeholderTextColor="#190152"
                        style={styles_jl.text_input}
                        secureTextEntry={true}
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                    />
                </View>
                <View style={styles_jl.term_priv}>
                    <Text style={{ marginLeft: 10, marginRight: 8 }}>
                        By registering, you are agreeing with our Terms of Use and Privacy Policy
                    </Text>
                    <TouchableOpacity style={{ marginLeft: 10, marginRight: 8 }}>
                        <Text style={{ color: '#9C3E16' }}>Terms of Use and Privacy Policy</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles_jl.bottom}
                        onPress={() => {
                            verificarSenha();
                        }}
                    >
                        <Text style={styles_jl.text_bottom}>Registre-se</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles_jl.hr}>Ou entre com</Text>
                </View>
                <View style={styles_jl.container_img}>
                    <TouchableOpacity>
                        <Image source={Google} style={styles_jl.img} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Ios} style={styles_jl.img} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Facebook} style={styles_jl.img} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles_jl = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text_input: {
        borderRadius: 12,
        borderWidth: 0.5,
        width: 339,
        height: 55,
        padding: 17,
        borderColor: "#190152",
    },
    container_input: {
        flexDirection: 'row',
        paddingBottom: 19,
    },
    text_bold: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    text_static: {
        fontSize: 15,
        marginBottom: 40,
        marginLeft: 25
    },
    term_priv: {
        marginLeft: 17,
        marginRight: 17,
    },
    text_bottom: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    bottom: {
        width: 339,
        height: 55,
        backgroundColor: "#190152",
        borderRadius: 12,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    hr: {
        marginTop: 37,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 25
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
});
