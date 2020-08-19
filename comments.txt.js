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


========================================================================================

Alert
Launches an alert dialog with the specified title and message.
Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button

https://docs.expo.io/versions/latest/react-native/alert/

========================================================================================

expo-font
Load fonts at runtime and use them in React Native components
npm i expo-font

========================================================================================

AppLoading
https://docs.expo.io/versions/latest/sdk/app-loading/

A React component that tells Expo to keep the app loading screen open if it is the first and only component rendered in your app. Unless autoHideSplash prop is set to false, the loading screen will disappear and your app will be visible when the component is removed.
This is incredibly useful to let you download and cache fonts, logos, icon images and other assets that you want to be sure the user has on their device for an optimal experience before rendering and they start using the app

========================================================================================

Preloader
react-native-preload

ActivityIndicator - Displays a circular loading indicator
https://docs.expo.io/versions/latest/react-native/activityindicator/


========================================================================================

Dimensions
https://docs.expo.io/versions/latest/react-native/dimensions/

useWindowDimensions is the preffered API for React components. Unlike Dimensions, it updates as the window's dimensions update. This works nicely with the React paradigm

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const windowWidth = useWindowDimensions().width;
const windowHeight = useWindowDimensions().height;

========================================================================================

Constants
https://docs.expo.io/versions/latest/sdk/constants/

expo-constants provides system information that remains constant throughout the lifetime of your app's install

========================================================================================

Configuration with app.json
https://docs.expo.io/workflow/configuration/
https://docs.expo.io/versions/latest/config/app/
https://docs.expo.io/guides/splash-screens/


========================================================================================

Публикуем приложение в наш expo dashboard:
выполняем команду expo publish

https://expo.io/@sxidsvit/react-weather-mobile
With an Android phone, you can scan this QR code with your Expo mobile app to load this project immediately.

=========================================================================================

Билд и деплой нашего мобильного приложения

https://docs.expo.io/distribution/building-standalone-apps/

When building for android you can choose to build APK (expo build:android -t apk) or Android App Bundle (expo build:android -t app-bundle). App bundles are recommended, but you have to make sure the Google Play App Signing is enabled for your project, you can read more about it here.

(1) Выполняем команду: expo build:android -t app-bundle

(2) You can monitor the build at
 https://expo.io/dashboard/sxidsvit/builds/b4c867ce-eb9d-4a18-bcc9-b88f3c4a2712

(3) Successfully built standalone app: https://expo.io/artifacts/1cae8b15-27d3-4de6-b6e0-dab24aaeb572

(4) Нужно получить Keystore credentials.
Для этого выполняем команду: expo fetch:android:keystore

Keystore credentials
  Keystore password: f61ca4f62e684dc69f8f02c939247b72
  Key alias:         QHN4aWRzdml0L3JlYWN0LXdlYXRoZXItbW9iaWxl
  Key password:      0783ed25a3ab484bae2e5634d3b98bab

  Path to Keystore:  D:\My projects\react-weather-mobile\react-weather-mobile.jks

(5) Теперь можно заливать приложение на Google Play

Для этого выполняем команду: expo upload:android
