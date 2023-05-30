import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import eventos from "../../mock/eventos";

export default function Eventos() {
    return <View>
        <FlatList
            keyExtractor={eventos => eventos.evento}
            data={eventos}
            renderItem={({item}) => <>
                <Text style={style.date}> {item.data}</Text>
                <View style={style.container}>
                    <TouchableOpacity style={style.container_filho}>
                        <Text style={style.text}>{item.evento}</Text>
                        <Text style={style.text_description}>{item.description}</Text>
                        <Image source={item.photo} style={{height: "55%", width: '100%'}}/>
                    </TouchableOpacity>
                </View>
            </>
            }/>
    </View>
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    container_filho: {
        justifyContent: 'space-between',
        width: '90%',
        height: 230,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        elevation: 10,
        shadowColor: '#030002',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        backgroundColor: "#ffffff",
    },

    date: {
        fontSize: 18,
        marginLeft: 18,
        marginBottom: 10,
        marginTop: 10
    },

    text: {
        fontSize: 18,
        fontWeight: "bold"
    },


    text_description: {
        fontSize: 15,
    },

});
