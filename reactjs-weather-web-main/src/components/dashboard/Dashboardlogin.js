import React, { useEffect } from 'react'
import axios from "axios";

function Dashboardlogin() {

    useEffect(()=>{
        axios.get('http://localhost:3000/get/email').then(response=>{
            console.log(response.data);
        })
    })
  return (
    <div>Dashboardlogin</div>
  )
}

export default Dashboardlogin