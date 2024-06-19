import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons'
import { addDonorAPI, deleteDonorAPI, userDonorAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import EditDonor from './EditDonor';

function DonorsList() {


  const [token, setToken] = useState("")
  const [istoken, settToken] = useState(false)

  const [allDonorData, setData] = useState([])

  const getAllDonors = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

      }

      const result = await userDonorAPI(reqHeaders)
      console.log(result);
      if (result.status == 200) {
        setData(result.data)
      }
      else {
        console.log(result.response.data);
      }

    }
  }
  console.log(allDonorData);
  useEffect(() => {
    getAllDonors()
  })


  const [donorList, setDonor] = useState({
    name: "",
    mobile: "",
    bloodgroup: ""
  })
  console.log(donorList);

  // to reset
  const handleCancel = () => {
    setDonor({
      name: "",
      mobile: "",
      bloodgroup: ""
    })
  }



  const handleAdd = async (e) => {
    e.preventDefault()

    const { name, mobile, bloodgroup } = donorList
    if (!name || !mobile || !bloodgroup) {
      toast.info("Please fill the form completely")
    } else {

      //  object to formData
      const reqBody = new FormData()
      // add to body append
      reqBody.append("name", name)
      reqBody.append("mobile", mobile)
      reqBody.append("bloodgroup", bloodgroup)

      // request header
      if (token) {
        const reqHeaders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }

        //call api
        const result = await addDonorAPI(reqBody, reqHeaders)
        console.log(result);
        toast.success('Uploaded Successfully')
        handleClose()

      }


    }

  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  console.log(token);


  const [show, setShow] = useState(false);

  const handleDelete = async(id)=>{
    const token = sessionStorage.getItem("token")
    const reqHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
    const result = await deleteDonorAPI(id,reqHeaders)
    console.log(result);
    if (result.status==200) {
      getAllDonors()
    } else {
     console.log(result.response.data); 
    }
  }

  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      settToken(true)
    }
  })

  return (


    <>

      <div className='m-5'>
        <h2>DONORS LISTS</h2>

        <table className='table rounded shadow border '>
          <thead className='bg-warning'>
            <tr>
              <th>Sl.no</th>
              <th>Name</th>
              <th>Blood-Type</th>
              <th className='d-flex '>Actions <br /><button onClick={handleShow} className='btn btn-outline-success ms-2'>Add</button></th>

            </tr>

          </thead>
          {allDonorData?.length > 0 ?
            allDonorData?.map(items =>(<tbody>
              <tr>
                <td>
                  {items.index+1}
                </td>
                <td>
                  {items.name}
                </td>
                <td>
                  {items.bloodgroup}
                </td>
                <td>
                  <button style={{ backgroundColor: 'blue', color: 'white' }} className='btn'>Contact</button>
                  <button className='btn btn-success ms-2'><EditDonor donor={items}/></button>
                  <button onClick={()=>handleDelete(items._id)} className='btn btn-warning ms-2'><FontAwesomeIcon icon={faTrash} /></button>
                </td>
              </tr>

            </tbody>))

            : <p>No Donors</p>}
        </table>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Donors List </Modal.Title>
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
          <Button style={{ backgroundColor: 'blue', color: 'white' }} className='btn ' onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer theme='colored' position='top-center' autoClose={1500} />
    </>
  )
}

export default DonorsList