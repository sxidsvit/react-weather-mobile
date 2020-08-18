import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import { BASEURL } from './constants'
import fetchWeather from './fetchWeather';

const useMyLoacationWeather = (setSurrentWeather) => {

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

}

export default useMyLoacationWeather
