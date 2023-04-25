import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import iconeeee from '../../img/material-symbols_menu.png'

export default function Home(){
    return(
        <View style={styles.container}>

            <View style={styles.boxSuperior}>
                <Text style={styles.textoBoxSuperior}>Eventos</Text>
                <Image source={iconeeee} style={styles.iconMenu} />
            </View>

            <View>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    boxSuperior:{
        display:'flex',
        flexDirection:'row',
        marginTop: '13%',
    },
    textoBoxSuperior:{
        fontSize: 25,
        textAlign:'left',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginLeft: 20,
        marginRight: '60%'
    },
    iconMenu:{
        width: 30,
        height: 30,
        marginTop: 'auto',
        
    }

})