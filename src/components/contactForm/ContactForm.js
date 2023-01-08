import "./contactForm.css"
import {IoCall} from "react-icons/io5"
import {FaHome} from "react-icons/fa"
import {MdLocationPin} from "react-icons/md"

const ContactForm = () => {
  return (
    <section className="container contactForm__container">
        <div className="contactForm__container-links">
            <h5>LET'S TALK</h5>
            <h1>Get Consultation:</h1>
            <div className="links">
                <div className="link">
                <div className="icon-container">
                    <IoCall className="link-icon"/>
                </div>
                    <div className="link-info">

                    <h4 className="text-white">Phone:</h4>
                    <a href="tel:+91 98218 76325" className="text-white">+91 98218 76325</a>
                    </div>
                </div>
                <div className="link">
                <div className="icon-container">

                    <FaHome className="link-icon"/>
                </div>
                    <div className="link-info">

                    <h4 className="text-white">Phone:</h4>
                    <a href="mailto:wecare@mgetenergy.com" className="text-white">wecare@mgetenergy.com</a>
                    </div>
                </div>
                <div className="link">
                <div className="icon-container">

                    <MdLocationPin className="link-icon"/>
                </div>
                    <div className="link-info">

                    <h4 className="text-white">Address:</h4>
                    <p className="text-white">Greater Noida-201306, UP</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="contactForm__container-form">
            <h5>GET IN TOUCH</h5>
            <h1>Submit Enquiry For Solar Project</h1>
            <form className="form">
                <div className="form-inputs">
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                </div>
                    <input type="tel" placeholder="Phone Number" required/>
                    <textarea rows="10" placeholder="Your message here" required></textarea>
                <button>Submit Now</button>
            </form>
        </div>
    </section>
  )
}
export default ContactForm