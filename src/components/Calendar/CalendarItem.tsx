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
        borderBottomColor: colors.calendarItemBorder,
        borderBottomWidth: 1
    },
    timeView: {
        flex: 1,
        borderRightColor: colors.calendarItemBorder,
        borderRightWidth: 1,
        justifyContent: 'center'
    },
    tasksView: {
        flex: 4,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
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