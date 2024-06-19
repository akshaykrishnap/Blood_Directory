import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';

function EditReciver({reciver}) {

  const [reciverList, setReciver] = useState({
    name: reciver.name,
    mobile: reciver.mobile,
    bloodgroup: reciver.bloodgroup
  })
  console.log(reciverList);

  const [show, setShow] = useState(false);


  // to reset
const handleCancel = () => {
setDonor({
  name: reciver.name,
  mobile: reciver.mobile,
  bloodgroup: reciver.bloodgroup
})
}

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


  return (

    <>

<FontAwesomeIcon style={{ color: 'green', fontWeight: 'bold' }} onClick={handleShow} icon={faPenToSquare} />

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Edit Recivers List </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <input type="text" className='form-control mt-2' value={reciverList.name} onChange={(e) => setReciver({ ...reciverList, name: e.target.value })} placeholder='Name' />
          </div>

          <div className="d-flex">
            <input type="text" className='form-control mt-2' value={reciverList.mobile} onChange={(e) => setReciver({ ...reciverList, mobile: e.target.value })} placeholder='Mobile Number' />
          </div>

          <div className="d-flex">
            <input type="text" className='form-control mt-2' value={reciverList.bloodgroup} onChange={(e) => setReciver({ ...reciverList, bloodgroup: e.target.value })} placeholder='Blood Group' />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: 'grey', color: 'white' }} className='btn' onClick={handleCancel}>
            Cancel
          </Button>
          <Button style={{ backgroundColor: 'blue', color: 'white' }} className='btn ' >
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer theme='colored' position='top-center' autoClose={1500} />


    </>
  )
}

export default EditReciver