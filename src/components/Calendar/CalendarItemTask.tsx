import React from 'react';
import { material } from 'react-native-typography';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';

interface CalendarItemTasksProps {
    name: string;
    completed: boolean;
};

const task = StyleSheet.flatten([
    material.button,
    {
        fontSize: 20,
        padding: 13
    }
]);

export default function CalendarItemTask(props: CalendarItemTasksProps) {
    return (
        <View>
            <Text style={task}>{props.name}</Text>
        </View>
    );
}