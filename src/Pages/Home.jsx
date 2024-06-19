import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faDroplet } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import BloodCards from '../Components/BloodCards'
import Card from 'react-bootstrap/Card';
import '../Pages/CardHover.css'
import HomeMenu from '../Components/HomeMenu'
import { urgentReciverAPI } from '../Services/allAPI'




function Home() {

  const [isLogin, setlogin] = useState(false)
  const [urgntcards, setcards] = useState([])

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      setlogin(true)
    }
  },[])


  const getUrgent = async()=>{
    const result = await urgentReciverAPI()
   setcards(result.data)
  }
  console.log(urgntcards);

useEffect(()=>{
  getUrgent()
},[])

  return (

    <>

<HomeMenu/>
      <div style={{ width: '100%', height: '100vh', backgroundColor: 'red', color: 'white' }}>

        <div className="container-fluid rounded">
          <Row className='align-items-center p-5 '>

            <Col sm={12} md={6}>
              <h1 style={{}} className='me-2'><FontAwesomeIcon icon={faDroplet} />Blood Directory</h1>
              <p style={{ fontSize: '20px' }} className='mt-3'>
                Donating blood is a vital act that saves lives. It's needed for surgeries, accidents, and illnesses, but blood has a short shelf life. With less than 4% of people donating, there's a constant shortage. Consider donating - your generosity could be the difference for someone in need. </p>

              {/* login & register button */}
              <Link to={'/login'}>
                <button className='btn w-25 btn-info mt-3'>Get Started <FontAwesomeIcon icon={faArrowRight} /></button>
              </Link>

            </Col>
          </Row>

        </div>

      </div>





      <div style={{ color: 'white', background: 'red' }} className='justify-content-center align-items-center text-center mb-5'>
        <h1>Importance of Blood Donation</h1>
        <div className='d-flex justify-content-center '>
          <Card id='bloodcard' style={{ width: '18rem', margin: '15px' }}>

            <Card.Body>
              <Card.Title>What is Voluntary Blood Donation ?</Card.Title>
              <Card.Text>
                A person donates blood, not for money or other rewards, then it is known as voluntary blood donation. Voluntary blood donors are considered as the source of safe blood as they have a low chance of transmissible infections like HIV, Hepatitis B, Hepatitis C, Malaria, and Syphilis.

              </Card.Text>
              <button className='btn btn-success'>Donate Blood Now</button>
            </Card.Body>
          </Card>

          <Card id='bloodcard' style={{ width: '18rem', margin: '15px' }}>

            <Card.Body>
              <Card.Title>What is Platelet Donation ?</Card.Title>
              <Card.Text>
                Platelet donation is the process of giving platelets, a component of the blood. The platelet is selectively extracted from the donor blood through a cell separator. The rest of the blood is then transfused back to the donor. The donation can take around 60 to 90 minutes. Less than 10% of your platelet is only taken through the platelet donation. The donated platelets will be replaced within 24 to 48 hours

              </Card.Text>
              <button className='btn btn-success'>Learn More</button>
            </Card.Body>
          </Card>
        </div>
      </div>


      <div>
        <marquee scrollAmount={15}>
        
         {urgntcards?.length>0?
          <div className='d-flex mt-5 mb-5'>
          {urgntcards.map((item)=>(  <BloodCards pro={item} />))}

          </div>:null
          }

        </marquee>
      </div>
    </>

  )
}

export default Home