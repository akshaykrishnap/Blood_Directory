import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

import ReciversList from '../Components/ReciversList'
import UserMenu from '../Components/UserMenu'
import DonorsList from '../Components/DonorsList'

function UserDashBoard() {

     const [username ,setUserId] = useState("")

     



     useEffect(()=>{
   setUserId(JSON.parse(sessionStorage.getItem("existingUsers")).username)
     },[])

  return (
    <>
<UserMenu/>
<h1>Welcome <span className='text-danger'>{username}</span></h1>
     <Row>

   

     <Col>

{/* <ReciversList  /> */}


     </Col>

    <DonorsList/>

     </Row>
     
    </>
  )
}

export default UserDashBoard