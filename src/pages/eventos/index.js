import { View , Text, TouchableOpacity, FlatList,StyleSheet,Image} from "react-native";
import Topcontainer from "../../components/menunavigation/topcontainer";
import eventos from "../../mock/eventos";


import Romaria from "../../../assets/homepage/Romaria";

export default function Eventos(navigation){
    return<>
        <Topcontainer/>
        <View>
            
            <FlatList
                keyExtractor={eventos => eventos.evento}
                data={eventos}
                renderItem={({ item }) => <>
                    <View style={style.container}>

                        <Text style={style.date}> {item.data}</Text>

                        <TouchableOpacity style={style.container_filho}>
                            <Text style={style.text}>{item.evento}</Text>
                            <Text style={style.text_description}>{item.description}</Text>
                            <Image source={item.photo} style={{marginTop:10, height:139,width:337, marginLeft:10,}}/>
                        </TouchableOpacity>
                     </View>
                </>
            }/>              

        </View>
        </>
}

const style = StyleSheet.create ({

    container:{
        flex:1,
    },

    container_filho:{
        width:357,
        height:233,
        marginLeft:18,
        marginBottom:18,
        marginRight:18,
        borderRadius:10,
        elevation:10,
        shadowColor: '#030002', 
        shadowOpacity: 0.25, 
        shadowRadius: 5 ,
        backgroundColor:"#ffffff"
    },

    date:{
        fontSize:18,
        marginLeft:18,
        marginBottom:10,
        marginTop:10
    },

    text:{
        fontSize:18,
        marginLeft:10,
        marginTop:10,
        fontWeight:"bold"
    },

    
    text_description:{
        fontSize:15,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
    },

});

