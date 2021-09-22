import React from "react";
import { View, Button, StyleSheet } from 'react-native';

export const Pagination = ({ page, posts, paginate }) => {

    const numberOfPages = [];
    for (let i = 1; i <= Math.ceil(posts / page); i++) {
        numberOfPages.push(i);
    }

    const handlerButton = numberOfPages.map((page, index) => (
        <View key={index} style={styles.wrapper} >
            <Button style={styles.page} onPress={() => paginate(page)} title={`${page}`} />
            {console.log(page)}
        </View>
    ));

    return (
        < View style={styles.wrapper}>
            {handlerButton}
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        color: 'white',
    },
    wrapper: {
        marginTop: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }
})