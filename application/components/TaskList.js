import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export default class TaskList extends Component {
    constructor() {
        super();

        this.state = {
            todoTxt: "",
            todos: []
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    value={ this.state.todoTxt }
                    onChangeText={ this.handleChange }
                />

                <Button title="New todo"
                    onPress={this.save}>
                </Button>
            
                <View>
                </View>
            </View>
        );
    }

    save = () => {
            this.state.todos.push(this.state.todoTxt)
            this.setState({

            });
        
    }

    handleChange = (txt) => {
        this.setState({
            todoTxt: txt
        });
    }
}