import React from 'react';
import { Icon } from 'native-base';

export default class AddTask extends React.Component {
    static navigationOptions = () => ({
        tabBarLabel: 'Add task',
        tabBarIcon: () => <Icon type="Entypo" name="add-to-list" />
    });

    render() {
        return (
            null
        );
    }
}