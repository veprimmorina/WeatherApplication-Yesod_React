import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { useApiContext } from "./ApiContext";
import axios from "axios";

const AirQuality = ({location}) => {

  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth()+1).padStart(2,0)
  const day = String(currentDate.getDate()).padStart(2,0)
  const formattedDate = `${year}-${month}-${day}`;
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const sunset = require('../image/sunset-removebg-preview.png')
  const sunrise = require('../image/sunrise-removebg-preview.png')
  const [data, setData] = useState()
  const [weatherDuringTheDay,setWeatherDuringTheDay] = useState()
  const celciusConverter = (temp) => {
    return (temp-273.15).toFixed(0)
  }
  useEffect(()=>{
    axios.get("http://localhost:3000/weather-tomorrow/" + location).then(response => {
    setData(response.data)
    const nextHoursWeather = [];

    for (var j = 0; j < response.data.list.length; j++) {
      var itemDate = response.data.list[j].dt_txt.split(' ')[0];
      var itemTime = response.data.list[j].dt_txt.split(' ')[1];
      var firstArgumentItemTime = itemTime.split(":")[0];
      if (itemDate === formattedDate && hours!==firstArgumentItemTime) {
        nextHoursWeather.push({hour: itemTime, temperature: response.data.list[j].main.temp})
      
      }
  
    }
    console.log(nextHoursWeather)
  setWeatherDuringTheDay(nextHoursWeather)
  })
  },[location])
  return (
    <div>
  <div className="container-fluid">
    <div className="row bg-cover grid-cols-3 gap-4 p-20 text-center mt-16">
      {weatherDuringTheDay?.map((weather) => (
        <div className="col-4 col-md-4 col-lg-4 col-xl-4">
          <div className="card  bg-opacity-40 shadow-lg  d-flex flex-column justify-content-center">
            <b className="text-dark">{weather.hour}</b>
            <span className="text-dark mt-2">
              {celciusConverter(weather.temperature)} C
            </span>
          </div>
        </div>
      ))}
      <i className="ri-information-fill ri-xl text-gray-200 position-absolute start-0 end-0 me-10"></i>
      <div className="col-12">
        <hr className="border-top border-gray-300" />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-8 col-xl-8">
        <div className="row">
          <div className="col-6 col-md-6 col-lg-6 col-xl-6">
          <img src={sunrise} />
            <h1 className="text-2xl text-gray-100">Sunrise</h1>
          </div>
          <div className="col-6 col-md-6 col-lg-6 col-xl-6 ">
            <img src={sunset} width={80} className="mt-5"/>
            <h1 className="text-2xl text-gray-100 mt-5 pt-2">Sunset</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-6 col-lg-6 col-xl-6">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="text-center position-relative bottom-28">
              <span className="text-gray-200"></span>
              <span className="text-gray-200"></span>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-6 col-xl-6">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "10%" }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="10"
              ></div>
            </div>
            <div className="text-center position-relative bottom-28">
              <span className="text-gray-200"></span>
              <span className="text-gray-200"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default AirQuality;
