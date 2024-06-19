import React, { useRef } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
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
          toast.success('Message sent')
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
        <Modal.Header closeButton>
          <Modal.Title>Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className='form-control' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <input name="message" type="text" />
      <input className='form-control' onClick={handleClose} type="submit" value="Send" />
      
    </form>
        </Modal.Body>
        
      </Modal>

      <ToastContainer theme='colored' position='top-center' autoClose={1500} />
    </>
  )
}

export default Emaildonor