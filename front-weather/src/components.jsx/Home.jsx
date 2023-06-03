import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function Home() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const success = (position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);

      //const apiURL = `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en&key=bdc_3096f4f832654c43bad522fc4e9d9507`;
      const apiURL = `https://api.bigdatacloud.net/data/reverse-geocode?latitude=42.6727&longitude=21.1669&localityLanguage=en&key=bdc_3096f4f832654c43bad522fc4e9d9507`;

      fetch(apiURL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLocation(data.city);
          axios
            .get("http://localhost:3000/weather/" + data.city)
            .then((res) => {
              console.log(res.data.main);
            });
        });
    };

    const error = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <div>{"LAT:" + lat + " , LONG: " + long + " Location: " + location}</div>
  );
}

export default Home;
