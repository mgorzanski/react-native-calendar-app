import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import Today from './screens/Today';
import AddTask from './screens/AddTask';
import Calendar from './screens/Calendar';
import { tabNavigatorConfig, stackNavigatorConfig } from './../config/routes';

export default class App extends React.Component {
    render() {
        const TabNavigator = createBottomTabNavigator({
            Today,
            AddTask,
            Calendar
        }, tabNavigatorConfig);

        TabNavigator.navigationOptions = {
            title: 'Calendar'
        };

        const StackNavigator = createStackNavigator({
            Home: TabNavigator
        });

        return (
            <Root>
                <StackNavigator />
            </Root>
        );
    }
}