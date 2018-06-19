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
                    <CalendarHeader title="Morning" doNotDisplayTopBorder={true} />
                    <CalendarItem time="10.00">
                        <CalendarItemTask name="Get Groceries" completed={false} />
                    </CalendarItem>
                    <CalendarItem time="10.30">
                        <CalendarItemTask name="Call Mom" completed={false} />
                    </CalendarItem>
                    <CalendarItem time="11.00">
                        <CalendarItemTask name="Get Dentist Appointment" completed={false} />
                    </CalendarItem>
                    <CalendarItem time="11.30">
                        <CalendarItemTask name="Pay Electricity Bill" completed={false} multiple={true} />
                        <CalendarItemTask name="Email team for updates" completed={false} multiple={true} />
                    </CalendarItem>
                    <CalendarItem time="12.00">
                        <CalendarItemTask name="Send out meeting request" completed={false} />
                    </CalendarItem>
                    <CalendarItem time="12.30">
                        <CalendarItemTask name="Make a presentation for next meeting" completed={false} />
                    </CalendarItem>
                    <CalendarHeader title="Lunch" />
                    <CalendarHeader title="Afternoon" doNotDisplayTopBorder={true} />
                    <CalendarItem time="2.00">
                        <CalendarItemTask name="Book conference room" completed={false} />
                    </CalendarItem>
                    <CalendarItem time="2.30">
                        <CalendarItemTask name="Create meeting agenda" completed={false} />
                    </CalendarItem>
                    <CalendarItem time="3.00">
                        <CalendarItemTask name="Answer tech team queries in call" completed={false} />
                    </CalendarItem>
                    <CalendarItem time="3.30">
                        <CalendarItemTask name="Update project plan" completed={false} />
                    </CalendarItem>
                    <CalendarItem time="7.00">
                        <CalendarItemTask name="Verify project budjet" completed={false} />
                    </CalendarItem>
                </Content>
            </Container>
        );
    }
}