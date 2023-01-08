import "./aboutSection.css"
import image from "../../assests/images/about-3.png"

const AboutSection = () => {
  return (
    <section className="aboutSection">
        <div className="container aboutSection__container">
            <div className="aboutSection__image">
                <img src={image} alt="about section" />
            </div>
            <div className="aboutSection__description">
                <h5>ABOUT US</h5>
                <h4 className="text-light">MGET is a turn-key solar green renewable energy technology integrator, designer, and installer. We meticulously study our client’s individual needs and based on that come up with customized solutions that are low-cost, robust, and reliable. Our low carbon greener electricity solutions use the latest and innovative technologies for residential, industrial, and commercial sectors available in the market.</h4>
                <p>With two offices covering all of India, MGET is a certified and recognized start-up by DIPP (Department of Industrial Policy & Promotion), Ministry of Commerce & Industry, Government of India. Certificate No.: DIPP3122.</p>
                <p>Once the solar power system is installed, our job isn't finished; with MGET, you acquire a partner in energy independence for life.</p>
                <p>We are an integrator and installer of renewable energy technology, assisting our clients in utilizing green technologies both new and old to better their lives, manage their finances, and help them to become more energy efficient. With us, it is a lifetime endeavour of providing quality services to you.</p>
            </div>
        </div>
    </section>
  )
}
export default AboutSection