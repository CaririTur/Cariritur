import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import Google from "../../../assets/google.png";
import Ios from "../../../assets/ios.png";
import Facebook from "../../../assets/facebook.png";

export default function Login({navigation}){
  return <>
    <View style = {styles_login.container}>
      <View>
        <Text style = {styles_login.text_bold} >Bem-vindo</Text>
        <Text style = {styles_login.text_static} >Entre com sua conta</Text>
      </View>

      <View  style = {styles_login.container_input}>
        <TextInput placeholder="E-mail" style = {styles_login.text_input}/>
      </View>

      <View  style = {styles_login.container_input}>
        <TextInput placeholder="Senha" style = {styles_login.text_input} secureTextEntry={true}/>
      </View>

      <View>
        <TouchableOpacity style={styles_login.button} onPress={() => navigation.navigate("TabHome")}>
          <Text  style={styles_login.text_button} >Entrar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles_login.entra_como}>Ou entre com</Text>
      </View>

      <View style={ styles_login.container_img }>
        <Image source={Google} style={styles_login.img} />
        <Image source={Ios} style={styles_login.img} />
        <Image source={Facebook} style={styles_login.img} />
      </View>

      <View style={ styles_login.container_text }>
        <Text>Ainda não tem uma conta?</Text>
        <Text style={ styles_login.text_blue } onPress={() => navigation.navigate("Cadastro")}>Registre-se</Text>
      </View>

    </View>

  </>
}

const styles_login = StyleSheet.create({

  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center"
  },

  text_input: {
    borderRadius: 12,
    borderWidth: 0.5,
    width: 340,
    height: 55,
    padding: 17,
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
    color: '#FFFFFF'
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
    color: '#C4C4C4',
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
    color: 'blue',
    marginLeft: 5,
  },

  container_text: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
  }

});
