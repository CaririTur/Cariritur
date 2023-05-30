import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PerfilIcon from '../../../assets/Profile/Perfil.svg'


export default function Profile(navigation) {
    return (
        <SafeAreaView  style={styles.container}>
            <View>
                <View style={styles.perfilIcon}>
                    <PerfilIcon />
                    <TouchableOpacity style={styles.button_perfil}>
                        <Text style={styles.text_button_perfil}>Alterar Foto</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.text}>Alterar Nome:</Text>
                    <TextInput style={styles.format} placeholder="Andrey S." placeholderTextColor="#808080" />
                </View>

                <View>
                    <Text style={styles.text}>Alterar E-mail:</Text>
                    <TextInput style={styles.format} placeholder="Andrey@gmail.com" placeholderTextColor="#808080" />
                </View>

                <View>
                    <Text style={styles.text}>Alterar Senha:</Text>
                    <TextInput style={styles.password} placeholder="********" placeholderTextColor="#808080" secureTextEntry={true} />
                
                </View>

                <View>
                    <Text style={styles.text}>Confirme Senha:</Text>
                    <TextInput style={styles.password} placeholder="Confirme sua senha " placeholderTextColor="#808080" secureTextEntry={true} />
                
                </View>
                
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Homepage")}>
                        <Text style={styles.text_button}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        
    },
    perfilIcon: {
        alignItems: "center",
    },
    text:{
        color: "#000000",
        padding: 10,
    },
    format:{
        borderRadius: 12,
        width: 340,
        height: 55,
        padding: 17,
        borderColor: "#000",
        borderWidth: 1,
    },
    password: {
        borderRadius: 12,
        width: 340,
        height: 55,
        padding: 17,
        borderColor: "#000",
        borderWidth: 1,
    },

    button: {
        width: 340,
        height: 55,
        backgroundColor: "#4285F4",
        borderRadius: 12,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text_button: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },

    button_perfil: {
        width: 150,
        height: 30,
        backgroundColor: "#4285F4",
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text_button_perfil: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
})