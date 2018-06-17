import React from 'react';
import { Icon } from 'native-base';

export default class Calendar extends React.Component {
    static navigationOptions = () => ({
        tabBarLabel: 'Calendar',
        tabBarIcon: () => <Icon type="MaterialCommunityIcons" name="calendar-range" />
    });

    render() {
        return (
            null
        );
    }
}