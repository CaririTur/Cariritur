import Vector from "../../../assets/components/left_arrow.svg";
import Menu from "../../../assets/components/Menu.svg";
import Agendinha from "../../../assets/icons/Agenda.svg";
import GrupoPessoas from "../../../assets/icons/grupo_persons.svg";
import Localizacao from "../../../assets/icons/location.svg";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EventosUnicos({ route }) {

    const navigation = useNavigation();
    const { descricao, evento, foto, data, item_localiza, pessoa } = route.params;


    return (
        <>
            <View style={styles.menuNavegacao}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Vector />
                </TouchableOpacity>

                <View style={{ marginLeft: '5%', }}>
                    <Text style={{ fontSize: 22, color: '#027DC1' }}>{evento}</Text>
                </View>

                <TouchableOpacity style={{ marginLeft: 'auto', marginRight: '3%' }}>
                    <Menu />
                </TouchableOpacity>
            </View>

            <View style={styles.containerPrincipal}>

                <View>
                    <Image style={{ height: '30%', borderRadius: 8, width: 350, marginLeft: 'auto', marginRight: 'auto' }} source={{ uri: foto }} />
                    <Text style={{ marginLeft: '10%', marginRight: '10%', fontSize: 23 , marginTop:10}}>{evento}</Text>

                    <View style={{ flexDirection: 'row', marginLeft: '10%', marginRight: '10%', marginTop: '8%' }}>
                        <Agendinha />
                        <Text style={{ fontSize: 20, marginLeft: '2%' }}>10 de Julho</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: '10%', marginRight: '10%', marginTop: '3%' }}>
                        <GrupoPessoas />
                        <Text style={{ fontSize: 20, marginLeft: '2%' }}>{pessoa}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: '10%', marginRight: '10%', marginTop: '3%' }}>
                        <Localizacao />
                        <Text style={{ fontSize: 20, marginLeft: '2%' }}>{item_localiza}</Text>
                    </View>

                    <View style={{ justifyContent: 'center' , alignItems: 'center', marginTop: 30 }}>
                        <Text style={{ marginLeft: '10%', marginRight: '10%', fontSize: 18, marginBottom: '25%',}}>{descricao}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    menuNavegacao: {
        marginTop: '10%',
        marginLeft: '3%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerPrincipal: {
        flex: 1,
        alignItems: 'center',
        marginTop: '10%'
    },
})
