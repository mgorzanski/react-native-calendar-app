import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import * as colors from './../../styles/colors';
import { material } from 'react-native-typography';
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
        backgroundColor: colors.calendarItemTaskBackground
    }
});

export default function CalendarItem(props: CalendarItemProps) {
    return (
        <View style={styles.container}>
            <View style={styles.timeView}>
                <CalendarItemTime time={props.time} />
            </View>
            <View style={styles.tasksView}>
                {props.children}
            </View>
        </View>
    );
}