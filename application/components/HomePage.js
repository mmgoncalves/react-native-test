import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HomePage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Text>'Hello this is my home page'</Text>
                <Button onPress={this.goToMyAboutPage} title="Go to aboutPage"></Button>
                <Button onPress={this.goToMyTasklist} title="Go to Tasklist"></Button>
            </View>
        );
    }

    goToMyAboutPage = () => {
        this.props.navigator.push({
            name: 'About',
            title: 'About',
            passProps: {
                data: {
                    id: 123321,
                    name: "Mateus"
                }
            }
        });
    }

    goToMyTasklist = () => {
        this.props.navigator.push({
            name: 'Task',
            title: 'Task',
            passProps: {}
            }
        });
    }
}