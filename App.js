import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { ShowApi } from './src/ShowApi.js';

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.container}>API</Text>
      <ShowApi />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 21,
  }
});