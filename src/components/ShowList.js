import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, SafeAreaView, Modal, Image, View } from 'react-native';
import PropTypes from 'prop-types';

export const ShowList = ({ posts }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openWindow = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <TouchableOpacity onPress={openWindow}>
            <View style={styles.filmItem}>
                <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w200${posts.poster_path}` }} />
                <Text style={styles.title}>{posts.title} </Text>
                <Text style={styles.voteAverage}> {'Vote average '}{posts.vote_average} </Text>
            </View>
            <Modal
                animationType="slide"
                presentationStyle="formSheet"
                visible={modalVisible}
            >
                <SafeAreaView style={styles.modal}>
                    <Text style={styles.close} onPress={openWindow}>&times;</Text>
                    <Image style={styles.modalImage} source={{ uri: `https://image.tmdb.org/t/p/w200${posts.poster_path}` }} />
                    <Text style={styles.title}>{posts.title} </Text>
                    <Text> {posts.vote_average} </Text>
                    <Text> {posts.overview}</Text>
                </SafeAreaView>
            </Modal>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        marginTop: 3,
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    modal: {
        margin: 25
    },
    close: {
        fontSize: 35,
        textAlign: 'right',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    modalImage: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
        marginLeft: '23%',
        borderWidth: 1
    },
    filmItem: {
        alignItems: 'center',
        flexDirection: 'column',
        margin: 15,
    },
    voteAverage: {
        fontWeight: '100',
        color: 'black'
    }
});

ShowList.propTypes = {
    posts: PropTypes.object.isRequired
};