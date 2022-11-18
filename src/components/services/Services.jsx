import React from 'react'
import "./services.css"


import Card from './offersubcomponents/Card'

const Services = () => {
  return (
    <div className='service-section'>
      <div className="header-text center">
        <p className='text-main'>SERVICES</p>
        <h3 className='text-header'>Find the financial services you need</h3>
        <p className='text-two'>
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
