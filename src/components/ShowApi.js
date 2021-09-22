import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ScrollView, StyleSheet, View } from 'react-native';
import { API, PAGE } from '../constants/Constants';
import axios from 'axios';
import { Pagination } from './Pagination';

export const ShowApi = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [openPosts, setOpenPosts] = useState(false);
    
    const getApi = async () => {
        try {
            setOpenPosts(!openPosts);
            const res = await axios.get(API);
            setOpenPosts(false);
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

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    const currentListPost = posts.slice(firstPageIndex, lastPageIndex).map(({ id, title }) => (
        <Text style={styles.body} key={id}>
            <Text style={styles.lines}>{id} {" "} {title}</Text>
        </Text>
    ));
    return (
        <SafeAreaView>
            <ScrollView>
                <View>{currentListPost}</View>
                <Pagination page={PAGE} posts={posts.length} paginate={paginate} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        borderBottomWidth: 1,
        fontSize: 10,
    },
    lines: {
        flex: 1,
    }
})