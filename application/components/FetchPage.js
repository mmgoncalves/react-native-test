import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';

export default class FetchPage extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        }

        fetch('http://www.w3schools.com/angular/customers.php', {
            method: "GET"
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: responseJson.records
            })
        })
        .catch((err) => {
            Alert.alert('Error!', err);
        });
    }

    render() {
        return (
            <View>
            {
                this.state.data.map((item, key) => (
                    <Text key={key}>
                        {item.Country}
                    </Text>
                ))
            }   
            </View>
        );
    }
}