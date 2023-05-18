import { View ,Image , StyleSheet, StatusBar } from "react-native";
import CaririTur from "../../../assets/components/cariritur.png";
import Menu from '../../img/material-symbols_menu.png';

export default function Topcontainer(){
    return<>

        <StatusBar/>
        <View style={styles.container}>
            <Image source={CaririTur}/>
            <Image source={Menu}/>
        </View>
        </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: "#B3B3B3",
        marginTop:25,
        justifyContent:"space-between"
    },
});