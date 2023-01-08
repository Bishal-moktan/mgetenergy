import "./about.css"
import { AboutSection, CTA, Landing, Scroll, WhyUs } from "../../components"

const About = () => {
  return (
    <div className="about__page">
      <Landing page="About"/>
      <AboutSection />
      <WhyUs />
      <CTA 
        title="PLAN TO INSTALL SOLAR"
        info="Know more, Get Free Consultation!"
      />
      <Scroll />
    </div>
  )
}
export default About