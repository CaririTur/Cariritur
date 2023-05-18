import { View ,Image , StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import CaririTur from "../../../assets/components/cariritur.png";
import Menu from '../../img/material-symbols_menu.png';

export default function Topcontainer(){
    return<>

        <StatusBar/>
        <View style={styles.container}>
            <Image source={CaririTur}/>
            
            <TouchableOpacity>
                <Image source={Menu}/>
            </TouchableOpacity>
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