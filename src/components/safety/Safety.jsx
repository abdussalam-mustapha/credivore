import React from 'react'
import "./safety.css"

import insurance from "../../imgs/insurance.jpg"

const Safety = () => {
  return (
    <div className='safety-section section'>
      <div className="col-1">
        <p className="text-main">SAFETY</p>
        <h3 className="text-header">
            Your card scores always safe and secure
        </h3>
        <div className="safety-text">
            <div className="textDiv">
                <h3>Cryptocoin</h3>
                <p>We use 256-bit encrytption to secure your information</p>
            </div>
            <div className="textDiv">
                <h3>Higher Security</h3>
                <p>A higher security standard than many banks</p>
            </div>
        </div>
        <button className="btn">See Offers</button>
      </div>
      <div className="col-2">
        <img src={insurance} alt="" />
      </div>
    </div>
  )
}

export default Safety
