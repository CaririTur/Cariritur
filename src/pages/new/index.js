import { View , Text, TouchableOpacity,StyleSheet} from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function New(navigation){
    return<>
        <View style={styles.container}>

            <Text style={styles.text}>Criar Eventos</Text>
            
            <View style={styles.views}>
                <Text style={styles.texts}>Nome do Evento :</Text>
                <TextInput placeholder="Ex : Festival do Caju" style={styles.inputs}/>
            </View>

            <View style={styles.views}>
                <Text style={styles.texts}>Data do Evento :</Text>
                <TextInput placeholder="Ex : 10 de Julho de 2023" style={styles.inputs}/>
            </View>

            <View style={styles.views}>
                <Text style={styles.texts}>Imagens do Evento :</Text>
                <TextInput placeholder="Ex : Upload Arquivo" style={styles.inputs}/>
            </View>

            <View style={styles.views}>
                <Text style={styles.texts}>Descrição do Evento :</Text>
                <TextInput multiline numberOfLines={7} placeholder="Ex : Festival do Caju acontece na escola Estadual Antonia Lindalva de Morais na Cidade de Milagres - Ceara ." 
                style={styles.input_desc}/>
            </View>

            <TouchableOpacity style={styles.bottom}>
                <Text style={styles.text_bottom}>Salvar Evento</Text>
            </TouchableOpacity>

        </View>
        </>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:25,
        marginRight:25,
        marginTop:24
    },

    views:{
        marginTop:24,
    },

    texts:{
        fontSize:16,
        fontWeight:"500",
        color:"#6F6F6F",
        marginBottom:9
    },

    text:{
        fontSize:25,
        fontWeight:"500",
        color:"#027DC1",
    },

    inputs:{
        borderWidth:1,
        borderRadius:12,
        borderColor:"#818181",
        padding: 16,
    },

    input_desc:{
        borderWidth:1,
        borderRadius:12,
        borderColor:"#818181",
        padding: 16,
    },

    bottom:{
        width:"100%",
        height:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:24,
        borderRadius:12,
        backgroundColor:"#027DC1",
    },

    text_bottom:{
        fontSize:18,
        fontWeight:"500",
        color:"#FFFFFF",
    },
});