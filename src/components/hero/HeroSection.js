import heroImg from "../../assests/images/slider-1-1.jpg"
import "./heroSection.css"


// import Swiper core and required modules
import { Navigation} from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from "react";


const HeroSection = () => {
  const [showNavigation, setShowNavigation] = useState(true)
  const screenSize = window.innerWidth
  
  useState(() => {
    if(screenSize < 990){
    setShowNavigation(false)
  }
  if(screenSize >= 990){
    setShowNavigation(true)
  }
  }, [])
  return (
    <>
     <Swiper
      modules={[Navigation]}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation={showNavigation}
      className="heroSection"
    >
       <SwiperSlide>
        <img src={heroImg} alt="hero section" />
       </SwiperSlide>
    </Swiper>
    </>
  )
}
export default HeroSection