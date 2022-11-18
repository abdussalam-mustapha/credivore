import React from 'react'
import "./brands.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import amazon from "../../imgs/amazon.png";
import insta from "../../imgs/insta.png";
import chanel from "../../imgs/chanel.png";
import lego from "../../imgs/lego.png";
import puma from "../../imgs/puma.png"



const Brands = () => {
  

  return (
    <div className='brand-part'>
      <div className='brand-section center'>
        <p className='text-main'>BRANDS</p>
        <h3 className='text-header'>
            Get matched with the life insurance policy that works best for you
        </h3>
        <p className='text-two'>
            With a few basi questions, you can search and compare personalized quotes from top carriers
        </p>
     </div>

     <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={2}
      className="mySwiper"
    >
      
      <SwiperSlide>
        <img src={amazon} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={insta} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={chanel} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={lego} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={puma} alt="" />
      </SwiperSlide>
      
    </Swiper>
     
     
     <button className="btn">Get Started</button>
    </div>
  )
}

export default Brands
