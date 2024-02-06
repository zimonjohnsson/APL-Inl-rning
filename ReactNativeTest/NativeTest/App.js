import React, {useState} from 'react';
import {StyleSheet, Button, Text, View, TextInput, Alert} from 'react-native';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSavePress=()=>{
    if(inputValue !== ''){
    const newTodos = [...todos, inputValue];
    setTodos(newTodos);
    setInputValue('');
    }
    else{
      Alert.alert("Skriv något!");
    }
  }

  const handleRemove = (index) =>{
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

    return (
      <View style={styles.container}>
        <Text>Zimons fina Todo-list</Text>
        <TextInput
        value={inputValue}
        placeholder="TODO"
        style={{
          width: 300,
          fontSize: 30,
          borderWidth: 1,
          borderRadius: 20,
          borderColor: 'black',
          textAlign: "center",
        }}
        onChangeText={text => setInputValue(text)}
        maxLength={20}
        returnKeyType="done"
        onSubmitEditing={handleSavePress}
        />
        <Button 
        title="Spara"
        onPress={handleSavePress}
        />
        <View style={styles.todoList}>
          {todos.map((todo, index)=>(
          <View key={index} style={styles.todoContainer}>
            <Text
            >{todo} 
            </Text>
            <Button
            title="R"
            onPress={() => handleRemove(index)}
            />
          </View>
          ))}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
  },
  todoList: {
    overflow: 'scroll',
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    width: 280,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});

export default App;