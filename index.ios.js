/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TextComponent from './application/components/Text';
import CounterComponent from './application/components/Counter';
import InitRouter from './application/components/InitRouter';
export default class AwsomeProject extends Component {
  render() {

   return (
     <InitRouter />
   ); 
    // return (
    //   <View>
    //   <TextComponent myText="School of net react native"></TextComponent>
    //   <CounterComponent myText="School of net react native"></CounterComponent>
    //   </View>
    // );
  }
}

const STYLES = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('AwsomeProject', () => AwsomeProject);
