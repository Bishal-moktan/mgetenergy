import { FaCheckCircle, FaFilePdf, FaPhoneAlt } from "react-icons/fa"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"
import "./content.css"
const Content = ({title, img, description, items}) => {
  return (
    <div className="container content__container">
        <div className="content__container-desc">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="content__container-img">
                <img src={img} alt={title} />
            </div>
            <h1>Why MAXOPTIMUS Solar System?</h1>
            <p>Our job isn’t done when the solar power system is installed, with MOSST you gain an energy independence partner for life. We are renewable energy technology integrator company, helping our customers to take advantage of energy technologies new and old to improve their lives, manage their finance and become more efficient. It’s a lifelong endeavour of providing services.</p>
            <h1>Why Work With Us?</h1>
            <ul>
            <li><FaCheckCircle className="check-icon"/>  Years of Project Experience </li>
            <li><FaCheckCircle className="check-icon"/>   High Quality Installation Work </li>
            <li><FaCheckCircle className="check-icon"/>   Trusted by Large Enterprises</li>
            <li><FaCheckCircle className="check-icon"/>  Free Consultation with Reliability  </li>
            <li><FaCheckCircle className="check-icon"/>  India's Leading Solar System Instalattion Company </li>
        </ul>
        </div>
        <div className="content__container-resources">
            <div className="content__container-navigator">
                {items.map((item, index) => {
                    return (
                        <div key={index}>
                        <h3>
                        <Link to={`/${item.path}`} className="navigate-title">{item.title} </Link> </h3>
                            <MdKeyboardArrowRight />
                        </div>
                    )
                })}

                </div>

            <div className="content__container-contact">
                <div className="phone-icon">
                <FaPhoneAlt />
                </div>
                <h2>Have any Questions? </h2>
                <h2>Call us Today!</h2>
                <a href="tel:+91 98218 76325">+91 98218 76325</a>
            </div>

            <div className="content__container-brochures">
                <h2>Brochures</h2>
                <p>For more information about the projects and services, you can click here:</p>
                <button>Download Now <FaFilePdf /> </button>
            </div>
        </div>
        </div>

  )
}
export default Content