import React from 'react';
import { material } from 'react-native-typography';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import * as colors from './../../styles/colors';

interface CalendarItemTasksProps {
    name: string;
    completed: boolean;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.calendarItemTaskBackground,
        marginRight: 6
    }
});

const task = StyleSheet.flatten([
    material.button,
    {
        fontSize: 20,
        padding: 13
    }
]);

export default function CalendarItemTask(props: CalendarItemTasksProps) {
    return (
        <View style={styles.container}>
            <Text style={task}>{props.name}</Text>
        </View>
    );
}