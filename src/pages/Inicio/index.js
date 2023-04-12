import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Inicio({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao nosso projeto!</Text>
      <Text>Responsavel John Lennon</Text>
      <Button title = "Login" onPress={()=> navigation.navigate('Login')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});