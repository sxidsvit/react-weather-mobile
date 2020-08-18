import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Search from './src/components/Search/Search';
import SlideRange from './src/components/SlideRange/SlideRange'
import useMyLoacationWeather from './src/utils/useMyLoacationWeather'
import { bgcolor } from './src/utils/bgcolor'

function App() {

  const [currentWeather, setSurrentWeather] = useState(null)

  // Information about the weather in the current location of the device
  useMyLoacationWeather(setSurrentWeather)

  let currentTemp = currentWeather?.main?.temp
  let icomUri = `http://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`

  return (
    <View style={{ ...styles.containerGlobal, backgroundColor: bgcolor(currentTemp) }}>
      <Search
        currentWeather={currentWeather}
        setSurrentWeather={setSurrentWeather}
      />
      <View
        style={styles.containerWeather}>
        {currentWeather &&
          <Image style={styles.imageIcon} source={{ uri: icomUri }} />
        }
        <Text style={styles.weather}>
          {currentWeather?.name},&nbsp;
          {currentWeather?.weather[0].description},&nbsp;
          {Math.round(currentWeather?.main.temp * 10) / 10}C
        </Text>
      </View>
      <SlideRange
        currentWeather={currentWeather}
        setSurrentWeather={setSurrentWeather}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    marginTop: 30,
    paddingTop: 60,
    paddingBottom: 120,
    paddingHorizontal: 20
  },
  containerWeather: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  weather: {
    color: '#c1593f',
    fontWeight: '700',
    fontSize: 20,
    textAlign: "center"
  },
  imageIcon: {
    width: 150,
    height: 150,
  }
});

export default App;
