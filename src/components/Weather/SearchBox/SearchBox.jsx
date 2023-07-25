import React from 'react'
import './SearchBox.css'
import { useState } from 'react'
import WeatherContent from './WeatherContent/WeatherContent'

function SearchBox() {
    const [city,setCity]=useState("")
    const [weather,setWeather]=useState([{}])
    const handleChange=(e)=>{
        setCity(e.target.value)
    }
    const handleClick=(e)=>{
        e.preventDefault();
        const apiKey="6aaffefcd2897eec1631bc4c79ffd80d"
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(res=>res.json()).then(
          data=>{setWeather(data)
          console.log(data);
          setCity("")
          }
        )
        
    }
  return (
    <div className='s-value'>
        <div>
        <input type="text" value={city} className='s-label' onChange={handleChange} />
        <input type="button" value="submit" onClick={handleClick} />
        </div>
        <div className="content">
          {typeof weather.main==='undefined'?<div className='content s-value'>Enter a valid city name</div>:<WeatherContent className="content" weather={weather}/>}
        </div>
    </div>
  )
}

export default SearchBox