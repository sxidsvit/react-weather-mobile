------------Установка Expo.Создание проекта и его запуск---------------------------

  Expo - фреймворк для React Native.
Предоставляет удобный набор инструментов(фитчей) для быстрой разработки.
Expo работает поверх React Native

npm install expo - cli--global
expo--version
expo init myNewProject(blank, ...)
cd myNewProject
expo start

expo r - c - очистка кеша

После запуска приложения командой npm start, переходим в dashboard(панель управления)
=======================================================================================

Bootstrap style library for React Native: react-native-bootstrap-styles
https://www.npmjs.com/package/react-native-bootstrap-styles


Original class names are transformed from "dashed" to "camelcase" format, for example: text-center to textCenter and my-sm-4 to 'mySm4'. Also all the constants (variables in terms of Bootstrap) could be accessible in templates. It helps to make custom tweaks preserving styling guidelines, for example: {fontSize: 10 * FONT_SIZE_BASE}.


Можно подключить плагин eslint-config-react-native-wcandillon
для кастомной конефигурации React Native
https://www.npmjs.com/package/eslint-config-react-native-wcandillon

npm i eslint-config-react-native-wcandillon

 .eslintrc:
{
  "extends": "react-native-wcandillon",
}

=======================================================================================

expo install expo-location - allows reading geolocation information from the device
https://docs.expo.io/versions/latest/sdk/location/#locationgetcurrentpositionasyncoptions

import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMsg(
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      );
    } else {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
      })();
    }
  },[]);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location.coords);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});


--------------------------------------------------------------------------------------
package.json
{
  "dependencies": {
    "expo-constants": "^9.1.1",
    "expo-location": "^8.3.0",
  }
}
=======================================================================================

Slider - React Native component used to select a single value from a range of values
https://github.com/react-native-community/react-native-slider

npm install @react-native-community/slider --save

=======================================================================================

TextInput - a foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.

========================================================================================

npm i @expo/vector-icons

Документация: https://docs.expo.io/guides/icons/

Список иконок с поиском: https://icons.expo.fyi/

========================================================================================

Image
A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.

Стилизация изображения
https://docs.expo.io/versions/latest/react-native/image-style-props/#props
