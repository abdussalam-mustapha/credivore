import React from 'react'
import Brands from '../brands/Brands'
import Offercard from './servicecomponents/Offercard'


const Offers = () => {
  return (
    <div className='offer-container'>
        <div className='offer-content center'>
            <p className="text-main">SERVICES</p>
            <h3 className="text-header">
                Find the financial service you need
            </h3>
            <p className="text-two">
            Get all the financial services you need and save
           yourself from the stress that comes with having an unreliable service platform. <br />
           Join us today to start the good life
            </p>

        </div>
        <Offercard />
        <Brands />
    </div>
  )
}

export default Offers