import React, { useRef } from 'react'
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';


function Emaildonor() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0krd6ph', 'template_ye32s8o', form.current, {
        publicKey: 'YA7flZkbIK65EiYK3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("Message Sent");
          toast.success('Message Sent')
         
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (

    <>
<button onClick={handleShow} style={{ backgroundColor: 'blue', color: 'white' }} className='btn'>Contact</button>

<Modal show={show} onHide={handleClose} animation={false}>
        
        <Modal.Body>
        <form style={{justifyContent:'center',alignItems:'center',textAlign:'center'}} className='form-control justify-content-center' ref={form} onSubmit={sendEmail}>
      <div className='d-flex m-2 '>
        <label>Name</label>
        <input className='form-control' type="text" name="user_name" />
      </div>
     <div className='d-flex m-2'>
       <label>Email</label>
       <input className='form-control' type="email" name="user_email" />
     </div>
   <div className='d-flex m-2'>
       <label>Message</label>
       <input name="message" type="text" />
   </div>
   <input className='btn btn-info'  type="submit" value="Send" />
      
    </form>
    
        </Modal.Body>
        
      </Modal>

      <ToastContainer theme='colored' position='top-center' autoClose={1500} />
    </>
  )
}

export default Emaildonor