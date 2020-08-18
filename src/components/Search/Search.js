import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { BASEURL } from '../../utils/constants'
import fetchWeather from '../../utils/fetchWeather'

function Search({ currentWeather, setSurrentWeather }) {
  const [search, setSearch] = useState('')

  const submitHandler = event => {
    const сity = search.trim()
    if (сity) {
      const api = `${BASEURL}&q=${сity}`
      fetchWeather(api, setSurrentWeather)
      setSearch('')
    } else {
      alert('Search field must not be empty')
    }
  }

  return (
    <View style={styles.block}  >
      <TextInput
        style={styles.input}
        placeholder='Название города ...'
        value={search}
        keyboardType='default'
        autoCorrect={false}
        autoCapitalize='characters'
        onChangeText={setSearch}
      />
      <AntDesign.Button
        name='search1'
        backgroundColor="#c1593f"
        onPress={submitHandler}>
        Поиск
      </AntDesign.Button>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    padding: 10,
    fontSize: 18,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#c1593f',
    color: "#c1593f",
    fontWeight: '700'
  }
})


export default Search
