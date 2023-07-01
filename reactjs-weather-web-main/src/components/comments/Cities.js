import axios from 'axios'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'

function Cities() {

    const [cities, setCities] = useState()
    const [city, setCity] = useState()


    useEffect(()=>{
        axios.get('http://localhost:3000/get/cities').then(response=>{
            setCities(response.data)
            console.log(response.data)
        })
    },[])

    const search = () => {
        axios.get('http://localhost:3000/get/city/'+city).then(response=>{
            setCities([response.data])
            console.log(response.data)
        })
    }
  return (
    <MDBTable style={{ width: "100%" }}>
      <MDBTableHead light>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Searched</th>
          <th scope='col'>
            <input type='search' onChange={(e)=> setCity(e.target.value)}/> <button className='btn btn-success' onClick={()=> search()}>Search</button>
          </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
                    cities?.map(city=>(
<tr>
          <th scope='row'>{city?.id}</th>
          <td>{city?.ident}</td>
          <td>{city?.password==null ? 1 : parseInt( city.password) +1}</td>
          <td>Edit</td>
        </tr>
                    ))}
        
      </MDBTableBody>
    </MDBTable>
  
  )
}

export default Cities