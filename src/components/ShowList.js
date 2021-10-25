import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, SafeAreaView, Modal, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

export const ShowList = ({ posts }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openWindow = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <TouchableOpacity onPress={openWindow}>
            <ScrollView>
                <View>
                    <Text style={styles.title}>{posts.title} </Text>
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                presentationStyle="formSheet"
                visible={modalVisible}
            >
                <SafeAreaView style={styles.modal}>
                    <Text style={styles.close} onPress={openWindow}>&times;</Text>
                    <Text style={styles.title}>{posts.body} </Text>
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
        justifyContent: 'center',
        borderBottomWidth: 1
    },
    modal: {
        margin: 25
    },
    close: {
        fontSize: 35,
        textAlign: 'right',
    },
});

ShowList.propTypes = {
    posts: PropTypes.object.isRequired
};