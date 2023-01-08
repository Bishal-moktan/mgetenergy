import {
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";
import {SiMinutemailer} from "react-icons/si"
import { Link } from "react-router-dom";
import logo from "../../assests/images/logo-dark.png";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__socials">
            <img src={logo} alt="logo" className="logo" />
            <p>
              Maxoptimus is a turnkey, renewable energy solution provider;
              providing cleaner, greener electricity solutions that is most
              reliable and cost effective "Unlimited Clean Energy Forever".
            </p>
            <div className="icons">
              <BsFacebook />
              <BsTwitter />
              <BsPinterest />
              <BsInstagram />
            </div>
          </div>
          <div className="footer__services">
            <h2>Services Offering</h2>
            <ul>
              <li className="text-light">Solar for Housing</li>
              <li className="text-light">Solar for Industries</li>
              <li className="text-light">Solar for Agriculture</li>
              <li className="text-light">Solar for Healthcare</li>
              <li className="text-light">Solar for IT Company</li>
              <li className="text-light">Solar for Institutes</li>
            </ul>
          </div>
          <div className="footer__contact">
            <h2>Contact Information</h2>
            <ul>
              <li>
                <SlLocationPin className="footer__contact-icon"/>
                <span className="text-light">Greater Noida - 201306, UP</span>
              </li>
              <li>
                <SlLocationPin className="footer__contact-icon"/>
                <span className="text-light">Mumbai - 400059, MH</span>
              </li>
              <li>
                <FiPhoneCall className="footer__contact-icon"/>
                <a href="tel:+91 98186 66325" className="text-light">+91 98186 66325</a>
              </li>
              <li>
                <FiPhoneCall className="footer__contact-icon"/>
                <a href="tel:+91 98186 66325" className="text-light">+91 98186 66325</a>
              </li>
              <li>
                <BsEnvelope className="footer__contact-icon"/>
                <a href="mailto:wecare@mgetenergy.com" className="text-light">wecare@mgetenergy.com</a>
              </li>
              <li>
                <AiOutlineClockCircle className="footer__contact-icon"/>
                <span className="text-light">Opening Hours: 09:30 - 18:00</span>
              </li>
            </ul>
          </div>
          <div className="footer__newsletter">
          <h2>News Letter</h2>
            <p>To suscribe our newslaters and latest updates, enter your email address.</p>
            <div className="form">
              <input type="text" placeholder="Your email address"/>
              <div className="mail-icon">
              <SiMinutemailer />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-copyright">
            <p>&copy; ALL Reserved | MAXOPTIMUS GREEN ENERGY TECHNOLOGY PVT. LTD</p>
          </div>
          <div className="footer__bottom-links">
            <Link>Services</Link>
            <Link>FAQ</Link>
            <Link>Testinomial</Link>
            <Link>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
