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
import { useParams, useNavigate } from "react-router-dom";
import Comment from "../comments/Comment";
import ContactUs from "../utils/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "../News/News";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";
import Astronomic from "../utils/Astronomic";
import Reccomandation from '../Recommandation/Reccomandation';

const MainScreen = ({countries, polution}) => {
  const { location } = useParams();
  const [florida, setFlorida] = useState();
  const [paris, setParis] = useState();
  const [zurich, setZurich] = useState();
  const [london, setLondon] = useState();
  const [dubai, setdubai] = useState();
  const [tokyo, settokyo] = useState();
  const [madrid, setMadrid] = useState();
  const [manchester, setManchester] = useState();
  const [data, setData] = useState();
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();
  const sunset = require('../image/sunset-removebg-preview.png')
  const sunrise = require('../image/sunrise-removebg-preview.png')

  useEffect(() => {

    console.log('qetu', polution)
    axios.get("http://localhost:3000/weather/" + location).then((response) => {
      setData(response.data);
      console.log("data", response.data.sys.sunrise)
    });
  }, [polution]);

 
  // useEffect(() => {
  //   countries.map((c) => setCities((cities) => [...cities, c]));
  // });

  useEffect(() => {
    var a = 0;
    if (a === 1) {
      return;
    }

    axios.get("http://localhost:3000/weather/Florida").then((response) => {
      setFlorida(response.data);
    });
    axios.get("http://localhost:3000/weather/Paris").then((response) => {
      setParis(response.data);
    });
    axios.get("http://localhost:3000/weather/Zurich").then((response) => {
      setZurich(response.data);
    });
    axios.get("http://localhost:3000/weather/Dubai").then((response) => {
      setdubai(response.data);
    });
    axios.get("http://localhost:3000/weather/Tokyo").then((response) => {
      settokyo(response.data);
    });
    axios.get("http://localhost:3000/weather/Madrid").then((response) => {
      setMadrid(response.data);
    });
    axios.get("http://localhost:3000/weather/Manchester").then((response) => {
      setManchester(response.data);
    });
    axios.get("http://localhost:3000/weather/London").then((response) => {
      setLondon(response.data);
    });
    axios
      .get("http://localhost:3000/news-for-weather", {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  const search = () => {
    var City = {
      ident: selectedCity
    }    
    axios({
      method: 'post',
      url: 'http://localhost:3000/city/searched',
      data: City,
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.error(error);
    });
    navigate('/weather/'+selectedCity)
  }

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
          <div className="">
            <div className="d-flex justify-content-center mt-2"></div>
            <WeatherStatus location={location} />
          </div>
 
          <div className="w-50  ml-50 h-100 air-quality bg-opacity-20 shadow-lg border-left border-gray-300">
            <div className="d-flex">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={countries.map((c) => c.capital)}
                sx={{ width: 400, margin: 2 }}
                onSelect={(e) => setSelectedCity(e.target.value)}
                renderInput={(params) => (
                  <TextField {...params} label="Search Cities" />
                )}
              />
              {selectedCity ? (
                <Button
                  color="success"
                  size="small"
                  variant="contained"
                  className="m-3"
                  onClick={() => search()}
                >
                  {<CloudIcon />} Weather in {selectedCity}
                </Button>
              ) : (
                ""
              )}
            </div>
            <AirQuality location={location} sunris={data?.sys.sunrise} sunse={data?.sys.sunset} polution={polution} />
          </div>
        </div>
      </section>
      <FutureCards location={location} />
      
      <div className="mt-30" style={{ backgroundColor: "white" }}>
        <Comment />
      </div>
      <div className="bg-white">
        <h3 className="text-center">Reccomandation</h3>
      <Reccomandation location={location} temp={data?.main.temp} description={data?.weather[0].main}/>
      </div>
      <Astronomic />
    </>
  );
};

export default MainScreen;
