import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Switch,StyleSheet, Text, View, TextInput ,TouchableOpacity, Alert ,} from 'react-native';
//import { TouchableOpacity } from 'react-native';

export default function App() {
  const [Altura, setAltura] = useState("");
  const [Peso, setPeso] = useState("");
  const [Genero, setGenero] = useState(false);
  const toggleSwitch = () => setGenero(previousState => !previousState);
  const handleCalcular = () =>{
    const height = parseFloat(Altura) / 100;
    const weight = parseFloat(Peso);

    const imc = weight / (height * height);
    
    if(Genero){
      if (imc < 20.7){
        console.log(imc)
        return (Alert.alert(
      "Abaixo do peso!",
    'Seu imc é de '+imc.toFixed(2)+' e esta Abaixo do peso'));}
    if(imc > 20.7 && imc < 26.4)
      return Alert.alert(
    "Normal",
  'Seu imc é de '+imc.toFixed(2)+' e é considerado Normal');
  if(imc > 26.4 && imc < 27.8)
    return Alert.alert(
  "Pouco acima do peso!",
  'Seu imc é de'+imc.toFixed(2)+' e esta um pouco acima do peso'
  );
  if(imc > 27.8 && imc < 31.1)
    return Alert.alert(
  "Acima do peso!",
  'Seu imc é de'+imc.toFixed(2)+' e  acima do peso'
    );

    if(imc > 31.1)
      return Alert.alert(
    "Obeso!",
    'Seu imc é de '+imc.toFixed(2)+' e esta obeso'
      );

    }else{
      if (imc < 19.1)
        return Alert.alert(
      "Abaixo do peso!",
    'Seu imc é de '+imc.toFixed(2)+' e esta Abaixo do peso');
    if(imc > 19.1 && imc < 25.8)
      return Alert.alert(
    "Normal",
  'Seu imc é de '+imc.toFixed(2)+' e é considerado Normal');
  if(imc > 25.8 && imc < 27.3)
    return Alert.alert(
  "Pouco acima do peso!",
  'Seu imc é de '+imc.toFixed(2)+' e esta um pouco acima do peso'
  );
  if(imc > 27.3 && imc < 32.3)
    return Alert.alert(
  "Acima do peso!",
  'Seu imc é de '+imc.toFixed(2)+' e  acima do peso'
    );

    if(imc > 32.3)
      return Alert.alert(
    "Obeso!",
    'Seu imc é de '+imc.toFixed(2)+' e esta obeso'
      );

    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.inputGroupRow}>
      </View>
     <Text>Feminino</Text>
      <Switch
        trackColor={{false: '#FFC0CB', true: '#81b0ff'}}
        thumbColor={Genero ? '#81b0ff' : '#FFC0CB'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={Genero}
      />
      <Text>Masculino</Text>
    
      <Text>Altura</Text>
      <TextInput 
      keyboardType='number-pad'
      style={styles.input}
      value={Altura}
      onChangeText={(text) => setAltura(text.replace(/\D/g, ""))}
      />
        <Text>Peso</Text>
      <TextInput 
      keyboardType='number-pad'
      style={styles.input}
      value={Peso}
      onChangeText={(text) => setPeso(text.replace(/\D/g, ""))}
      />
      <TouchableOpacity
       onPress={handleCalcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />

    </View>
  );
}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32f527',
    alignItems: 'center',
    justifyContent: "center",
  },
  inputGroupRow:{
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
  },
  input: {
    height: 54,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#000",
  },
  button:{
    backgroundColor: '#2AD131',
    width: '80%',
    height: 54,
    justifyContent: 'center',
    elevation: 2,
    borderRadius: 8,
    marginTop:16,
  },
  buttonText:{
    fontFamily: 'Poppins_600SemiBold',
    color: 'black',
    fontSize: 15,
    marginTop:40
  },

 
});