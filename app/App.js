import React, {Component} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import Header from "./Header";
//import TodoList from './TodoList';
import Input from "./Input";
import Button from "./Button";
import TodoList from "./TodoList";

let todoIndex = 0;

class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            inputValue: ''
        }
        this.submitTodo = this.submitTodo.bind(this);
    }


    inputChange(inputValue) {
        console.log(inputValue);
        this.setState({inputValue});
    }

    submitTodo() {
        let todo = {
            title: this.state.inputValue,
            todoIndex: todoIndex,
            completed: false
        }
        this.state.todos.push(todo);
        this.setState({todos: this.state.todos, inputValue: ''})
    }

    render() {
        let {inputValue,todos} = this.state;
        return (
            <View style={todo.container}>
                <ScrollView style={todo.content} keyboardShouldPersistTaps="always">
                    <Header/>
                    <Input inputValue={inputValue} inputChange={(text) => this.inputChange(text)}/>
                    <Button submitTodo={this.submitTodo}/>
                    <TodoList todos={todos}/>
                </ScrollView>   
            </View>
        )
    }
}

const todo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#55ecb9'
    }
})

export default App;

