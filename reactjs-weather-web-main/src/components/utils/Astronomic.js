import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Astronomic() {
    const [data, setData] = useState()

    useEffect(()=>{
        axios.get('http://localhost:3000/astronomic').then(response=>{
            setData(response.data)
        })
    },[])
  return (
    <>
    {
        data!=undefined ? 
    
    <section id="learn" class="p-5 bg-dark text-light">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md">
            <img src={data.hdurl} class="img-fluid" width={500} alt="" />
          </div>
          <div class="col-md p-5">
            <h2>{data.title}</h2>
            
            <p>
                {data.explanation}              
            </p>
            <a href="#" class="btn btn-light mt-3">
              <i class="bi bi-chevron-right"></i> Read More
            </a>
          </div>
        </div>
      </div>
    </section> 
    : "" }
  </>
    )
    
}

export default Astronomic