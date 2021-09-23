import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import MainPage from './src/components/MainPage';

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <Text style={styles.container}>API</Text>
        <ScrollView>
          <MainPage />
        </ScrollView>
      </SafeAreaView>

    </View>
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