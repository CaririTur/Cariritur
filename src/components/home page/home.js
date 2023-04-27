import { Text, View, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import iconeeee from '../../img/material-symbols_menu.png';
import dados from '../../mock/eventos'

export default function Home() {
    return (
        <View style={styles.container}>

            <View style={styles.boxSuperior}>
                <Text style={styles.textoBoxSuperior}>Eventos</Text>
                <Image source={iconeeee} style={styles.iconMenu} />
            </View>

            <View style={styles.boxEventos}>

                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={dados => dados.evento}
                    data={dados}
                    renderItem={({ item }) => (
                        <View style={styles.cardEvento}>
                            <Text style={styles.cardTextoEvento}>{item.evento}</Text>
                            <Text style={styles.cardDataEvento}>{item.data}</Text>
                        </View>
                    )

                    }
                />
            </View>

        </View>
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
    },
    textoBoxSuperior: {
        fontSize: 25,
        textAlign: 'left',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginRight: '60%'
    },
    iconMenu: {
        width: 30,
        height: 30,
        marginTop: 'auto',
    },
    boxEventos: {
        height: 150,
        backgroundColor: 'gray',
        marginTop: 20,
    },
    cardEvento:{
        backgroundColor: 'blue',
        margin: 10,
        height: 100,
        width:  150,
        borderRadius: 15,
        padding: 10
    },
    cardTextoEvento:{
        color:"#FFF",
        fontSize: 20,
    },
    cardDataEvento:{
        marginTop: 'auto',
        color: '#FFF',
        fontSize: 15,
        fontStyle:'italic'
    }
    

})