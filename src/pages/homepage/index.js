import React, {useContext, useEffect, useState} from 'react';
import {Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { getPlaces } from "../../services/requests/users";

export default function Homepage({ navigation }) {
    const { AuthContext } = require("../../routes/login_routes")
    const { token, logOut } = useContext(AuthContext)
    const [eventPlaces, seteventPlaces] = useState([])
    const [otherPlaces, setotherPlaces] = useState([])

    useEffect(() => {
        getPlaces(token).then((r) => {
            let eventPlaces = [];
            let otherPlaces = [];

            r.places.forEach((place) => {
                if (place.category === "EVENT") {
                    eventPlaces.push(place);
                } else {
                    otherPlaces.push(place);
                }
            });
            seteventPlaces(eventPlaces)
            setotherPlaces(otherPlaces)
        }).catch((error) => {
            if(error.response && error.response === 401){
                Alert.alert("Error", "Faça login novamente")
                logOut()
            }
        })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={otherPlaces}
                showsVerticalScrollIndicator={false}
                keyExtractor={dados => dados.id}
                renderItem={({ item }) =>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.nomePontosTuristicos}>{item.name}</Text>
                        <TouchableOpacity style={styles.cardsPontosTuristicos}>
                            <Image style={{ width: '100%', height: 150 }} source={{ uri: item.images[0] }} />
                            <Text style={styles.descricaoPontosTuristicos}>{item.description.length > 200 ? item.description.substring(0, 200) + "... veja mais." : item.description}</Text>
                        </TouchableOpacity>
                    </View>
                }
                ListHeaderComponent={
                    <View style={styles.boxEventos}>
                        <Text style={styles.textoPontosTuristicos}>Eventos</Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={dados => dados.id}
                            data={eventPlaces}
                            renderItem={({item}) => (
                                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { navigation.navigate('EventosUnicos', { foto: item.images[0], descricao: item.description, evento: item.name, data: item.open_hour, item_localiza: item.street, pessoa: "18000" }) }}>
                                    <Image source={{ uri: item.images[0] }} style={styles.cardEvento}/>
                                    <Text style={styles.cardTextoEvento}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                            }
                        />
                        <Text style={styles.textoPontosTuristicos}>Pontos Turísticos</Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxSuperior: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '13%',
        height: 40,
        alignItems: 'center'
    },
    textoBoxSuperior: {
        fontSize: 25,
        marginLeft: 20,
        marginRight: '60%',
        fontWeight: '600'
    },
    iconMenu: {
        width: 30,
        height: 30,
        marginTop: 'auto',
        marginBottom: 'auto',
        alignItems: 'center',
    },
    boxEventos: {
        height: 220,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 5,
    },
    cardEvento: {
        backgroundColor: '#CDCDCD',
        margin: 5,
        height: 100,
        width: 150,
        borderRadius: 15,
        padding: 10,
    },
    cardTextoEvento: {
        color: "black",
        fontSize: 18,
        fontWeight: 500,
    },
    cardDataEvento: {
        marginTop: 'auto',
        color: 'black',
        fontSize: 15,
        fontStyle: 'italic'
    },
    textoPontosTuristicos: {
        marginLeft: 15,
        fontSize: 22,
        fontWeight: '500',
    },
    cardsPontosTuristicos: {
        width: '90%',
        height: 'auto',
        marginBottom: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 6,
        elevation: 5,
        shadowColor: '#030002',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        paddingBottom: 10
    },
    nomePontosTuristicos: {
        marginRight: 'auto',
        marginLeft: '5%',
        marginBottom: 5,
        fontSize: 18,
        fontWeight: "500"
    },
    descricaoPontosTuristicos: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
        textAlign: 'justify',
        paddingLeft: 6,
        paddingRight: 6,
    },
});
