import {StyleSheet, Text, TextInput, TouchableOpacity, View,Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Google from "../../../assets/google.png";
import Ios from "../../../assets/ios.png";
import Facebook from "../../../assets/facebook.png";


export default function Cadastro({navigation}) {
    return <>

    <LinearGradient 
         style={{
	    height:"110%", 
	    width: "120%", 
	    marginTop: 0, 
        position:"absolute",
	    borderRadius: 5, 
     }}

	    start={{x:0,y:1}}
	    end={{x:1,y:0}}
        locations={[0.25,0.75]}
	    colors={['#00b9fb','#cdf2ff']}>
    
    </LinearGradient>

        <View style={styles_jl.container}>
            <View>
                <Text style={styles_jl.text_bold}>Bem vindos !</Text>
                <Text style={styles_jl.text_static}>Faça seu registro</Text>
            </View>

            <View style={styles_jl.container_input}>
                <TextInput placeholder="Nome Completo" placeholderTextColor="#190152" style={styles_jl.text_input}/>
            </View>

            <View style={styles_jl.container_input}>
                <TextInput placeholder="Example@gmail.com" placeholderTextColor="#190152" style={styles_jl.text_input}/>
            </View>

            <View style={styles_jl.container_input}>
                <TextInput placeholder="Senha" placeholderTextColor="#190152" style={styles_jl.text_input} secureTextEntry={true}/>
            </View>

            <View style={styles_jl.container_input}>
                <TextInput placeholder="Confirme sua senha " placeholderTextColor="#190152" style={styles_jl.text_input} secureTextEntry={true}/>
            </View>


            <View style={styles_jl.term_priv}>
                <Text style={{marginLeft: 10, marginRight: 8}}>By registering, you are agreeing with our Terms of Use
                    and Privacy Policy</Text>
                <TouchableOpacity style={{marginLeft: 10, marginRight: 8}}>
                    <Text style={{color: '#9C3E16'}}>Terms of Use and Privacy Policy</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles_jl.bottom} onPress={() => navigation.navigate("Homepage")}>
                    <Text style={styles_jl.text_bottom}>Registre-se</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles_jl.hr}>Ou entre com</Text>
            </View>

            <View style={ styles_jl.container_img }>
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
        borderColor:"#190152",
        borderWidth:1
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
        marginBottom:40,
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
        marginBottom:25
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
