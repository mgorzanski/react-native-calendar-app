import React from 'react';
import { Icon } from 'native-base';

export default class Today extends React.Component {
    static navigationOptions = () => ({
        tabBarLabel: 'Today',
        tabBarIcon: () => <Icon type="MaterialIcons" name="today" />
    });

    render() {
        return (
            null
        );
    }
}