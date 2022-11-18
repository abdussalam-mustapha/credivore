import React, { useEffect } from 'react'
import "./hero.css"
import AOS from "aos"
import "aos/dist/aos.css"

import colImg from "../../../imgs/p1.png"

const Hero = () => {

   useEffect(() => {
    AOS.init();
    AOS.refresh()
   })
 

  return (
    <div className='heroSection'>
      <div className='col-1'>
        <p className="about-text" data-aos="fade-left" data-aos-duration="1000">ABOUT</p>
        <h2 className="para-head" data-aos="fade-left" data-aos-duration="1500">Your credit scores should be free.</h2>
        <p className="info-text" data-aos="fade-left" data-aos-duration="1800">
         Lorem ipsum dolor sit amet consectetur
         adipisicing elit. <br/>
         Officia perspiciatis beatae quasi deserunt! Laboriosam, assumenda.
         </p>
         <div className="inputDiv">
          <select name="dropdown" id="" data-aos="fade-up" data-aos-duration="1000">
            <option value="payment">payment</option>
            <option value="payment">payment</option>
            <option value="payment">payment</option>
          </select>
           <button className='btn' data-aos="fade-up" data-aos-duration="1000">Continue</button>
         </div>
      </div>
      <div className='col-2'>
         <img src={colImg} alt="" data-aos="fade-right" data-aos-duration="2000"/>
      </div>
    </div>
  )
}

export default Hero
