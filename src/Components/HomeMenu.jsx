import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Menu.css'

function HomeMenu() {




  return (

    <>
    <div style={{ width: '100%', height: '50px', backgroundColor: 'red', color: 'white' ,marginBottom:'1px' }} className='d-flex'>
    <Link id='links1' style={{textDecoration:'none',color: 'white' ,marginLeft:'500px',fontSize:"25px"}} to={'/login'}>Login</Link>  
    <Link id='links1' style={{textDecoration:'none',color: 'white' ,marginLeft:'100px',fontSize:"25px"}} to={'/donorlist'}>Donors</Link>
    <Link id='links1' style={{textDecoration:'none',color: 'white',marginLeft:'100px',fontSize:"25px"}} to={'/recevier'}>Recivers</Link>
    
    
    
</div>
    </>
  )
}

export default HomeMenu