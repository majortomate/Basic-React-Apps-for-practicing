import React, { useState } from 'react';

function RectangleArea() {

  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  const [calculate, setCalculate] = useState()

  const handleWidth = (e) =>{
    setWidth(e.target.value)
  }
  const handleHeight = (e) =>{
    setHeight(e.target.value)
  }
  const handleCalculate = () =>{
    setCalculate(width * height)
  }

  return ( 
    <div>
      <h2>Rectangle Area Calculator</h2>
      <p>This app allows you to calculate the area of a rectangle</p>

      <input type="number" name="width" placeholder='type the width' onChange={handleWidth}/>
      <input type="number" name="height" placeholder='type the height' onChange={handleHeight}/>
      <button onClick={handleCalculate}>Calculate</button>

      {
        calculate ? <p>The rectangle Area is: {calculate} </p> : null
      }
      
    </div>
   );
}

export default RectangleArea;
