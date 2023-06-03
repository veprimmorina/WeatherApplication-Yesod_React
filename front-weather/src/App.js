import logo from './logo.svg';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './components.jsx/Weather';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  useEffect(()=>{
    const obj = {
      dt: 1685821744,
      id: 2643743,
      main: {
        temp: 71.8,
        feels_like: 66.69,
        temp_min: 71.01,
        temp_max: 73,
        pressure: 1014,
      },
      name: "London",
      sys: {
        type: 1,
        id: 1414,
        country: "GB",
        sunrise: 1592106173,
        sunset: 1592165939
      },
      timezone: 3600
    }
    console.log("sot",new Date(obj.dt*1000-(obj.timezone*1000))); // minus 
    console.log("sot",new Date(obj.dt*1000+(obj.timezone*1000)))
    const utcDate = new Date(obj.dt * 1000).toISOString();
  console.log("UTC time:", utcDate);
  },[])
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='weather/:location' element={<Weather />}></Route>
      </Routes>
    </BrowserRouter>
</>    )
}

export default App;

