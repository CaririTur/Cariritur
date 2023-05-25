import { View ,Image , StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import Profile from "../../../assets/components/Profile";
import Menu from "../../../assets/components/Menu";
import Vector from "../../../assets/components/Vector";

export default function Topcontainer(){
    return<>
        <StatusBar/>
        <View style={styles.container}>
            <TouchableOpacity>
                <Vector/>
            </TouchableOpacity>
            <View>
            <Profile/>
            </View>
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
 
    },
});