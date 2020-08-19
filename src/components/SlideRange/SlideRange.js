import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Slider from '@react-native-community/slider'
import { THEME } from '../../utils/constants'

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
      <Text style={{ ...styles.sliderText, ...style }}>
        Отрегулируйте температуру и цвет заднего фона
      </Text>
      <Slider
        minimumValue={-30}
        maximumValue={40}
        maximumTrackTintColor={THEME.MAIN_COLOR}
        thumbTintColor={THEME.MAIN_COLOR}
        step={1}
        value={temp}
        onValueChange={changeTempHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  sliderText: {
    padding: 20,
    fontFamily: 'roboto-bold',
    color: THEME.MAIN_COLOR,
    textAlign: 'center'
  }
})


export default SlideRange
