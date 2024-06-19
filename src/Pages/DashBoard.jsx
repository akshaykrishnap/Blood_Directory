import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ReciversList from '../Components/ReciversList'

import DonorsList from '../Components/DonorsList'
import MenuList from '../Components/MenuList'




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

<DonorsList/>

     </Col>

     </Row>

     <Row>

<Col>

<ReciversList/>

</Col>

</Row>

    
    </>

  )
}

export default DashBoard