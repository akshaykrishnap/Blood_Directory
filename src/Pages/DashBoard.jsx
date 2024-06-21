import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import MenuList from '../Components/MenuList'
import AdminReciverlist from '../Components/AdminReciverlist'
import AdminDonorList from '../Components/AdminDonorList'




function DashBoard() {

  const [adminId ,setAdminId] = useState("")




  useEffect(()=>{
setAdminId(JSON.parse(sessionStorage.getItem("existingUsers")).adminId)
  },[])


  return (

    <>
    <MenuList/>

    <div>
      <h1>Welcome <span className='text-danger'>{adminId}</span></h1>
    </div>
     <Row>

     <Col>

<AdminDonorList/>

     </Col>

     </Row>

     <Row>


<Col>

<AdminReciverlist/>

</Col>

</Row>

    
    </>

  )
}

export default DashBoard