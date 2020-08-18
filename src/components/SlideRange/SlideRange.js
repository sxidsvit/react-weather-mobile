import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Slider from '@react-native-community/slider'

function SlideRange({ style, currentWeather, setSurrentWeather }) {
  const [temp, setTemp] = useState(0)

  const changeTempHandler = value => {
    const sliderTtemperature = value
    setTemp(sliderTtemperature)
    currentWeather.main.temp = sliderTtemperature
    setSurrentWeather(prevState => ({ ...prevState, [prevState.main.temp]: sliderTtemperature }
    ))
  }

  return (
    <View>
      <Text style={{ ...styles.slideRange, ...styles.sliderText }}>
        Отрегулируйте температуру и цвет заднего фона
      </Text>
      <Slider
        minimumValue={-30}
        maximumValue={40}
        maximumTrackTintColor={'#c1593f'}
        thumbTintColor={'#c1593f'}
        step={1}
        value={temp}
        onValueChange={changeTempHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  slideRange: {
    padding: 20,
    color: '#c1593f',
    fontWeight: '700',
  },
  sliderText: {
    padding: 20,
    textAlign: 'center'
  }
})


export default SlideRange
