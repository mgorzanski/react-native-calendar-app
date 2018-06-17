import React from 'react';
import { human, materialColors } from 'react-native-typography';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';

interface CalendarHeaderProps {
    title: string;
};

const styles = StyleSheet.create({
    view: {
        padding: 4,
        backgroundColor: '#c4c4c4',
    }
});

const titleStyles = StyleSheet.flatten([
    human.headline,
    {
        color: materialColors.blackPrimary
    }
]);

export default function CalendarHeader(props: CalendarHeaderProps) {
    let { title } = props;
    title = title.toUpperCase();

    return (
        <View style={styles.view}>
            <Text style={titleStyles}>{title}</Text>
        </View>
    );
}