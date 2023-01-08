import "./client.css"
import image1 from "../../assests/images/partner1.png"
import image2 from "../../assests/images/partner2.png"
import image3 from "../../assests/images/partner3.png"
import image4 from "../../assests/images/partner4.png"
import image5 from "../../assests/images/partner5.png"
import image6 from "../../assests/images/partner6.png"
import image7 from "../../assests/images/partner7.png"
import image10 from "../../assests/images/partner10.png"

const Client = () => {
  return (
    <section className="container__client">
        <div className="container">
            <h5>CLIENTS</h5>
            <h1>Our Clients</h1>

            <div className="container__client-images">
            <div className="image">
                <img src={image1} alt="client" />
            </div>
            <div className="image">
                <img src={image2} alt="client" />
            </div>
            <div className="image">
                <img src={image3} alt="client" />
            </div>
            <div className="image">
                <img src={image4} alt="client" />
            </div>
            <div className="image">
                <img src={image5} alt="client" />
            </div>
            <div className="image">
                <img src={image6} alt="client" />
            </div>
            <div className="image">
                <img src={image7} alt="client" />
            </div>
            <div className="image">
                <img src={image10} alt="client" />
            </div>
            <div className="image">
                <img src={image1} alt="client" />
            </div>
            <div className="image">
                <img src={image2} alt="client" />
            </div>
            <div className="image">
                <img src={image3} alt="client" />
            </div>
            <div className="image">
                <img src={image4} alt="client" />
            </div>
            </div>
        </div>
    </section>
  )
}
export default Client