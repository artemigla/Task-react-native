import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ShowApi } from './src/ShowApi.js';

export default function App() {
  return (
    <SafeAreaView>
        <ShowApi />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
