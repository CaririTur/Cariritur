import { View,Text,TextInput,StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import Google from "../../assets/Google.svg";
import Ios from "../../assets/Ios.svg";
import Facebook from "../../assets/Facebook.svg";

export default function Cadastro(){
    return <>
        <View style = {styles_jl.container}>
            <View>
                <Text style = {styles_jl.text_bold} >Bem vindos !</Text>
                <Text style = {styles_jl.text_static} >Faça seu registro</Text>
            </View>

            <View  style = {styles_jl.container_input}>
                <TextInput placeholder="Nome Completo" style = {styles_jl.text_input} /> 
            </View>

            <View  style = {styles_jl.container_input}>
                <TextInput placeholder="Example@gmail.com" style = {styles_jl.text_input}/>
            </View>
            
            <View  style = {styles_jl.container_input}>
                <TextInput placeholder="Senha" style = {styles_jl.text_input} secureTextEntry={true}/>
            </View>

            <View  style = {styles_jl.container_input}>
                <TextInput placeholder="Confirme sua senha " style = {styles_jl.text_input} secureTextEntry={true}/> 
            </View>


            <View style={styles_jl.term_priv}>
                <Text style= {{marginLeft:10,marginRight:8}}>By registering, you are agreeing with our Terms of Use and Privacy Policy</Text>
                <TouchableOpacity style= {{marginLeft:10,marginRight:8}}>
                    <Text  style= {{color:'#9C3E16'}}>Terms of Use and Privacy Policy</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles_jl.bottom}>
                    <Text  style={styles_jl.text_bottom}>Registre-se</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles_jl.hr}>Ou entre com</Text>
            </View>

            <View>

            </View>
        </View>

    </>
}

const styles_jl = StyleSheet.create({

    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },

    text_input:{
        borderRadius:12,
        borderWidth:0.5,
        width:339,
        height:55,
        padding:17,
    },

    container_input:{
        flexDirection:'row',
        paddingBottom:19,
    },

    text_bold:{
        fontSize:25,
        fontWeight:'bold',
    },

    text_static:{
        fontSize:15,
        marginBottom:105,
        marginLeft:10
    },

    term_priv:{
        marginLeft:17,
        marginRight:17,
    },

    text_bottom:{
        color:'#FFFFFF'

    },

    bottom:{
        width:339,
        height:55,
        backgroundColor:"#190152",
        borderRadius:12,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
    },

    hr:{
        marginTop:37,
        color:'#C4C4C4',
        fontWeight:'bold'
    },


});