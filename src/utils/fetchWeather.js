function fetchWeather(api, setSurrentWeather) {
  fetch(api)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        setSurrentWeather(data)
      } else {
        alert('No weather information for your city')
      }
    }).catch(e => {
      alert('No weather information for your city')
    })
}

export default fetchWeather
