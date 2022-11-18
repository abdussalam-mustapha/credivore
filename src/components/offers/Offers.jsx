import React, { useEffect } from 'react'
import Brands from '../brands/Brands'
import Offercard from './servicecomponents/Offercard'
import AOS from "aos"
import "aos/dist/aos.css"


const Offers = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh()
  })


  return (
    <div className='offer-container'>
        <div className='offer-content center'>
            <p className="text-main" data-aos="fade-up" data-aos-duration="2000">SERVICES</p>
            <h3 className="text-header" data-aos="fade-up" data-aos-duration="2500">
                Find the financial service you need
            </h3>
            <p className="text-two" data-aos="fade-up" data-aos-duration="3000">
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