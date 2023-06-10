import React, { Fragment } from "react";
import Search from "../utils/Search";
import WeatherStatus from "./WeatherStatus";
import FutureCards from "../utils/FutureCards";
import AirQuality from "../utils/AirQuality";
import { useApiContext } from "../utils/ApiContext";
import BounceLoader from "../utils/indicator/Indicator";
import { Alert, useSelect } from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Cities from "../utils/Cities";
import { useParams } from "react-router-dom";
import Comment from "../comments/Comment";
import ContactUs from "../utils/ContactUs";
import 'bootstrap/dist/css/bootstrap.min.css';
import News from "../News/News";


const MainScreen = () => {
 
  const {location} = useParams()
  const [florida, setFlorida] = useState()
  const [paris, setParis]= useState()
  const [zurich, setZurich] = useState()
  const [london, setLondon] = useState()
  const [dubai, setdubai]= useState()
  const [tokyo, settokyo]= useState()
  const [madrid, setMadrid]= useState()
  const [manchester, setManchester]= useState()

  const [data, setData] = useState()



  useEffect(()=>{
    axios.get("http://localhost:3000/weather/"+location).then(response=>{
        setData(response.data)
        console.log("datat",response.data)
        console.log(location)

  })},[])
  useEffect(() => {
    var a=0;
    if(a===1){
      return;
    }
  
      axios.get("http://localhost:3000/weather/Florida").then(response=>{
        setFlorida(response.data)
      })
      axios.get("http://localhost:3000/weather/Paris").then(response=>{
        setParis(response.data)
      })
      axios.get("http://localhost:3000/weather/Zurich").then(response=>{
        setZurich(response.data)
      })
      axios.get("http://localhost:3000/weather/Dubai").then(response=>{
        setdubai(response.data)
      })
      axios.get("http://localhost:3000/weather/Tokyo").then(response=>{
        settokyo(response.data)
      })
      axios.get("http://localhost:3000/weather/Madrid").then(response=>{
        setMadrid(response.data)
      })
      axios.get("http://localhost:3000/weather/Manchester").then(response=>{
        setManchester(response.data)
      })
      axios.get("http://localhost:3000/weather/London").then(response=>{
        setLondon(response.data)
      })
     
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between shadow-lg bg-white">
        <Cities city={"Florida"} weather={florida} />
        <Cities city={"Paris"} weather={paris} />
        <Cities city={"London"} weather={london} />
        <Cities city={"Zurich"} weather={zurich} />
        <Cities city={"Madrid"} weather={madrid} />
        <Cities city={"Dubai"} weather={dubai} />
        <Cities city={"Manchester"} weather={manchester} />
        <Cities city={"Tokyo"} weather={tokyo} />
      </div>

      <section className="container">
        <div className="w-100 h-100 d-flex">
          <div className="w-100">
            <div className="d-flex justify-content-center mt-2"></div>
            <WeatherStatus location={location} />
          </div>
          <div className="w-50 h-100 air-quality bg-opacity-20 shadow-lg border-left border-gray-300">
            <Search />
            <AirQuality location={location} />
          </div>
        </div>
      </section>
      <FutureCards location={location} />

      <div className="mt-30" style={{ backgroundColor: "white" }}>
        <Comment />
      </div>
      <News />
      
    </>
  );
};

export default MainScreen;
