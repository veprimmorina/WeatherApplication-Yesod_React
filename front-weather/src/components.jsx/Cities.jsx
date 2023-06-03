import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Cities({city, weather}) {
  const [image, setImage] = useState()

  const celciusConverter = (temp) => {
    return (temp-273.15).toFixed(0)
}
  useEffect(()=>{
    switch (weather?.weather[0].main) {
      case "Snow":
        setImage("https://ssl.gstatic.com/onebox/weather/64/snow.png")
        break;
      case "Clouds":
        setImage(
          "https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
        );
        break;
      case "Fog":
        setImage(
          "https://ssl.gstatic.com/onebox/weather/64/fog.png"
        );
        break;
      case "Rain":
        setImage(
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAZ9JREFUaN7tmdGNgzAMhhmBERiBEVjgJEbICIyQERiBTS4j5JU3RmCDnHNyq1wE1A4Jl0iJ9KtqVdv/R+xA1cYY05Ssos1XgCwBOGtd1x4kPfVNwhUFAI1rkDmRTgVyGwCMiQvjvkRWAGBoYJh/qc8JQAcAqCwAsO9NoBbQ5n1m38+g9ikAeQPgSjtofAJgTgTw0lg6wE5ppyAAmxj72CTWHB0Ae39/wPzvYEcDwKuuHzL+VkyAx81HA0h4ZKYHwNbZ/wvg4KFQcAFEJub/3Mk5ADJDgPcRWzKAVVc6wFQ6gKQA9EUD4H1AFdtCN3465jHEua8KUCzA1/c6gBbQxikI35cgZV8ZMae1ggAgUWuTgQxqIBqZnBhFjLmsFQognYRWI9HI7sRoxo6d1mIDQILOS0i9kosXNxBiPtYKAVBe0o7Yw27MQoT+WIsFYLfPSyiJRrQTY9uoJcSQapEBDoZpIxqZPCNTwOCe1uIAZDO4oQBbwOAK7uBya3EAFs7gHpwipMHl1uIADLi1XcNYGCOYMeRa9W/WClABKkAFiKofRnoGaQBkK9wAAAAASUVORK5CYII="
        );
        break;
      case "Clear":
        setImage(
          "//ssl.gstatic.com/onebox/weather/64/sunny.png"
        );
        break;
      case "Thunderstorm":
        setImage(
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')"
        );
        break;
      default:
        setImage(
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')"
        );
        break;
    }
},[weather])
  

  return (
    
    <>
    <Link to={'/weather/'+city} target='blank'>
  <div className="d-flex justify-content-between">
    <div className="col-md d-flex justify-content-between">
    <div>
        <img src={image} className='mt-4'/>
    </div>
    <div className="mt-4">
      <b>{city}</b>
      <p className="mt-3">{celciusConverter(weather?.main.temp)}ºC</p>
    </div>
  </div>


  
  </div>
  </Link>
  </>
  )

}

export default Cities
