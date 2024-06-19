import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { ToastContainer, toast } from 'react-toastify';
import { addReciverAPI, deleteReciverAPI, userReciverAPI } from '../Services/allAPI';
import EditReciver from './EditReciver';
import Emaildonor from './Emaildonor';

function ReciversList() {

  const [token, setToken] = useState("")
  const [istoken, settToken] = useState(false)

  const [allReciverData, setData] = useState([])

  const getAllRecivers = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

      }

      const result = await userReciverAPI(reqHeaders)
      console.log(result);
      if (result.status == 200) {
        setData(result.data)
      }
      else {
        console.log(result.response.data);
      }

    }
  }
  console.log(allReciverData);

  useEffect(() => {
    getAllRecivers()
  })

  const navigate = useNavigate()

  const [reciverList, setReciver] = useState({
    name: "",
    mobile: "",
    bloodgroup: ""
  })
  console.log(reciverList);


  /* token */

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])
  console.log(token);


  // to reset
  const handleCancel = () => {
    setReciver({
      name: "",
      mobile: "",
      bloodgroup: ""
    })

  }



  const handleAdd = async (e) => {
    e.preventDefault()

    const { name, mobile, bloodgroup } = reciverList
    if (!name || !mobile || !bloodgroup) {
      toast.info("Please fill the form completely")
    } else {

      //  object to formData
      const reqBody = new FormData()
      // add to body append
      reqBody.append("name", name)
      reqBody.append("mobile", mobile)
      reqBody.append("bloodgroup", bloodgroup)

      if (token) {
        const reqHeaders = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }

        //call api
        const result = await addReciverAPI(reqBody, reqHeaders)
        console.log(result);
        toast.success('Uploaded Successfully')
        handleClose()

      }

    }

  }

  
  const handleDelete = async(id)=>{
    const token = sessionStorage.getItem("token")
    const reqHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
    const result = await deleteReciverAPI(id,reqHeaders)
    console.log(result);
    if (result.status==200) {
      getAllRecivers()
    } else {
     console.log(result.response.data); 
    }
  }
  
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);


  //token verify
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      settToken(true)
    }
  })



  return (
    <>
      <div className='m-5'>
        <h2>RECIVERS LIST</h2>
        <table className='table rounded shadow border '>
          <thead>
            <tr>
              <th>Sl.no</th>
              <th>Name</th>
              <th>Blood-Type</th>
              <th className='d-flex'>Actions <br /><button onClick={handleShow} className='btn btn-outline-success ms-2'>Add</button></th>
            </tr>

          </thead>
          {allReciverData?.length > 0 ?
            allReciverData?.map((items,index )=> (<tbody>
              <tr>
                <td>
                  {index + 1}
                </td>
                <td>
                  {items.name}
                </td>
                <td>
                  {items.bloodgroup}
                </td>
                <td className='d-flex'>
                  <Emaildonor/>
                  <button className='btn btn-success ms-2'><EditReciver reciver={items} /></button>
                  <button onClick={()=>handleDelete(items._id)}className='btn btn-warning ms-2'><FontAwesomeIcon icon={faTrash} /></button>
                </td>
              </tr>

            </tbody>))

            : <p>No Recivers</p>
          }
        </table>

      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recivers List </Modal.Title>
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
          <Button style={{ backgroundColor: 'blue', color: 'white' }} className='btn ' onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer theme='colored' position='top-center' autoClose={1500} />
    </>
  )

}

export default ReciversList