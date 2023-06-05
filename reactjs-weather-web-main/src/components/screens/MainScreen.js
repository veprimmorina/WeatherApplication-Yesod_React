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

const MainScreen = () => {
  const { loading, error, alert, setAlert } = useApiContext();
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
    axios.get("http://localhost:3000/weather/Malishevë").then(response=>{
        setData(response.data)
        console.log(response.data)
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
       (
        <div className="w-screen h-screen flex">
          <div className="w-full ">
            <div className="flex justify-center mt-2">
              <Fragment>
                {error && (
                  <Alert
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    }
                    show={alert}
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 100 },
                    }}
                    dismissible={{
                      onClose: () => setAlert(false),
                    }}
                    className="max-w-screen-md"
                    color="orange"
                  >
                    {`${error}`}
                  </Alert>
                )}
              </Fragment>
            </div>
            <WeatherStatus />
            <FutureCards />
          </div>
          <div className="w-6/12 h-full bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg border-l border-gray-300 ">
            <Search />

            <AirQuality />
          </div>
        </div>
      )
    </section>
    </>
  );
};

export default MainScreen;
