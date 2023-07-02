import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import ReturnModal from './ReturnModal';

export default function DashboardComments() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState()
  const handleClose = () => {
    setShow(false)
  }
  const showModal = (email) => {
    setEmail(email);
    setShow(true)
  }
    const [comments, setComments] = useState()
    useEffect(()=>{
        axios.get('http://localhost:3000/getAllCommentsR').then(response=>{
            setComments(response.data)
            console.log(response.data)
        })
    },[])
  return (
    <>
    <MDBTable>
      <MDBTableHead light>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>First</th>
          <th scope='col'>Last</th>
          <th scope='col'>Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
                    comments?.map(comment=>(
<tr>
          <th scope='row'>{comment?.id}</th>
          <td>{comment?.message.split("|")[1]}</td>
          <td>{comment?.message.split("|")[0]}</td>
          <td><button className='btn btn-primary' onClick={()=>showModal(comment?.message.split("|")[0])}>Reply</button></td>
        </tr>
                    ))}
        
      </MDBTableBody>
     
    </MDBTable>
                      <ReturnModal show={show} handleClose={handleClose} email={email}/>
  </>
  );
}