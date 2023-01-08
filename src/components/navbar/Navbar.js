import { useState } from "react"
import {BsEnvelope, BsFacebook, BsInstagram, BsPinterest, BsTwitter} from "react-icons/bs"
import {FiPhoneCall} from "react-icons/fi"
import {SlLocationPin} from "react-icons/sl"
import {FaBars} from "react-icons/fa"
import {AiOutlineClockCircle, AiOutlineSearch} from "react-icons/ai"
import { Link } from "react-router-dom"

import "./navbar.css"
import logo from "../../assests/images/logo-dark.png"
import DropDown from "../dropDown/DropDown"

const Navbar = ({setShow}) => {
  const [showLinks, setShowLinks] = useState(false)
  const [showSolution, setShowSolution] = useState('+')
  const [showServices, setShowServices] = useState('+')
  const solutions = [
    {
     title:"On-grid Solar System",
     path: "OnGridSolarPowerSystem"
    },
    {
     title:"Off-grid Solar System",
     path: "OffGridSolarPowerSystem"
    },
    {
     title:"Hybrid Solar System",
     path: "HybridSolarSystem"
    },
    {
     title:"Solar Water Pump",
     path: "SolarWaterPump"
    },
  ]

  const services = [
    {
      title:"Residential Solar",
      path: "ResidentialSolar"
     },
    {
      title:"Commercial Solar",
      path: "CommercialSolar"
     },
    {
      title: "Industrial Solar",
      path: "IndustrialSolar"
     },
  ]
  return (
    <nav className="navbar" id="nav">
      <div className="top">
        <ul className="navbar__contact">
        <li>
        <a href="mailto:www.mgetenergy.com">
        <BsEnvelope className="navbar__contact-icons"/>
        www.mgetenergy.com
        </a>
        </li>
        <li>
        <a href="tel:+91 98218 76325">
        <FiPhoneCall className="navbar__contact-icons"/>
        +91 98218 76325
        </a>
        </li>
        <li>
        <SlLocationPin className="navbar__contact-icons"/>
        Greater Noida-201306, UP
                                                 
        <SlLocationPin className="navbar__contact-icons"/>
        Mumbai-400059, MH                
        </li>
        </ul>
    <ul className="navbar__socials">
      <li>
        <AiOutlineClockCircle className="navbar__socials-icon"/>
        09:30am-6:00pm
      </li>
      <li>
        <a href="https://www.mosst.co.in/blog/" target="_blank">Blog</a>
      </li>
      <li className="navbar__socials-icons">
        <BsFacebook />
        <BsTwitter />
        <BsPinterest />
        <BsInstagram />
      </li>
    </ul>
      </div>
      <div className="bottom">
      <div className="toggle-btn" onClick={() => setShowLinks(!showLinks)}>
        <FaBars />
      </div>
      <div className="nav-logo">
        <img src={logo} alt="nav logo" />
      </div>
      <div className="links">

      <ul className={showLinks? "nav-links show":"nav-links"}>
      <Link to="/" className="link">Home</Link>
      <Link to="/about" className="link">About Us</Link>
      <DropDown
      name="Solutions"
      items={solutions}
      setShow={setShowSolution}
      show={showSolution}
    />
      <DropDown
      name="Services"
      items={services}
      setShow={setShowServices}
      show={showServices}
    />
      <Link to="/contact" className="link">Contact</Link>
      </ul>
      <AiOutlineSearch className="search-icon" onClick={() => setShow(true)}/>
      </div>
      </div>
    </nav>
  )
}
export default Navbar