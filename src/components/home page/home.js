import { Text, View, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import iconeeee from '../../img/material-symbols_menu.png';
import dados from '../../mock/eventos'
import pontos from '../../mock/pontosTuristicos'

export default function Home() {
    return (
        <>
            <View style={styles.boxSuperior}>
                <Text style={styles.textoBoxSuperior}>Eventos</Text>
                <Image source={iconeeee} style={styles.iconMenu} />
            </View>


            <FlatList
                data={pontos}
                showsVerticalScrollIndicator={false}
                keyExtractor={dados => dados.nome}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity style={styles.cardsPontosTuristicos}>
                            <Text style={styles.nomePontosTuristicos}>{item.nome}</Text>
                            <Image source={item.foto} />
                            <Text style={styles.descricaoPontosTuristicos}>{item.descricao}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListHeaderComponent={
                    <View style={styles.boxEventos}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={dados => dados.evento}
                            data={dados}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.cardEvento}>
                                    <Text style={styles.cardTextoEvento}>{item.evento}</Text>
                                    <Text style={styles.cardDataEvento}>{item.data}</Text>
                                </TouchableOpacity>
                            )
                            }
                        />

                        <Text style={styles.textoPontosTuristicos}>Pontos Turísticos</Text>
                    </View>
                }
            />
        </>
    )
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
        height: 150,
        marginTop: 20,
        marginBottom: 20,
    },
    cardEvento: {
        backgroundColor: '#CDCDCD',
        margin: 10,
        height: 100,
        width: 150,
        borderRadius: 15,
        padding: 10,
        //Sombreado dos cards
        elevation: 15
    },
    cardTextoEvento: {
        color: "black",
        fontSize: 20,
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
        fontSize: 25,
        fontWeight:'500',
    },
    cardsPontosTuristicos:{
        alignItems:'center',
        paddingLeft: 5,
        paddingRight: 5,
        width: '100%',
        marginBottom: 30
    },
    nomePontosTuristicos:{
        marginRight: 'auto',
        marginLeft: '5%',
        marginBottom: 5,
        fontSize: 18,
    },
    descricaoPontosTuristicos:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 8,
        fontSize: 15,
    },


})