import React from 'react'
import { useState } from 'react'
import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";

function Comment() {
  const [email, setEmail] = useState();
  const [comment, setComment] = useState();
  const postFeedback = () => {
    axios.post('http://localhost:3000/comments', {message: email+" | "+comment}).then(response=>{
      console.log('Success')
    })
  }
  return (
    <section style={{ backgroundColor: "#f0f2f5" }}>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <div className='col-md'>
            Leave a comment
          </div>
          <div className='col-md'>
            <MDBCard>
              <MDBCardBody className="p-4">
                <div className="d-flex flex-start w-100">
                  

                  <div className="w-100">
                    <MDBTypography tag="h5">Add a comment</MDBTypography>
                    <div>
                      <a href="">
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                      </a>
                    </div>
                    <MDBInput type='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
                    <MDBTextArea label="Feedback" rows={4} className='mt-3' onChange={(e)=> setComment(e.target.value)}/>

                    <div className="d-flex justify-content-between mt-3">
                      <MDBBtn color="success">Danger</MDBBtn>
                      <MDBBtn color="danger" onClick={()=>postFeedback()}>
                        Send <MDBIcon fas icon="long-arrow-alt-right ms-1" />
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
            </div>
        </MDBRow>
      </MDBContainer>
    </section>
    )
}

export default Comment