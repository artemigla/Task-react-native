import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, StatusBar } from 'react-native';
import MainPage from './src/components/MainPage';

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <StatusBar backgroundColor='gray' />
        <Text style={styles.container}>API</Text>
        <MainPage />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    fontSize: 30,
    textAlign: 'center',
  }
});