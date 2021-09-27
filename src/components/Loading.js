import React from 'react';
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export const Loading = () => {
    return (
        <Spinner visible={true} textContent={'Loading...'} textStyle={styles.loading} />
    );
};

const styles = StyleSheet.create({
    loading: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});