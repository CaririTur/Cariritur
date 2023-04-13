import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Logo from '../../../assets/logo.png';

export default function Inicio({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={Logo}/>
      <StatusBar style="auto" />
      <Text style={{fontWeight: 'bold', }}>Por Grupo Genisys</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});