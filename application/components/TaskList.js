import React, { Component } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';

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
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    value={ this.state.todoTxt }
                    onChangeText={ this.handleChange }
                />

                <Button title="New todo"
                    onPress={this.save}>
                </Button>
            
                <View>
                        { this.state.todos.map((item, key) => (
                            <Text key={key}>
                                {item}
                            </Text>
                        )) }
                </View>
            </View>
        );
    }

    save = () => {
        if (!this.state.todoTxt) {
            Alert.alert('Opss', 'Plase fill in task');
        }

            this.state.todos.push(this.state.todoTxt)
            this.setState({
                todoTxt: "",
                todos: this.state.todos
            });
        
    }

    handleChange = (txt) => {
        this.setState({
            todoTxt: txt
        });
    }
}