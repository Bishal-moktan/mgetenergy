import { useState } from "react"

import "./slider.css"
import image1 from "../../assests/images/1.gif"
import image2 from "../../assests/images/2.gif"
import image3 from "../../assests/images/3.gif"
import image4 from "../../assests/images/4.gif"

// import Swiper core and required modules
import { Autoplay} from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';





const Slider = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    window.addEventListener("resize", () => setScreenSize(window.innerWidth))
    let slidesPerView = 3
    if(screenSize < 990){
        slidesPerView = 2
    }
    if(screenSize < 600){
        slidesPerView = 1
    }
  return (
    <Swiper
      loop={true}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      autoplay={{
  delay: 2500,
  disableOnInteraction: false
}}
      className="container slide__container"
    >
    <SwiperSlide className="slide">
        <img src={image1} alt="image1" />
    </SwiperSlide>
    <SwiperSlide className="slide">
        <img src={image2} alt="image2" />
    </SwiperSlide>
    <SwiperSlide className="slide">
        <img src={image3} alt="image3" />
    </SwiperSlide>
    <SwiperSlide className="slide">
        <img src={image4} alt="image4" />
    </SwiperSlide>
    </Swiper>
  )
}
export default Slider