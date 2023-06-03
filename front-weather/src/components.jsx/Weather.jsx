import React, { useEffect, useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
import axios from "axios";
import Carousel from "react-multi-carousel";
import Cities from "./Cities";
import Feedback from "./Feedback";
import { useParams } from "react-router-dom";


function Weather() {
    const [data, setData] = useState()
    const [bgGig, setBGGif] = useState('')
    const [currentTime, setCurrentTime] = useState(new Date());
    const {location} = useParams()

    const celciusConverter = (temp) => {
        return (temp-273.15).toFixed(0)
    }
    function timestampToTime(timestamp) {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
      
        // Format the time as HH:MM:SS
        const formattedTime = `${hours}:${minutes}:${seconds}`;
      
        return formattedTime;
      }
      const handleClose = () => {
        setShow(false)
      }
      const cities = 
      ['Florida','Paris','London','Zurich']
    const [citiesWeather, setCitiesWeather] = useState([])
    const [florida, setFlorida] = useState()
    const [paris, setParis]= useState()
    const [zurich, setZurich] = useState()
    const [london, setLondon] = useState()
    const [dubai, setdubai]= useState()
    const [tokyo, settokyo]= useState()
    const [madrid, setMadrid]= useState()
    const [manchester, setManchester]= useState()
    const [show, setShow] = useState()
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
     
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      // Clear the interval when the component unmounts
      return () => {
        clearInterval(timer);
      };
    }, []);
    useEffect(()=>{
        axios.get("http://localhost:3000/weather/"+location).then(response=>{
            setData(response.data)
            console.log(response.data)
            switch (response.data.weather[0].main) {
                case "Snow":
                  setBGGif(
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')"
                  );
                  break;
                case "Clouds":
                  setBGGif(
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')"
                  );
                  break;
                case "Fog":
                  setBGGif(
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')"
                  );
                  break;
                case "Rain":
                  setBGGif(
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')"
                  );
                  break;
                case "Clear":
                  setBGGif(
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')"
                  );
                  break;
                case "Thunderstorm":
                  setBGGif(
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')"
                  );
                  break;
                default:
                  setBGGif(
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')"
                  );
                  break;
              }
        })
     
    },[])
  return (
    <>
    
            <div className="d-flex justify-content-between shadow-lg">

          
            
                
                <Cities city={"Florida"} weather={florida} />
<Cities city={"Paris"} weather={paris} />
<Cities city={"London"} weather={london} />
<Cities city={"Zurich"} weather={zurich} />
<Cities city={"Madrid"} weather={madrid} />
<Cities city={"Dubai"} weather={dubai} />
<Cities city={"Manchester"} weather={manchester} />
<Cities city={"Tokyo"} weather={tokyo} />

            </div>

    <section className="vh-100" style={{ backgroundColor: "#4B515D" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="8" lg="6" xl="4">
            <div className="d-flex">
            <MDBCard style={{ background:  bgGig, backgroundSize: "480px", borderRadius: "35px" }}>
              <div className="d-flex">
              <MDBCardBody className="p-4">
                
                <div className="d-flex">
                  <MDBTypography tag="h6" className="flex-grow-1">
                    {data?.name}
                  </MDBTypography>
                  <MDBTypography tag="h6">{currentTime.getHours()+":"+currentTime.getMinutes()}</MDBTypography>
                </div>

                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <MDBTypography
                    tag="h6"
                    className="display-4 mb-0 font-weight-bold"
                    style={{ color: "#1C2331" }}
                  >
                    {" "}
                    {celciusConverter(data?.main.temp)}°C{" "}
                  </MDBTypography>
                  <span className="small" style={{ color: "#868B94" }}>
                    {data?.weather[0].description}
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{fontSize: '1rem'}}>
                    <div>
                      <MDBIcon
                        fas
                        icon="wind fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> {data?.wind.speed} km/h</span>
                    </div>
                    <div>
                      <MDBIcon
                        fas
                        icon="tint fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> {data?.main.humidity+" %"}</span>
                    </div>
                    <div>
                      <MDBIcon
                        fas
                        icon="sun fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> 0.2h </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                      width="100px"
                    />
                  </div>
                </div>
              </MDBCardBody>
              <div className="bg-white">
                <p>Feels like: {celciusConverter(data?.main.feels_like)+"Celcius"}</p>
                <p>Wind degree: {data?.wind.deg}</p>
                <p>Sunrise: {timestampToTime(data?.sys.sunrise)}</p>
                <p>Sunset: {timestampToTime(data?.sys.sunset)}</p>
                <p>Pressure: {data?.main.pressure+" hPa"}</p>
                <p>Max temp: {celciusConverter( data?.main.temp_max)}</p>
                <p>Min temp: {celciusConverter( data?.main.temp_min)}</p>
              </div>
              </div>
            </MDBCard>
            
              </div>
          </MDBCol>
          <div className="feedback" onClick={()=>setShow(true)}>
      <p>Feedback</p>
    </div>
        </MDBRow>
          <Feedback show={show} handleClose={handleClose} />
      </MDBContainer>
    </section>
  
    </>
  );
}
export default Weather