import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export default TaskList extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <TextInput
                    value={ this.state.todoTxt }
                />

                <Button title="New todo"></Button>
            
                <View>
                </View>
            </View>
        );
    }
}