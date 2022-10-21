import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Task from './Task'

export default function Todos() {
const [todo, setTodo] = useState('');
const [todos, setTodos] = useState([]);

const handleAddTodo = (value) => {
  if (value.length > 0) {
    setTodos([...todos, { text: value, key: Date.now(), checked:false}]);
    setTodo('');
  }
}


const handleDeleteTodo = (id) => {
  setTodos( todos.filter((value) => {
      if (value.key !== id) return true
  })
 )}

 const handleChecked = (id) => {
    
    setTodos(todos.map((todo) => {
        if(todo.key === id) {
            todo.checked = !todo.checked;
        }
        return todo;
    }));
 }

return (
  <View style={styles.container}>
    <Text style={styles.textTitle}>Today's tasks</Text>
    <ScrollView style={styles.containerView}>
      {todos.map((task) => (
          <Task
            text={task.text}
            key={task.key}
            checked={task.checked}
            setChecked={() => handleChecked(task.key)}
            delete={() => handleDeleteTodo(task.key)}
            // checked={task.checked} // toggle the checked icon
            // setChecked={() => handleChecked(task.key)}
          />
        )) 
    }
    </ScrollView>
    <View style={styles.containerButton}>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setTodo}
        value={todo}
        placeholder="add todo" 
        data-testid="input"
      />
      <TouchableOpacity onPress={() => handleAddTodo(todo)} style={styles.buttonStyle} color='white' data-testid="add-button">
        <Text>add</Text>
      </TouchableOpacity>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#E8EAED',
  alignItems: 'center',
  justifyContent: 'center',
},

containerButton: {
  display: 'flex',
  position: 'absolute',
  bottom: 25,
  width: '95%',
  left: 10,
  right: 10,
},
containerView: {
  width: '100%',
  position: 'absolute',
  top: 40,
  height: '75%',
},
textTitle: {
  fontSize: 20,
  position: 'absolute',
  top: 25,
  left: 10,
  zIndex: 10
},

inputStyle: {
  color: '#C0C0C0',
  backgroundColor: 'white',
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 20, 
  paddingRight: 20,
  outlineStyle: 'none',
}, 
buttonStyle: {
  color: 'white',
  backgroundColor: 'blue',
  outlineStyle: 'none',
  fontSize: 25,

},
});

