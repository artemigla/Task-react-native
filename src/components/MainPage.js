import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, FlatList } from 'react-native';
import { PAGE } from '../constants/constants';
import { Pagination } from './Pagination';
import { ShowList } from './ShowList';
import { Api } from '../api/api';
import axios from 'axios';

const MainPage = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [openPosts, setOpenPosts] = useState(false);

    useEffect(() => {
        const getApi = async () => {
            try {
                //Здесь добавил логическое значениедля того, пока установлен флаг "true",
                setOpenPosts(!openPosts);

                //здесь загружаются посты. После того как посты загрузились...
                const res = await axios.get(Api);

                //...здесь переключится на флаг "false"

                //P.S.
                //Такую запись я прочитал на одном из форумов, но я не уверен, что обязателен этот флаг,
                //так как посты нормально загружаются и без него.
                setOpenPosts(false);
                setPosts(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        getApi();
    }, []);

    const lastPageIndex = currentPage * PAGE;
    const firstPageIndex = lastPageIndex - PAGE;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleChange = (event) => {
        setSearch(event);
    };

    const currentListPost = posts.slice(firstPageIndex, lastPageIndex).filter(({ title }) => {
        if (title.toLowerCase().includes(search.toLowerCase())) {
            return title;
        }
    });

    return (
        <View>
            <TextInput
                style={styles.fieldInput}
                placeholder='Search...'
                onChangeText={handleChange}
                value={search}
            />
            <FlatList
                data={currentListPost}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <ShowList posts={item} />
                )}
            />
            <Pagination
                page={PAGE}
                posts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    fieldInput: {
        width: '50%',
        fontSize: 17,
        margin: 0,
        borderWidth: 1,
        marginLeft: 'auto'
    }
});
export default MainPage;