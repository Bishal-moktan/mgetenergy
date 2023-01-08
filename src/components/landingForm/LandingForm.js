import "./landingForm.css"
import image from "../../assests/images/video.jpg"

const LandingForm = () => {
  return (
    <div className="landingForm">
        <div className="container landingForm__container">
            <div className="landingForm__image">
              <img src={image} alt="solar panel" />
            </div>
            <div className="landingForm__container-form">
            <h5>GET IN TOUCH</h5>
            <h2>Submit Enquiry For Solar Project</h2>
            <form className="form">
            <div className="form-inputs">
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                </div>
                    <input type="tel" placeholder="Phone Number" required/>
                    <textarea rows="5" placeholder="Your message here" required></textarea>
                <button>Submit Now</button>
            </form>
            </div>
        </div>
    </div>
  )
}
export default LandingForm