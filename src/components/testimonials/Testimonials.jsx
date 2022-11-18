import React, {useEffect} from 'react'
import "./testimonials.css"
import AOS from "aos"
import "aos/dist/aos.css"

import p1 from "../../imgs/p1.png"
import person1 from "../../imgs/person1.jpg"
import person2 from "../../imgs/person2.jpg"
import person3 from "../../imgs/person3.jpg"

const Testimonials = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh()
  })


  return (
    <div className='testimonial-section section'>
      <div className="col-1" data-aos="fade-right" data-aos-duration="2000">
        <div className="card">
          <img src={person3} alt="" />
          <h3 className='card-text'>KAIDEN PRITCHARD</h3>
          <p className='para-card'>Banker @City Bank</p>
        </div>
        <div className="card">
          <img src={person2} alt="" />
          <h3 className='card-text'>KATHRYN MEDINA</h3>
          <p className='para-card'>Author</p>
        </div>
        <div className="card">
          <img src={person1} alt="" />
          <h3 className='card-text'>TAMMY HARPER</h3>
          <p className='para-card'>Lead Recorder</p>
        </div>
        <div className="card">
          <img src={p1} alt="" />
          <h3 className='card-text'>ALISSA BROWN</h3>
          <p className='para-card'>Designer</p>
        </div>
      </div>
      <div className="col-2" data-aos="fade-left" data-aos-duration="2000">
        <p className="text-main">TESTIMONIALS</p>
        <h3 className="text-header">
          Our client says about us
        </h3>
        <p className="text-two">
          With a few basic questions,
          you can start and compare personalized quotes from top yop carriers.
        </p>
        <img src={person2} alt="" />
        <p className='text-three'>
          For artistes and poets,
          cheating space lamp,
          for we last but arrange height flow future initial place someone.
           It's not only about what you write but how you present it. 
        </p>
        <p className="text-name">KAIDEN PRITCHARD</p>
        <p>Banker @City Bank</p>
      </div>
    </div>
  )
}

export default Testimonials
