import React, { useState,useEffect } from "react";
import { useApiContext } from "./ApiContext";

import { Input } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  

  const [isTyping, setIsTyping] = useState(false);
  const [searchPlace, setSearchPlace] = useState('')
 const navigate = useNavigate()

  const handleQuery = (e) => {
    if (e.length >= 0) {
      setIsTyping(true);
      alert(e)
    } else {
      setIsTyping(false);
    }
  };
  
  const searchForPlace = () => {
    navigate('/weather/'+searchPlace)
      }
  
useEffect(() => {
  
}, [])

 
  return (
    <div>
      <div className="mt-10 flex align-center">
        <a className="self-center cursor-pointer" >
          <i className="ri-map-pin-2-line ri-xl text-white mr-8 ml-20 hover:text-indigo-600"></i>
        </a>
        <Input
          variant="standard"
          color="indigo"
          className="bg-transparent  border-white text-white placeholder-white font-[Inter] text-xl font-thin"
          placeholder={"Istanbul,Türkiye"}
          onChange={(e)=>setSearchPlace(e.target.value)}
          onBlur={() =>
            setTimeout(() => {
              setIsTyping(false);
            }, 100)
          }
        />
        <button>
          <a className="flex justify-center h-[59px] w-[58px] backdrop-blur-lg rounded-xl drop-shadow-lg ml-12 mr-8" onClick={()=> searchForPlace()}>
            <i className="ri-search-line ri-xl text-white  self-center "></i>
          </a>
        </button>
      </div>
      {!isTyping ? (
        <div></div>
      ) : (
        <div className="flex flex-col absolute bg-white/20 rounded-lg justify-center left-0 right-0 ml-24 mr-24 backdrop-blur-sm">
         
        </div>
      )}
    </div>
  );
};

export default Search;
