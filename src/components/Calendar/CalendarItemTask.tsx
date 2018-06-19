import React from 'react';
import { material } from 'react-native-typography';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import * as colors from './../../styles/colors';

interface CalendarItemTasksProps {
    name: string;
    completed: boolean;
    multiple?: boolean;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#936644',
        marginRight: 6
    },
    containerMultiple: {
        backgroundColor: '#936644',
        margin: 8,
        width: '45%'
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
    const multiple = props.multiple;

    if (multiple) {
        return (
            <View style={styles.containerMultiple}>
                <Text style={task}>{props.name}</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text style={task}>{props.name}</Text>
            </View>
        );
    }
}