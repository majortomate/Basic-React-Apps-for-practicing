import React, { useState } from 'react';

const ANIMAL_IMAGES = {
  img1: "https://purr.objects-us-east-1.dream.io/i/img_6184.jpg",
  img2: "https://purr.objects-us-east-1.dream.io/i/wPD1T.jpg",
  img3: "https://purr.objects-us-east-1.dream.io/i/photo_2017-05-13_14-24-03.jpg",
}


function ShowImage() {

  const [image, setImage] = useState()

  const handleImage = (e) =>{
    for (const property in ANIMAL_IMAGES) {
      if (property === e.target.innerHTML){
        setImage(ANIMAL_IMAGES[property])
      }
    }
}
  return (
    <div>
      <h2>Show Images</h2>
      <p>This app allows you to show an image by clicking the buttons</p>

      <button onClick={handleImage}>img1</button>
      <button onClick={handleImage}>img2</button>
      <button onClick={handleImage}>img3</button>
      <div>
        <img width="300" height="auto" src={image} alt="" />
      </div>
    </div>
  );
}

export default ShowImage
