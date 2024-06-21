import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import DashBoard from './Pages/DashBoard'
import Login from './Components/Login'
import Footer from './Components/Footer'
import '../src/bootstrap.min.css'
import Inventor from  '../src/Components/Inventor'
import DonorsList from './Components/DonorsList'
import ReciversList from './Components/ReciversList'
import Admin from './Components/Admin'
import UserDashBoard from './Pages/UserDashBoard'
import AdminReciverlist from './Components/AdminReciverlist'
import { useContext } from 'react'
import { logoutResponseContext } from './Contex/ContexShare'
import AdminDonorList from './Components/AdminDonorList'



function App() {

  const {AuthorToken,setAuthorToken} = useContext(logoutResponseContext)


  return (

    <>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/dashboard' element={<DashBoard/>}/>
<Route path='/userdashboard' element={AuthorToken?<UserDashBoard/>:<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Login  register/>}/>
<Route path='/inventory' element={<Inventor/>}/>
<Route path='/donorlist' element={<DonorsList/>}/>
<Route path='/recevier' element={<ReciversList/>}/>
<Route path='/adminDonorList' element={<AdminDonorList/>}/>
<Route path='/adminReciverList' element={<AdminReciverlist/>}/>
<Route path='/admin' element={<Admin/>}/>
</Routes>
<Footer/>



    </>

  )
}

export default App
