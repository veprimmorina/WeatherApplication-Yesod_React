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
    axios.post('http://localhost:3000/post/comment', {message: email+" | "+comment}).then(response=>{
      console.log('Success')
    })
  }
  return (
    <section id="learn" class="p-5 bg-light text-dark">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md p-5">
            <h2>Leave Feedback</h2>
            
            <p>
            We greatly value your feedback and suggestions as we continue to develop our website. Our goal is to provide you with the best possible user experience, and your insights are essential in helping us achieve that.

If you encountered any issues or glitches while using our website, we would appreciate hearing about them. Identifying and resolving any problems is crucial to ensure smooth functionality.

In addition to bug reports, we also welcome suggestions for improving the design and layout of our website. Your input can help us enhance navigation and make information more accessible.

Our commitment to user satisfaction extends to all devices. If you noticed any inconsistencies or difficulties in accessing our website across different platforms, please let us know so that we can address these concerns.

We strive to make our website accessible to all users. If you have encountered any challenges related to accessibility, we are eager to learn more about them and find ways to improve the inclusivity of our website.

Your opinion on the quality and releva              
            </p>
            
          </div>
          <div class="col-md">
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
        </div>
      </div>
    </section>
    
    )
}

export default Comment