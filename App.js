import React, { Component } from 'react';
import { 
  StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Switch,ImageBackground,Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: []
    };
    
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  async componentDidMount() {
    try {
      const todos = await AsyncStorage.getItem('todos');
      if (todos !== null) {
        this.setState({ todos: JSON.parse(todos) });
      }
    } catch (e) {
      alert('Erro ao carregar tarefas: ' + e);
    }
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.todos !== this.state.todos) {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(this.state.todos));
      } catch (e) {
        alert('Erro ao salvar tarefas: ' + e);
      }
    }
  }

  async addTodo() {
    if (this.state.input.trim() === '') return;
    
    const newTodo = {
      id: Date.now().toString(),
      text: this.state.input,
      completed: false
    };
    
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
      input: ''
    }));
  }

  async toggleTodo(id) {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  }

  async deleteTodo(id) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  }

    render() {
      const switchColors = ["#cd6e3c", "#e79769", "#5b9a91", "#1a777f", "#135472", "#1d4861"];
      
      return (
        <View style={styles.container}>
          <ImageBackground 
            source={require('./assets/fundo.png')} 
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <View style={styles.content}>
              <Text style={styles.title}>TO DO</Text>
              
              <View style={styles.inputSection}> 
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, { fontSize: 18 }]}
                    value={this.state.input}
                    onChangeText={(text) => this.setState({ input: text })}
                    underlineColorAndroid="transparent"
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#b5836d"
                  />
                  <TouchableOpacity 
                    style={styles.addButton} 
                    onPress={this.addTodo}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.listContainer}>
                <FlatList
                  data={this.state.todos}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item, index }) => (
                    <View style={styles.todoItem}>
                      <View style={styles.todoContent}>
                        <Switch
                          value={item.completed}
                          onValueChange={() => this.toggleTodo(item.id)}
                          trackColor={{ false: switchColors[index % switchColors.length], true: "#b3572e" }}
                          thumbColor={item.completed ? "#f5dd4b" : "#f4f3f4"}
                          style={styles.switch}
                        />
                        <Text 
                          style={[
                            styles.todoText,
                            item.completed && styles.completedText,
                            item.completed && { textDecorationLine: 'line-through' }
                          ]}
                        >
                          {item.text}
                        </Text>
                        <TouchableOpacity 
                          style={styles.deleteButton}
                          onPress={() => this.deleteTodo(item.id)}
                        >
                          <Text style={styles.deleteButtonText}>×</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.divider} />
                    </View>
                  )}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    content: {
      flex: 1,
      padding: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    inputSection: {
      alignItems: 'center',
      marginBottom: 10,
    },
    title: {
      fontSize: 52,
      fontWeight: 'bold',
      color: '#6d9a8b',
      marginTop: 20,
      marginBottom: 10,
      textAlign: 'center',
      fontFamily: 'Bree Serif',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      width: 300,
      maxWidth: 400,
      marginBottom: 10,
    },
    input: {
      flex: 1,
      height: 40,
      borderColor: '#963e17',
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 10,
      color: '#963e17',
      fontFamily: 'Bree Serif',
    },
    addButton: {
      backgroundColor: '#963e17',
      borderRadius: 5,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 30,
      fontFamily: 'Bree Serif',
    },
    listContainer: {
      backgroundColor: 'rgba(226, 219, 199, 0.89)', 
      borderRadius: 10,
      padding: 15,
      maxHeight: height * 0.6,
      flexGrow: 0, 
    },
    todoItem: {
      marginBottom: 10,
    },
    todoContent: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    switch: {
      marginRight: 10,
    },
    todoText: {
      color: '#963e17',
      fontSize: 18,
      flex: 1,
      marginHorizontal: 10,
      fontFamily: 'Bree Serif',
    },
    completedText: {
      color: '#b5836d',
    },
    divider: {
      height: 0.5, // Linha mais fina
      backgroundColor: '#cd8665',
      marginVertical: 5,
    },
    deleteButton: {
      padding: 8,
      marginLeft: 10,
    },
    deleteButtonText: {
      color: '#963e17',
      fontSize: 35,
      fontFamily: 'Bree Serif',
      lineHeight: 28,
    },
  });
  
  export default TodoApp;