import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ScrollView, StyleSheet } from 'react-native';
import { API, PAGE } from './constants/Constants';
import axios from 'axios';

export const ShowApi = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const getApi = async () => {
        try {
            const res = await axios.get(API);
            setPosts(res.data);

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getApi();
    }, []);

    const lastPageIndex = currentPage * PAGE;
    const firstPageIndex = lastPageIndex - PAGE;
    const currentListPost = posts.slice(firstPageIndex, lastPageIndex).map(({ id, title }) => (
        <Text style={styles.body} key={id}>
            <Text style={styles.lines}>{title}</Text>
        </Text>
    ));
    return (
        <SafeAreaView>
            <ScrollView>{currentListPost}</ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        borderBottomWidth: 1,
        fontSize: 17
    },
    lines: {
        flex: 1,
    }
})