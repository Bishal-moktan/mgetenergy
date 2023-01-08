import { useState } from "react"


import "./blogs.css"
import image1 from "../../assests/images/1.gif"
import image2 from "../../assests/images/2.gif"
import image3 from "../../assests/images/3.gif"
import image4 from "../../assests/images/4.gif"
import image5 from "../../assests/images/6.gif"
import image6 from "../../assests/images/7.gif"
import { BsCalendar2Check } from "react-icons/bs"
import { BiUser } from "react-icons/bi"

// import Swiper core and required modules
import { Autoplay} from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import HeadingLine from "../headingLine/HeadingLine"

const Blog = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth)
    window.addEventListener("resize", () => setScreenSize(window.innerWidth))
    let slidesPerView = 3
    if(screenSize < 990){
        slidesPerView = 2
    }
    if(screenSize < 600){
        slidesPerView = 1
    }
  const blog = [
    {
      img: image1,
      tag: "Current Reseaches in Solar",
      date: "20 Decemeber 2021",
      calendarIcon: <BsCalendar2Check className="blog-icon"/>,
      userIcon: <BiUser className="blog-icon"/>,
      question: "What is the current research on Solar Energy?",
      answer: "The Solar Futures Study is of report that explores the role..."
    },
    {
      img: image2,
      tag: "Solar Energy's importance in future",
      date: "22 Decemeber 2020",
      calendarIcon: <BsCalendar2Check className="blog-icon"/>,
      userIcon: <BiUser className="blog-icon" />,
      question: "Why is solar energy important in future?",
      answer: "Solar will have become the most important source of energy..."
    },
    {
      img: image3,
      tag: "Solar Cost for House",
      date: "26 Decemeber 2020",
      calendarIcon: <BsCalendar2Check className="blog-icon"/>,
      userIcon: <BiUser className="blog-icon" />,
      question: "How much does it cost to install solar panels for a house in India?",
      answer: "Solar panel costs depending upon the type and model..."
    },
    {
      img: image4,
      tag: "Solar Off-grid and On-grid System ",
      date: "28 Decemeber 2020",
      calendarIcon: <BsCalendar2Check className="blog-icon"/>,
      userIcon: <BiUser className="blog-icon" />,
      question: "Which is better Off-grid or On-grid solar system",
      answer: "Off-grid systems allow you to store and save your solar power.."
    },
    {
      img: image5,
      tag: "Solar Installation Requirements",
      date: "30 Decemeber 2020",
      calendarIcon: <BsCalendar2Check className="blog-icon"/>,
      userIcon: <BiUser className="blog-icon" />,
      question: "What do I need to install a rooftop solar system?",
      answer: "All you need to qualify for a solar system is empty space..."
    },
    {
      img: image6,
      tag: "New Inventions in Solar",
      date: "16 Nov 2021",
      calendarIcon: <BsCalendar2Check className="blog-icon"/>,
      userIcon: <BiUser className="blog-icon" />,
      question: "What are new inventions in solar energy?",
      answer: "Here is the comprehensive list of some solar powered inventions..."
    },
  ]
  return (
    <section className="container blog__container">
        <h4>BLOGS</h4>
        <h1>Read our latest news and blogs</h1>
        <HeadingLine />
    <Swiper
    loop={true}
    spaceBetween={50}
    slidesPerView={slidesPerView}
    autoplay={{
delay: 2500,
disableOnInteraction: false
}}
  >
  {blog.map((item, index) => {
    const {img, tag, date, calendarIcon, userIcon, question, answer} = item
    return (
      <SwiperSlide key={index} className="blog__container-card">
        <header>
          <img src={img} alt="tag" />
          <span className="tag">{tag}</span>
          <div className="info">
          <div className="info-details">

            {calendarIcon}
            <p>{date}</p>
          </div>
          <div className="info-details">

            {userIcon}
            <p>admin</p>
          </div>
          </div>
          <div className="blog__container-content">
            <h2>{question}</h2>
            <h4>{answer}</h4>
          <h3 className="btn">Learn more > </h3>
          </div>
        </header>
      </SwiperSlide>
    )
  })}
  </Swiper>
  </section>
)
}
export default Blog