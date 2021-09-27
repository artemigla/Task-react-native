import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, StatusBar } from 'react-native';
import MainPage from './src/components/MainPage';

/**
 * Программу тестировал/проверял на работоспособность на Xiaomi, 
 * так как симуляторы от Android Studio, компьютер у меня очень долго загружает (20-30 минут). 
 * Пришлось установить на телефон Expo Go, сканировать QR код из браузера 
 * и следить за изменением программы таким способом.
 */
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
    textAlign: 'center'
  },
});