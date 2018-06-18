import React from 'react';
import { Icon, Content, Container } from 'native-base';
import { CalendarHeader, CalendarItem, CalendarItemTask } from './../Calendar';

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
                    <CalendarItem time="6.00">
                        <CalendarItemTask name="Breakfast" completed={false} />
                        <CalendarItemTask name="Some streches" completed={false} />
                    </CalendarItem>
                    <CalendarHeader title="Lunch" />
                    <CalendarHeader title="Afternoon" />
                    <CalendarItem time="1.00">
                        <CalendarItemTask name="Deep work" completed={false} />
                    </CalendarItem>
                </Content>
            </Container>
        );
    }
}