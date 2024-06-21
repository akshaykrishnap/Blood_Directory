import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import {logoutResponseContext} from '../Contex/ContexShare'

function UserMenu() {

  const {AuthorToken,setAuthorToken} = useContext(logoutResponseContext)

  const navigate =useNavigate()
  const handleLogOut = ()=>{
    sessionStorage.removeItem("existingUsers")
    sessionStorage.removeItem("token")
    setAuthorToken(false)
    navigate('/')
    toast.error('You Are Log Out')
  }

  return (
    <>
<div>
  
  <div>
  <button style={{backgroundColor:'red',color:'white'}} onClick={handleLogOut} className='btn '>Log Out</button>
  </div>

<div className='d-flex justify-content-evenly mb-5'>
    <Link id='links' style={{textDecoration:'none'}} to={'/donorlist'}>Donors</Link>
    <Link id='links' style={{textDecoration:'none'}} to={'/recevier'}>Recivers</Link>
   

    
</div>

</div>
<ToastContainer theme='colored' position='top-center' autoClose={1500} />
    </>
  )
}

export default UserMenu