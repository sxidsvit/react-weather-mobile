import React, { useState } from 'react'
import './Search.css'
import { BASEURL } from '../../utils/constants'
import fetchWeather from '../../utils/fetchWeather'
import { Form, Button } from 'react-bootstrap'

function Search({ currentWeather, setSurrentWeather }) {
  const [search, setSearch] = useState('')

  const submitHandler = event => {
    event.preventDefault()
    const сity = search.trim()
    if (сity) {
      const api = `${BASEURL}&q=${сity}`
      fetchWeather(api, setSurrentWeather)
      setSearch('')
    } else {
      alert('Search field must not be empty')
    }
  }

  const changeInputHandler = event => {
    event.persist()
    setSearch(event.target.value)
  }

  return (
    <Form onSubmit={submitHandler} className="body">
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          className="form-control"
          id="q"
          name="q"
          value={search}
          onChange={changeInputHandler}
        />
      </Form.Group>
      <Button className="btn btn-color" type="submit"><i className="fa fa-question-circle"></i>&nbsp;Поиск</Button>
    </Form>

  )
}

export default Search
