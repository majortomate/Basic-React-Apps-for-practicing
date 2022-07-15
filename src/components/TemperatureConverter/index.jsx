import React, { useState } from 'react';

function TemperatureConverter() {

  const [type, setType] = useState('centigrades-fahrenheit')
  const [temperature, setTemperature] = useState("")
  const [convert, setConvert] = useState()

  const handlerType = (e) =>{
    return(
      setType(e.target.value)
    )
  }
  const handlerTemperature = (e) =>{
    return(
      setTemperature(e.target.value)
    )
  }
  const handlerConvert = () =>{
    return(
      type === 'centigrades-fahrenheit' ? setConvert(temperature * (9/5) + 32) : setConvert((temperature -32) / 1.8)
    )
  }

  return ( 
    <div>
      <h2>Temperature Converter</h2>
      <p>This app allows you to convert centigrade to fahrenheit and vice versa</p>
      <select name="switcher" onChange={handlerType}>
        <option value="centigrades-fahrenheit">Centigrades to Fahrenheit</option>
        <option value="fahrenheit-centigrades">Fahrenheit to Centigrades</option>
      </select>
      <input type="number" name='temperature' placeholder='Type the temperature' onChange={handlerTemperature}/>
      <button onClick={handlerConvert}>Convert</button>
      {
        convert ? <p>Your converted temperature is: {convert}</p> : null
      }
      
    </div>
   );
}

export default TemperatureConverter;
