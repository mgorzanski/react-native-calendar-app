import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import * as colors from './../../styles/colors';
import CalendarItemTime from './CalendarItemTime';

interface CalendarItemProps {
    time: string;
    children?: ReactNode;
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    timeView: {
        flex: 1,
        borderRightColor: colors.calendarItemBorder,
        borderRightWidth: 1
    },
    tasksView: {
        flex: 4,
        display: 'flex',
        flexDirection: 'row',
        margin: 6
    },
    oneTaskView: {
        flex: 4,
        backgroundColor: colors.calendarItemTaskBackground
    }
});

export default function CalendarItem(props: CalendarItemProps) {
    const numberOfTasks = React.Children.count(props.children);

    return (
        <View style={styles.container}>
            <View style={styles.timeView}>
                <CalendarItemTime time={props.time} />
            </View>
            { numberOfTasks === 1 ? (
                <View style={styles.oneTaskView}>{props.children}</View>
            ) : (
                <View style={styles.tasksView}>{props.children}</View>
            ) }
        </View>
    );
}