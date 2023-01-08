import { ContactForm, Landing, CTA, Scroll } from "../../components"
import "./contact.css"

const Contact = () => {
  return (
    <div className="contant__page">
      <Landing page="Contact" />
      <ContactForm />
      <CTA 
        title="PLAN TO START A PROJECT"
        info="Know more about installation. Get Consultancy!"
      />
      <Scroll />
    </div>
  )
}
export default Contact