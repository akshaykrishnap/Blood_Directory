import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons'

import { Button,Modal } from 'react-bootstrap';
import { addInventoryAPI, userInventoryAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';


function Inventor() {

  const [token, setToken] = useState("")
  const [allReciverData, setData] = useState([])




  const [inventorList, setInventor] = useState({
    sl:"",
    bloodgroup:"",
    total:"",
    bloodbank:""
  })
  console.log(inventorList);

  // token
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

      // to reset
      const handleCancel= ()=>{
        setInventor({
          sl:"",
          bloodgroup:"",
          total:"",
          bloodbank:""
        })
       }

       const handleAdd = async (e) => {
        e.preventDefault()
    
        const { sl, bloodgroup, total,bloodbank } = inventorList
        if (!sl || !bloodgroup || !total || !bloodbank) {
          toast.info("Please fill the form completely")
        } else {
    
          //  object to formData
          const reqBody = new FormData()
          // add to body append
          reqBody.append("sl", sl)
          reqBody.append("bloodgroup", bloodgroup),
          reqBody.append("total", total),
          reqBody.append("bloodbank", bloodbank)
    
          // request header
          if (token) {
            const reqHeaders = {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
    
            //call api
            const result= await addInventoryAPI(reqBody,reqHeaders)
            console.log(result);
            toast.success('Uploaded Successfully')
            handleClose()
    
          }
    
          const result = await userInventoryAPI(reqHeaders)
          console.log(result);
          if (result.status == 200) {
            setData(result.data)
          }
          else {
            console.log(result.response.data);
          }
    
    
        }
    
      }

      
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


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>
<div>
  <h2>INVENTORY</h2>
<table className='table border '>
          <thead>
            <tr>
              <th>Sl.no</th>
              <th>Blood-Type</th>
              <th>Total Number of Units</th>
              <th>Blood Bank</th>
              
              <th><button onClick={handleShow} className='btn btn-outline-success'>Add</button></th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <th>
                1
              </th>
              <th>
                O-
              </th>
              <th>
                25
              </th>
              <th>
                RSM
              </th>
              <th className='d-flex'> <button className='btn btn-success'><FontAwesomeIcon icon={faPenToSquare} /></button><button className='btn btn-danger ms-2'><FontAwesomeIcon icon={faTrash} /></button></th>
            </tr>

          </tbody>
        </table>
</div>


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Donors List </Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div className="d-flex">
  <input type="text" className='form-control mt-2' value={inventorList.sl} onChange={(e)=>setInventor({...inventorList,sl:e.target.value})} placeholder='Serial No.' />
</div>

<div className="d-flex">
<input type="text" className='form-control mt-2' value={inventorList.bloodgroup} onChange={(e)=>setInventor({...inventorList,bloodgroup:e.target.value})} placeholder='Blood Type' />
</div>

<div className="d-flex">
<input type="text" className='form-control mt-2' value={inventorList.total} onChange={(e)=>setInventor({...inventorList,total:e.target.value})} placeholder='Total Units' />
</div>

<div className="d-flex">
<input type="text" className='form-control mt-2' value={inventorList.bloodbank} onChange={(e)=>setInventor({...inventorList,bloodbank:e.target.value})} placeholder='Hospital' />
</div>

        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:'grey',color:'white'}}  className='btn' onClick={handleCancel}>
            Cancel
          </Button>
          <Button style={{backgroundColor:'blue',color:'white'}} className='btn ' onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={1500} />
    </>
  )

}

export default Inventor