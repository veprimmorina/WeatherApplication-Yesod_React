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
      <div className="bg-cover grid grid-cols-3 gap-4 p-20 text-center mt-16">
        
        {
          weatherDuringTheDay?.map(weather=>(
            <div className="w-24 h-56 bg-white bg-opacity-40 rounded-full flex flex-col justify-center ">
            <h1 className="text-gray-100 w-24">{weather.hour} </h1>
            <span className="text-white mt-12">
            {celciusConverter( weather.temperature)} C
            </span>
          </div>
          ))
           
      }
       
        <i className="ri-information-fill ri-xl text-gray-200 absolute left-0 right-0 text-end mr-10"></i>
        <div className="border-t-2 border-gray-300 ml-24 mr-24"></div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col space-x-4">
          <div className="flex flex-row justify-between mt-10 mr-8 ml-8">
            <h1 className="text-2xl text-gray-100">Hava Kalitesi</h1>
            <h1 className="text-2xl text-gray-100">UV İndeksi</h1>
          </div>
          <div className="flex flex-row space-x-8">
            <div className="flex flex-col">
              <ProgressBar value={50} />
              <div className="text-center flex flex-col relative bottom-28">
                <span className="text-center text-gray-200">a/6</span>
                <span className="text-center text-gray-200">
              a
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <ProgressBar value={10} max={10} />
              <div className="text-center flex flex-col relative bottom-28">
                <span className="text-center text-gray-200">{10}/10</span>
                <span className="text-center text-gray-200">
10                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
