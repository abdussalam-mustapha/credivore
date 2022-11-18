import React, { useEffect } from 'react'
import "./need.css"
import AOS from "aos"
import "aos/dist/aos.css"

import card from "../../imgs/c2.jpg"

const Need = () => {


  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, [])


  return (
    <div className='need-section section'>
        <div className="col-1" data-aos="fade-left" data-aos-duration="2000">
            <img src={card} alt="" />
        </div>
      <div className="col-2" data-aos="fade-right" data-aos-duration="2000">
        <p className="need-text">OFFERS</p>
        <h3>Find top credit card from our partners</h3>
        <p>Easily compare credit cards and apply directly with the issuer</p>
        <button className="need-btn btn">See Offers</button>
      </div>
    </div>
  )
}

export default Need
