import Vector from "../../../assets/components/left_arrow.svg";
import Menu from "../../../assets/components/Menu.svg";
import Agendinha from "../../../assets/icons/Agenda.svg";
import GrupoPessoas from "../../../assets/icons/grupo_persons.svg";
import Localizacao from "../../../assets/icons/location.svg";

import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EventosUnicos({ route }) {
    const navigation = useNavigation();
    const { descricao, evento, foto, data, item_localiza, pessoa } = route.params;

    return (
        <>
            <View style={{ backgroundColor: "#ffffff" }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', margin: '4%', marginLeft: '7%', marginRight: '5%' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Vector />
                    </TouchableOpacity>

                    <View style={{ marginLeft: '5%' }}>
                        <Text style={{ fontSize: 22, color: '#027DC1' }}>{evento}</Text>
                    </View>

                    <TouchableOpacity style={{ marginLeft: 'auto', marginRight: '3%' }} onPress={() => navigation.openDrawer()}>
                        <Menu />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.containerPrincipal}>
                    <Image
                        style={{ width: '100%', height: 250, borderRadius: 8 }} // Ajusta o tamanho da imagem
                        source={{ uri: foto }}
                    />
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: '500' }}>{evento}</Text>

                    <View style={{ flexDirection: 'row', marginTop: '8%' }}>
                        <Agendinha />
                        <Text style={{ fontSize: 20, marginLeft: '2%' }}>10 de Julho</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '3%' }}>
                        <GrupoPessoas />
                        <Text style={{ fontSize: 20, marginLeft: '2%' }}>{pessoa}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '3%', width: 'auto', alignItems: 'center' }}>
                        <Localizacao />
                        <Text style={{ fontSize: 18, marginLeft: '2%', width: 'auto' }}>{item_localiza}</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <Text style={{ fontSize: 18, marginBottom: '25%', textAlign: 'justify', lineHeight: 22 }}>
                            {descricao}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        marginTop: '5%',
        marginLeft: '7%',
        marginRight: '7%',
    },
});
