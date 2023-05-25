import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Profilecontainer from "../../components/menunavigation/profilecontainer";

export default function Profile(navigation){
    return(

     <SafeAreaView>
        <Profilecontainer/>
        <View>
            <Text>Perfil</Text>
            <TouchableOpacity>
                
            </TouchableOpacity>

        <View>
        <Text>Alterar Nome</Text>
            <TextInput placeholder="" placeholderTextColor="#190152"/>
        </View>

        <View>
        <Text>Alterar E-mail</Text>
            <TextInput placeholder="Example@gmail.com" placeholderTextColor="#190152"/>
        </View>

        <View>
        <Text>Alterar Senha</Text>
            <TextInput placeholder="" placeholderTextColor="#190152"  secureTextEntry={true}/>
        </View>

        <View>
        <Text>Confirme Senha</Text>
            <TextInput placeholder="Confirme sua senha " placeholderTextColor="#190152" secureTextEntry={true}/>
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
                <Text>Salvar</Text>
            </TouchableOpacity>
        </View>

    </View>

    </SafeAreaView>
    )
}
