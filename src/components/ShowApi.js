import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import PropTypes from 'prop-types';
export const ShowApi = ({ posts }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openWindow = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <TouchableOpacity onPress={openWindow}>
            <Text style={styles.title}>{'[' + posts.id + '] '}{posts.title} </Text>
            <Modal
                animationType="slide"
                presentationStyle="formSheet"
                visible={modalVisible}
            >
                <SafeAreaView style={styles.modal}>
                    <Text style={styles.close} onPress={openWindow}>&times;</Text>
                    <Text>
                        {'[' + posts.id + ']' + ' '} {posts.body}
                    </Text>
                </SafeAreaView>
            </Modal>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: '500',
        marginTop: 3,
        borderWidth: 1
    },
    modal: {
        margin: 25
    },
    close: {
        fontSize: 35,
        textAlign: 'right',
    }
});

ShowApi.propTypes = {
    posts: PropTypes.object.isRequired
};