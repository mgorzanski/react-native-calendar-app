import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import * as colors from './../../styles/colors';
import { material } from 'react-native-typography';

interface CalendarItemProps {

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

const time = StyleSheet.flatten([
    material.button,
    {
        textAlign: 'center',
        fontSize: 20,
        padding: 13
    }
]);

const task = StyleSheet.flatten([
    material.button,
    {
        fontSize: 20,
        padding: 13
    }
]);

export default function CalendarItem(props: CalendarItemProps) {
    return (
        <View style={styles.container}>
            <View style={styles.timeView}>
                <Text style={time}>6.00</Text>
            </View>
            <View style={styles.tasksView}>
                <Text style={task}>Breakfast</Text>
            </View>
        </View>
    );
}