import { View, Text, StyleSheet } from "react-native";

export default function EventosUnicos(){
    return(
        <View style={styles.containerPrincipal}>
            <Text> 
                teste
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        alignItems: 'center',
        marginTop: '23%'
    }
})