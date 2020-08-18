import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container, Image } from 'react-bootstrap';
import { bgcolor } from './src/utils/bgcolor'
import useMyLoacationWeather from './src/utils/useMyLoacationWeather'
import Search from './src/components/Search/Search';
// import 'bootstrap/dist/css/bootstrap.min.css';
import SlideRange from './src/components/SlideRange/SlideRange'

function App() {

  const [currentWeather, setSurrentWeather] = useState(null)

  useMyLoacationWeather(setSurrentWeather)

  let text = JSON.stringify(currentWeather?.coord)
  let currentTemp = currentWeather?.main?.temp

  return (
    <View style={styles.container}>
      <Search
        currentWeather={currentWeather}
        setSurrentWeather={setSurrentWeather}
      />
      <Text>Current coordinates: {text}</Text>
      <Text>Current temperature: {currentTemp}</Text>
      <SlideRange
        style={{
          backgroundColor: bgcolor(currentTemp)
        }}
        currentWeather={currentWeather}
        setSurrentWeather={setSurrentWeather}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
