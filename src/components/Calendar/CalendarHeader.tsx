import React from 'react';
import { human, materialColors } from 'react-native-typography';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import * as colors from './../../styles/colors';

interface CalendarHeaderProps {
    title: string;
    doNotDisplayTopBorder?: boolean;
};

const styles = StyleSheet.create({
    view: {
        padding: 4,
        borderBottomWidth: 4,
        borderBottomColor: '#000',
        borderTopWidth: 4,
        borderTopColor: '#000'
    },
    viewNoTopBorder: {
        padding: 4,
        borderBottomWidth: 4,
        borderBottomColor: '#000'
    }
});

const titleStyles = StyleSheet.flatten([
    human.headline,
    {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20
    }
]);

export default function CalendarHeader(props: CalendarHeaderProps) {
    let { title, doNotDisplayTopBorder } = props;
    title = title.toUpperCase();

    if (doNotDisplayTopBorder) {
        return (
            <View style={styles.viewNoTopBorder}>
                <Text style={titleStyles}>{title}</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.view}>
                <Text style={titleStyles}>{title}</Text>
            </View>
        );
    }
}