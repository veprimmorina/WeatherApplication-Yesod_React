import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import Cities from './Cities';
import axios from 'axios';

function CitiesSlider() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
      const cities = 
        ['Florida','Paris','London','Zurich']
      const [citiesWeather, setcitiesWeather] = useState([])
      useEffect(()=>{
        cities.map(city=>{
          axios.get("http://localhost:3000/weather/"+city).then(response=>{
            setcitiesWeather(city, [response.data])
            console.log(city,[response.data])
          })
          
        })
      },[])      
  return (
    <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {cities.map(city=>(
                <Cities />
            ))}
            
          </Carousel>
  )
}

export default CitiesSlider