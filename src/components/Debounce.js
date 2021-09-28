import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const Debounce = ({ setSearch }) => {
    const debounce = (callback, delay) => {
        let timeOut;
        return function () {
            const fnCall = () => callback.apply(this, arguments);
            clearTimeout(timeOut);
            timeOut = setTimeout(fnCall, delay);
        };
    };

    const handlerInput = (e) => setSearch(e);

    return <TextInput style={styles.fieldInput} placeholder={'Search...'} onChangeText={debounce(handlerInput, 350)} />;
};

Debounce.propTypes = {
    setSearch: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    fieldInput: {
        width: '70%',
        fontSize: 17,
        margin: 0,
        borderWidth: 1,
        marginLeft: 'auto'
    },
});