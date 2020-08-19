import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Platform, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import Search from '../Search/Search'
import SlideRange from '../SlideRange/SlideRange'
import useMyLoacationWeather from '../../utils/useMyLoacationWeather'
import { bgcolor } from '../../utils/bgcolor'
import { THEME } from '../../utils/constants'


function MainLayout() {

  const [currentWeather, setSurrentWeather] = useState(null)

  // Information about the weather in the current location of the device
  useMyLoacationWeather(setSurrentWeather)

  let currentTemp = currentWeather?.main?.temp
  let icomUri = `http://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`

  if (!currentWeather) {
    return (
      <View style={{ ...styles.containerGlobal, ...styles.center }}>
        <ActivityIndicator color={THEME.MAIN_COLOR} size='large' />
      </View >
    )
  }


  return (
    <SafeAreaView style={{ ...styles.containerGlobal, backgroundColor: bgcolor(currentTemp) }} >
      <ScrollView >
        <View >
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    marginTop: Constants.statusBarHeight,
    paddingTop: 60,
    paddingBottom: 0,
    paddingHorizontal: 20
  },
  containerWeather: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  weather: {
    color: THEME.MAIN_COLOR,
    fontFamily: 'roboto-bold',
    fontSize: 20,
    textAlign: "center"
  },
  imageIcon: {
    width: 150,
    height: 150,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.BACGROUND_DEFAULT
  }
});

export default MainLayout
