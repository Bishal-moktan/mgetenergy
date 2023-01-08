import { Link } from "react-router-dom"
import "./cta.css"

const CTA = ({title, info}) => {
  return (
    <section className="cta">
        <div className="container cta__container">
            <div className="text">
                <h4>{title}</h4>
                <h1>{info}</h1>
            </div>
            <Link to="contact" className="button">GET IN TOUCH</Link>
        </div>
    </section>
  )
}
export default CTA