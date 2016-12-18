import React, { Component } from 'react';
import { Navigator } from 'react-native';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import TaskList from './TaskList';

export default class InitRouter extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Navigator
                initialRoute = {{name: 'Home', title: 'Home page'}}
                renderScene = { this.renderScene }
                />
        );
    }

    renderScene(route, navigator) {
        if (route.name == 'Home') {
            return (
                <HomePage 
                navigator = { navigator }
                {...route.passProps}
                title = 'Home'/>
            );
        }

        if (route.name == 'About') {
            return (
                <AboutPage 
                navigator = { navigator }
                {...route.passProps}
                title = 'About'/>
            );
        }

        if (route.name == 'Task') {
            return (
                <TaskList 
                navigator = { navigator }
                {...route.passProps}
                title = 'Tasklist'/>
            );
        }
    }
}