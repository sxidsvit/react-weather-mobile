import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { Container, Image } from 'react-bootstrap';
import { bgcolor } from './src/utils/bgcolor'
import { BASEURL } from './src/utils/constants'
import fetchWeather from './src/utils/fetchWeather';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Search from './src/components/Search/Search';
// import SlideRange from './src/components/SlideRange/SlideRange'

function App() {

  const [currentWeather, setSurrentWeather] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMsg(
        'Oops, this will not work in an Android emulator. Try it on your device!'
      );
    } else {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        const { latitude: lat, longitude: lon } = location.coords
        const api = `${BASEURL}&lat=${lat}&lon=${lon}`
        fetchWeather(api, setSurrentWeather)
      })();
    }
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (currentWeather) {
    text = JSON.stringify(currentWeather?.coord)
    console.log('text: ', text);
  }
  // // Air temperature at a given time
  let currentTemp = currentWeather?.main?.temp
  console.log('currentTemp: ', currentTemp);

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
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
