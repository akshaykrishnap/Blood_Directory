import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import { editDonorAPI } from '../Services/allAPI';

function EditDonor({ donor }) {

  const [show, setShow] = useState(false);

  const [donorList, setDonor] = useState({
    name: donor.name,
    mobile: donor.mobile,
    bloodgroup: donor.bloodgroup
  })
  console.log(donorList);


  // to reset
  const handleCancel = () => {
    setDonor({
      name: donor.name,
      mobile: donor.mobile,
      bloodgroup: donor.bloodgroup
    })
  }

  const handleClose = () => setShow(false);

  const handleEdit = async (e) => {
    e.preventDefault()
    const { name, mobile, bloodgroup } = donorList

    if (!name || !mobile || !bloodgroup) {
      toast.error('Please Fill The Form Completely')
    } else {
      //  object to formData
      const reqBody = new FormData()
      // add to body append
      reqBody.append("name", name)
      reqBody.append("mobile", mobile)
      reqBody.append("bloodgroup", bloodgroup)

      
      
    }

  const result =  await editDonorAPI(id,reqBody,reqHeaders)
  console.log(result);
  
  if (result.status==200) {
   toast.success('Updated Successfully') 
   handleClose()
  }
  
  handleClose()

  }

  const handleShow = () => setShow(true);

  return (



    <>
      <FontAwesomeIcon style={{ color: 'green', fontWeight: 'bold' }} onClick={handleShow} icon={faPenToSquare} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Edit Donors List </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <input type="text" className='form-control mt-2' value={donorList.name} onChange={(e) => setDonor({ ...donorList, name: e.target.value })} placeholder='Name' />
          </div>

          <div className="d-flex">
            <input type="text" className='form-control mt-2' value={donorList.mobile} onChange={(e) => setDonor({ ...donorList, mobile: e.target.value })} placeholder='Mobile Number' />
          </div>

          <div className="d-flex">
            <input type="text" className='form-control mt-2' value={donorList.bloodgroup} onChange={(e) => setDonor({ ...donorList, bloodgroup: e.target.value })} placeholder='Blood Group' />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: 'grey', color: 'white' }} className='btn' onClick={handleCancel}>
            Cancel
          </Button>
          <Button style={{ backgroundColor: 'blue', color: 'white' }} className='btn ' onClick={handleEdit} >
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer theme='colored' position='top-center' autoClose={1500} />

    </>
  )
}

export default EditDonor