import { View ,Image , StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import CaririTur from "../../../assets/components/CaririTur";
import Menu from "../../../assets/components/Menu";

export default function Topcontainer(){
    return<>

        <StatusBar/>
        <View style={styles.container}>
            <CaririTur/>
            <TouchableOpacity>
                <Menu/>
            </TouchableOpacity>
        </View>
        </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 30,
        marginTop:25,
        justifyContent:"space-between",
        alignItems:'center'
    },
});