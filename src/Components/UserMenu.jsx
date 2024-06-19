import React from 'react'
import { Link } from 'react-router-dom'

function UserMenu() {


  return (
    <>
<div>
  
  <div>
  <button style={{backgroundColor:'red',color:'white'}} className='btn '>Log Out</button>
  </div>

<div className='d-flex justify-content-evenly mb-5'>
    <Link id='links' style={{textDecoration:'none'}} to={'/donorlist'}>Donors</Link>
    <Link id='links' style={{textDecoration:'none'}} to={'/recevier'}>Recivers</Link>
   

    
</div>

</div>
    </>
  )
}

export default UserMenu