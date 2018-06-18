import React from 'react';
import { material } from 'react-native-typography';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';

interface CalendarItemTimeProps {
    time: string;
};

const time = StyleSheet.flatten([
    material.button,
    {
        textAlign: 'center',
        fontSize: 20,
        padding: 13
    }
]);

export default function CalendarItemTime(props: CalendarItemTimeProps) {
    return (
        <Text style={time}>{props.time}</Text>
    );   
}