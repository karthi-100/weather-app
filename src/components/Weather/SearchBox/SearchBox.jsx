import React from 'react'
import './SearchBox.css'
import { useState } from 'react'
function SearchBox() {
    const [text,setText]=useState("")
    const handleChange=()=>{
        setText(e.target.value)
    }
    const handleClick=(e)=>{
        e.preventDefault();
        const apiKey="6aaffefcd2897eec1631bc4c79ffd80d"
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
       
    }
  return (
    <div className='s-value'>
        
        <input type="text" value={text} className='s-label' onChange={handleChange} />
        <input type="button" value="submit" onClick={handleClick} />
        
    </div>
  )
}

export default SearchBox