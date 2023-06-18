import React, { useEffect, useState } from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

import axios from 'axios';


export default function Reccomandation({temp,description,location}) {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  const [recommandation, setReccomandation] = useState([])
  const date = new Date()

  const celciusConverter = (temp) => {
    return (temp-273.15).toFixed(0)
  }

  useEffect(()=>{
 
    axios.get("http://localhost:3000/weather/recommender/"+celciusConverter(temp)+"/"+date?.getHours()+"/"+description).then(response=>{
          console.log("arrejat",response.data.split('\n'))
          setReccomandation(response.data.split('\n')); 
          console.log("desic",description)         
        }).catch(err=>{
          console.log(err)
        })
  },[description])
  
  return (
    <>
    {recommandation.length === 0  ? 

    "" :
    
  
    <div className='bg-light row'>
    <div className='bg-light'>
    <div className='container text-center'>
     <>
      
<MDBAccordion borderless initialActive={1}>
      <MDBAccordionItem collapseId={1} headerTitle={recommandation && recommandation.length>0 ? recommandation[0] : ""}>
        {recommandation[1]}
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle={recommandation && recommandation.length>1  ? recommandation[3] : ""}>
      {recommandation[4]}
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle={recommandation && recommandation.length>2 ? recommandation[6] : ""}>
      {recommandation[6]}
      </MDBAccordionItem>
    </MDBAccordion>

    </>
  </div>
  </div>
  </div>
 }
  </>
  );
}