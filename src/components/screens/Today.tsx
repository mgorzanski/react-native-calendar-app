import React from 'react';
import { Icon, Content, Container } from 'native-base';
import { CalendarHeader, CalendarItem } from './../Calendar';

export default class Today extends React.Component {
    static navigationOptions = () => ({
        tabBarLabel: 'Today',
        tabBarIcon: () => <Icon type="MaterialIcons" name="today" />
    });

    render() {
        return (
            <Container>
                <Content>
                    <CalendarHeader title="Morning" />
                    <CalendarItem time="6.00" />
                    <CalendarHeader title="Lunch" />
                    <CalendarHeader title="Afternoon" />
                </Content>
            </Container>
        );
    }
}