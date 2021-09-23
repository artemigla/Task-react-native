import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { API, PAGE } from '../constants/Constants';
import axios from 'axios';
import { ShowApi } from './ShowApi';
import { Pagination } from './Pagination';

const MainPage = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [openPosts, setOpenPosts] = useState(false);

    const getApi = async () => {
        try {
            //Здесь добавил логическое значениедля того, пока установлен флаг "true",
            setOpenPosts(!openPosts);

            //здесь загружаются посты. После того как посты загрузились...
            const res = await axios.get(API);

            //...здесь переключится на флаг "false"

            //P.S.
            //Такую запись я прочитал на одном из форумов, но я не уверен, что обязателен этот флаг,
            //так как посты нормально загружаются и без него.
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

    const currentListPost = posts.slice(firstPageIndex, lastPageIndex);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleChange = (event) => {
        setSearch(event);
    }
    return (
        <View>
            <TextInput
            style={styles.fieldInput}
                placeholder='Search...'
                onChangeText={handleChange}
                value={search}
            />
            <View style={styles.wrapper}>
                <ShowApi currentListPost={currentListPost} search={search} />
            </View>
            <Pagination page={PAGE} posts={posts.length} paginate={paginate} />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        margin: 1
    },
    fieldInput: {
        width: '50%',
        fontSize: 17,
        margin: 0,
        borderWidth: 1
    }
})

export default MainPage;