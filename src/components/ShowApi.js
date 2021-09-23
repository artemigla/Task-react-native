import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ShowApi = ({ currentListPost, search }) => {
    const showListPost = currentListPost.filter(({ title }) => {
        if (title.toLowerCase().includes(search.toLowerCase())) {
            return title;
        }
    }).map(({ title, id }) => <View key={id}><Text style={styles.lines}>{title}</Text></View>)

    return <View>{showListPost}</View>
}

const styles = StyleSheet.create({
    lines: {
        flex: 1,
        paddingLeft: 3,
        borderBottomWidth: 1,
    }
})