import React from 'react'
import './Weather.css'
import SearchBox from './SearchBox/SearchBox'
import { useState } from 'react'
function Weather() {
  const apiKey="6aaffefcd2897eec1631bc4c79ffd80d"
const [weatherDate,setWeatherData]=useState([{}]);

  return (
    <div className='WeatherApp'>
        <SearchBox />
    </div>
  )
}

export default Weather