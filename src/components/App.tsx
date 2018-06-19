import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import Today from './screens/Today';
import AddTask from './screens/AddTask';
import Calendar from './screens/Calendar';
import { tabNavigatorConfig, stackNavigatorConfig } from './../config/routes';
import PopupMenu from './PopupMenu';

export default class App extends React.Component {
    onPopupEvent(eventName, index) {
        if (eventName !== 'itemSelected') return;
        // if (index === 0)
        // else
    }

    render() {
        const TabNavigator = createBottomTabNavigator({
            Today,
            AddTask,
            Calendar
        }, tabNavigatorConfig);

        TabNavigator.navigationOptions = {
            title: 'Calendar',
            headerRight: (<PopupMenu actions={['Settings']} onPress={() => this.onPopupEvent} />),
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