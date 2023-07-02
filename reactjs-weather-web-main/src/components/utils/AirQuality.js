import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { useApiContext } from "./ApiContext";
import axios from "axios";

const AirQuality = ({location, sunris, sunse, polution}) => {

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

  const sunConverter = (sun) => {
    const date = new Date(sun * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();

const formattedTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes;

    return formattedTime;
  }

  const celciusConverter = (temp) => {
    return (temp-273.15).toFixed(0)
  }
  useEffect(()=>{
    
    axios.get("http://localhost:3000/weather-tomorrow/" + location).then(response => {
    setData(response.data)
    console.log(sunse)
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
    <h1 className="text-2xl text-gray-200">
              Weather during the day
            </h1>
      {weatherDuringTheDay?.map((weather) => (
        <div className="col-4 col-md-4 col-lg-4 col-xl-4">
          <div className="card  bg-opacity-40 shadow-lg  d-flex flex-column justify-content-center">
            <b className="text-dark">{weather.hour.split(":").slice(0, 2).join(":")}</b>
            <span className="text-dark mt-2">
              {celciusConverter(weather.temperature)} °C
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
      
       <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-8 col-xl-8">
            <div className="card p-4">
              <h2>Air Pollution</h2>
              <div className="row">
                <div className="col-sm-6">
                  <p>
                    <strong>CO:</strong> {polution?.list[0]?.components?.co} µg/m<sup>3</sup>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <strong>NH3:</strong> {polution?.list[0]?.components?.nh3} µg/m<sup>3</sup>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <p>
                    <strong>NO:</strong> {polution?.list[0]?.components?.no} µg/m<sup>3</sup>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <strong>NO2:</strong> {polution?.list[0]?.components?.no2} µg/m<sup>3</sup>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <p>
                    <strong>O3:</strong> {polution?.list[0]?.components?.o3} µg/m<sup>3</sup>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <strong>PM2.5:</strong> {polution?.list[0]?.components?.pm2_5} µg/m<sup>3</sup>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <p>
                    <strong>PM10:</strong> {polution?.list[0]?.components?.pm10} µg/m<sup>3</sup>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <strong>SO2:</strong> {polution?.list[0]?.components?.so2} µg/m<sup>3</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <div className="col-12 col-md-8 col-lg-8 col-xl-8">
        <div className="row">
          <div className="col-6 col-md-6 col-lg-6 col-xl-6">
          <img src={sunrise} />
            <h1 className="text-2xl text-gray-100">Sunrise</h1>
            <p className="text-white ">{sunConverter(sunris)}</p>
          </div>
          <div className="col-6 col-md-6 col-lg-6 col-xl-6 ">
            <img src={sunset} width={80} className="mt-modif"/>
            <h1 className="text-2xl text-gray-100 mt-10 pt-2">Sunset</h1>
            <p className="text-white ">{sunConverter(sunse)}</p>
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
