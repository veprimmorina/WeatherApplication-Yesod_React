import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
} from 'mdb-react-ui-kit';
import emailjs from 'emailjs-com';

export default function ReturnModal({ show, handleClose, email }) {
  const [message, setMessage] = useState('');

  function sendEmail() {
  
    // Specify the recipient's email address
    
  
    // Get the message from the form input (assuming you have an input field with id 'message')
  
    // Prepare the emailjs parameters
    var emailParams = {
      to_email: email,
      message: message,
      // Add other necessary parameters such as subject, name, etc.
    };
  
    emailjs.send('smtpmail', 'template_cmjvqlo', emailParams, 'ox4XUcH0L4yyTgHhs')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  

  return (
    <>
      <MDBModal show={show} onHide={handleClose} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={handleClose}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form className='' onSubmit={sendEmail}>
                <label className='form-label'>Email</label>
                <input type='email' name='user_email' className='form-control' value={email} disabled/>
                <label className='form-label'>Message</label>
                <textarea className='form-control' name='message'  onChange={(e) => setMessage(e.target.value)} />
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={handleClose}>
                Close
              </MDBBtn>
              <button className='btn btn-primary' onClick={sendEmail}>Send email</button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
