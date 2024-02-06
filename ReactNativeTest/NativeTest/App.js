import React, {useState} from 'react';
import {StyleSheet, Button, Text, View, TextInput, Alert} from 'react-native';

const App = () => {
  const [todo, setTodo] = useState("");
  const [inputValue, setInputValue] = useState('');

  const handleSavePress=()=>{
    if(inputValue != ''){
    setTodo(inputValue);
    }
    else{
      Alert.alert("Har du lika lite IQ som Jonte eller? Skriv något!");
    }
  }

    return (
      <View style={styles.container}>
        <TextInput
        value={inputValue}
        placeholder="TODO"
        style={{
          width: 200,
          textAlign: "center",
        }}
        onChangeText={text => setInputValue(text)}
        />
        <Button 
        title="Spara"
        onPress={handleSavePress}
        />
        <View>
          <Text
          style={{
            width:  200,
            textAlign: "center",
          }}
          >{todo}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;