import React, { useState } from 'react'
import './SlideRange.css'
import { Form } from 'react-bootstrap'

function SlideRange({ style, currentWeather, setSurrentWeather }) {
  const [temp, setTemp] = useState(0)

  const changeTempHandler = event => {
    event.persist()
    const temperatureDegree = event.target.value
    setTemp(temperatureDegree)
    currentWeather.main.temp = temperatureDegree
    setSurrentWeather(prevState => ({ ...prevState, [prevState.main.temp]: temperatureDegree }
    ))
  }

  return (
    <Form className="slide-range" style={style}>
      <Form.Label className="text-center d-block" htmlFor="customRange">Отрегулируйте температуру и цвет заднего фона</Form.Label>
      <Form.Control type="range"
        className="custom-range"
        min="-30"
        max="40"
        step="1"
        value={temp}
        id="customRange"
        onChange={changeTempHandler}
      />
    </Form>
  )
}

export default SlideRange
