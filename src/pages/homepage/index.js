import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import dados from "../../mock/eventos"
import pontos from "../../mock/pontosTuristicos"

export default function Homepage({navigation}) {
    return <>
        <FlatList
            data={pontos}
            showsVerticalScrollIndicator={false}
            keyExtractor={dados => dados.nome}
            renderItem={({item}) => <>
                <View style={{paddingBottom: 20}}>
                    <Text style={styles.nomePontosTuristicos}>{item.nome}</Text>
                    <TouchableOpacity style={styles.cardsPontosTuristicos}>
                        <Image source={item.foto}/>
                        <Text style={styles.descricaoPontosTuristicos}>{item.descricao}</Text>
                    </TouchableOpacity>
                </View>
            </>}
            ListHeaderComponent={
                
                <View style={styles.boxEventos}>
                    <Text style={styles.textoPontosTuristicos}>Eventos</Text>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={dados => dados.evento}
                        data={dados}
                        renderItem={({item}) => (
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate("Eventos")} style={{alignItems:"center"}}>
                                    <Image source={item.photo} style={styles.cardEvento}/>
                                    <Text style={styles.cardTextoEvento}>{item.evento}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                        }
                    />
                    <Text style={styles.textoPontosTuristicos}>Pontos Turísticos</Text>
                </View>
            }
        />
    </>

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
        margin: 10,
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
        fontSize: 25,
        fontWeight: '500',
    },
    cardsPontosTuristicos: {
        width: 365,
        height: 250,
        marginBottom: 10,
        marginLeft: 15,
        backgroundColor: "#FFFFFF",
        borderRadius: 6,
        elevation: 5,
        shadowColor: '#030002',
        shadowOpacity: 0.25,
        shadowRadius: 5
    },
    nomePontosTuristicos: {
        marginRight: 'auto',
        marginLeft: '5%',
        marginBottom: 5,
        fontSize: 18,
        fontWeight:"bold"
    },
    descricaoPontosTuristicos: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        fontWeight: '400',
        paddingLeft: 6,
        paddingRight: 6,
    },
});
