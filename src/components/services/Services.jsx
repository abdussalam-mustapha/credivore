import React, { useEffect } from 'react'
import "./services.css"
import AOS from "aos"
import "aos/dist/aos.css"


import Card from './offersubcomponents/Card'

const Services = () => {

  useEffect(() =>{
    AOS.init();
    AOS.refresh()
  })



  return (
    <div className='service-section'>
      <div className="header-text center" data-aos="fade-up" data-aos-duration="1500">
        <p className='text-main' data-aos="fade-up" data-aos-duration="2000">SERVICES</p>
        <h3 className='text-header' data-aos="fade-up" data-aos-duration="2500">Find the financial services you need</h3>
        <p className='text-two' data-aos="fade-up" data-aos-duration="3000">
          Get all the financial services you need and save
          yourself from the stress that comes with having an unreliable service platform. <br />
          Join us today to start the good life
        </p>
      </div>
      <Card />
    </div>
  )
}

export default Services
