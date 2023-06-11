import axios from "axios";
import React, { useEffect, useState } from 'react'

const FutureCards = ({location})=> {
 

  const [data, setData] = useState()
 const[weekWEather, setweekWeather] = useState()
 const celciusConverter = (temp) => {
  return (temp-273.15).toFixed(0)
}
  const getNextSixDays = () => {
    const dates = [];
    const today = new Date();
  
    for (let i = 0; i < 5; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i + 1);
  
      // Handle the last day of the month
      if (nextDay.getDate() === 1) {
        nextDay.setMonth(today.getMonth() + 1);
      }
  
      const formattedDate = nextDay.toISOString().split('T')[0];
      dates.push(formattedDate);
    }
    
    return dates;
  };
  const returnDateToDay =(date2)=>{
    const date1 = new Date(date2);
    const options = { weekday: 'long' };
    const dayOfWeek = date1.toLocaleDateString(undefined, options);
    return dayOfWeek;
  }
  useEffect(() => {
    axios.get("http://localhost:3000/weather-tomorrow/" + location).then(response => {
      console.log("neser", response.data);
    setData(response.data);
    const nextSixDays = getNextSixDays();
    const updatedWeekWeather = [];

    for (var i = 0; i < nextSixDays.length; i++) {
      let maxTemperature = -Infinity;
      let desctiption = "";
      for (var j = 0; j < response.data.list.length; j++) {
        var itemDate = response.data.list[j].dt_txt.split(' ')[0];
        if (itemDate === nextSixDays[i]) {
          console.log("Same:", itemDate, nextSixDays[i]);
          const temperature = response.data.list[j].main.temp;
          maxTemperature = Math.max(maxTemperature, temperature);
          desctiption = response.data.list[j].weather[0].main;
        }
      }
      updatedWeekWeather.push({ date: nextSixDays[i], temperature: maxTemperature, description: desctiption  });
    }

    setweekWeather(updatedWeekWeather);
    console.log(updatedWeekWeather);

    })
    
  }, [location])

 
  return (
    

    
    <div className='flex flex-col'>
    <div>
      <div className="bg-cover grid grid-cols-7 gap-14 p-20 text-center d-flex">
        {weekWEather?.map((weather, index) => (
          <div key={index} className="w-24 h-48  bg-opacity-20 card-future rounded-lg border border-gray-300 flex flex-col space-y-9">
            <h1 className="text-gray-100 text-center ">{celciusConverter( weather.temperature)}°C</h1>
            {/* Add the corresponding icon based on the weather */}
            {/*
              Replace the icon component and icon name according to your icon library
              Example: <i className='ri-cloudy-fill text-4xl text-gray-100'></i>
            */}
            {
              weather.description==="Clear" ? 
              <i className='ri-sun-fill text-4xl text-gray-100'></i> 
              : weather.description==="Rain" ? 
              <i className='ri-cloud-fill text-4xl text-gray-100'></i> :
              <i className='ri-cloud-fill text-4xl text-gray-100'></i>
            }
            
            <span className="text-white">{returnDateToDay( weather.date)}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
    
  )
}

export default FutureCards