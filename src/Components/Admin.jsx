import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { adminAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify'



function Admin() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        admin: "",
        email: "",
        password: ""
    })


    // function to login

    const handleAdminLogin = async (e) => {
        e.preventDefault()

        const { email, password } = userData
        if (!email || !password) {
            toast.info('Please fill the form completely')
        } else {
            const result = await adminAPI(userData)
            console.log(result);

            if (result.status==200) {
                toast.success("Admin Login Successfull")

                //adding data to session storage
                sessionStorage.setItem("existingUsers", JSON.stringify(result.data.existingUsers))
                sessionStorage.setItem("token", result.data.token)

                setUserData({
                    admin: "",
                    email: "",
                    password: ""
                })
                setTimeout(() => {
                    navigate('/dashboard')
                }, 2000)
            }
            else {
                toast.error("Incorrect email or password")
            }
        }

    }


    return (

        <>
            <div className='row mt-5'>
                <div className="col-md-4"></div>

                <div style={{ width: '600px', height: '450px', backgroundColor: 'red', color: 'white' }} className="col-md-4 border rounded">
                    <Link to={'/'} style={{ textDecoration: 'none' }} >
                        <h5 className='mb-3' style={{ color: 'red' }}> <FontAwesomeIcon className='me-3' icon={faArrowLeft} />Back to Home  </h5>
                    </ Link>
                    <h2 style={{ textAlign: 'center' }} className=''>Admin Login</h2>
                    <div className='d-flex'>
                        <label className='m-2' htmlFor="">Email:</label>
                        <input value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} className='form-control m-2' type="text" placeholder='Enter Email ID' />
                    </div>
                    <div className='d-flex'>
                        <label className='m-2' htmlFor="">Password:</label>
                        <input value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} className='form-control m-2' type="password" placeholder='Enter Password' />
                    </div>
                    <div style={{ textAlign: 'center', alignItems: 'center' }} >
                        <button onClick={handleAdminLogin} style={{ textAlign: 'center', alignItems: 'center' }} className='btn btn-outline-light'>Sign In</button>
                    </div>
                </div>

                <div className="col-md-4"></div>
            </div>

            <ToastContainer theme='colored' position='top-center' autoClose={1500} />

        </>
    )
}

export default Admin