import React from "react";
import "./App.css";
import MainScreen from "./components/screens/MainScreen";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import DashboardComments from "./components/comments/DashboardComments";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [location, setLocation] = useState("");
  const [countries, setCountries] = useState([""]);
  const navigate = useNavigate();

  useEffect(() => {
    const success = (position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);

      const apiURL = `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en&key=bdc_3096f4f832654c43bad522fc4e9d9507`;
      //const apiURL = `https://api.bigdatacloud.net/data/reverse-geocode?latitude=42.6727&longitude=21.1669&localityLanguage=en&key=bdc_3096f4f832654c43bad522fc4e9d9507`;

      fetch(apiURL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLocation(data.city);
          navigate(`/weather/${data.city}`);
        });
    };

    const error = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/capital")
      .then((data) => {
        setCountries(data.data.data);
      });
  }, []);

  return (
    <Routes>
      <Route
        path="/weather/:location"
        element={<MainScreen countries={countries} />}
      ></Route>
      <Route path="/dashboard/comments" element={<DashboardComments />}></Route>
    </Routes>
  );
};

export default App;
