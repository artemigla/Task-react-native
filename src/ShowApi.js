import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { API } from './constants/Constants';
import axios from 'axios';

export const ShowApi = () => {

    const getApi = async () => {
        try {
            const res = await axios.get(API);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getApi();
    }, []);
    return (
        <SafeAreaView>
            <Text>Hello Android</Text>
        </SafeAreaView>
    );
}