import React from 'react'
import "./hero.css"

import colImg from "../../../imgs/p1.png"

const Hero = () => {
  return (
    <div className='heroSection'>
      <div className='col-1'>
        <p className="about-text">ABOUT</p>
        <h2 className="para-head">Your credit scores should be free.</h2>
        <p className="info-text">
         Lorem ipsum dolor sit amet consectetur
         adipisicing elit. <br/>
         Officia perspiciatis beatae quasi deserunt! Laboriosam, assumenda.
         </p>
         <div className="inputDiv">
          <select name="dropdown" id="">
            <option value="payment">payment</option>
            <option value="payment">payment</option>
            <option value="payment">payment</option>
          </select>
           <button className='btn'>Continue</button>
         </div>
      </div>
      <div className='col-2'>
         <img src={colImg} alt="" />
      </div>
    </div>
  )
}

export default Hero
