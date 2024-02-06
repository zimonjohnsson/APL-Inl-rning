import React, {useState} from 'react';
import {StyleSheet, Button, Text, View, TextInput, Alert, Pressable} from 'react-native';

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
        <Text
        style={{
          fontWeight: 'bold',
          fontStyle: 'italic',
          fontSize: 20,
          fontFamily: 'Arial',
        }}
        >Zimons fina Todo-list</Text>
        <TextInput
        value={inputValue}
        placeholder="TODO"
        style={{
          width: 300,
          fontSize: 30,
          borderBottomWidth: 1,
          outlineStyle: 'none',
          borderColor: 'black',
          textAlign: "center",
          marginBottom: 5,
        }}
        onChangeText={text => setInputValue(text)}
        maxLength={20}
        returnKeyType="done"
        onSubmitEditing={handleSavePress}
        />
        <Pressable
        onPress={handleSavePress}
        style={{
          padding: 8,
          backgroundColor: 'orange',
          borderRadius: 10,
        }}
        ><Text
        style={{
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
        }}
        >Spara</Text></Pressable>
        <View style={styles.todoList}>
          {todos.map((todo, index)=>(
          <View key={index} style={styles.todoContainer}>
            <Text
            style={{
              marginRight: 10,
              paddingBottom: 4,
              paddingTop: 4,
              fontSize: 20,
            }}
            >{todo} 
            </Text>
            <Pressable
            title="X"
            onPress={() => handleRemove(index)}
            ><Text
            style={styles.xButton}
            >X</Text></Pressable>
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
    overflow: 'hidden',
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    width: 280,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  xButton:{
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default App;