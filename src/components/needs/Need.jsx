import React from 'react'
import "./need.css"

import card from "../../imgs/c2.jpg"

const Need = () => {
  return (
    <div className='need-section section'>
        <div className="col-1">
            <img src={card} alt="" />
        </div>
      <div className="col-2">
        <p className="need-text">OFFERS</p>
        <h3>Find top credit card from our partners</h3>
        <p>Easily compare credit cards and apply directly with the issuer</p>
        <button className="need-btn btn">See Offers</button>
      </div>
    </div>
  )
}

export default Need
