import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { PAGE } from '../constants/constants';
import { Pagination } from './Pagination';
import { ShowList } from './ShowList';
import { Loading } from './Loading';
import { Api } from '../api/api';
import axios from 'axios';

const MainPage = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getApi = async () => {
            try {
                setLoading(!loading);
                const res = await axios.get(Api);
                setPosts(res.data.results);
                setLoading(loading);
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
            {loading ? <Loading /> :
                <SafeAreaView style={styles.wrapper}>
                    <FlatList
                        numColumns={1}
                        contentContainerStyle={{ paddingBottom: 100 }}
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
                </SafeAreaView>}
        </View>
    );
};

const styles = StyleSheet.create({
    fieldInput: {
        width: '70%',
        fontSize: 17,
        margin: 0,
        borderWidth: 1,
        marginLeft: 'auto'
    },
    wrapper: {
        resizeMode: 'contain',
    }
});
export default MainPage;