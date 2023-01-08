import { Content, LandingForm,CTA, Scroll } from "../../components"
import img from "../../assests/images/residential.jpg"

const ResidentialSolar = () => {
    const services = [
        {
            title: "Residential Solar System",
            path: "ResidentialSolar"
        },
        {
            title: "Commercial Solar System",
            path: "CommercialSolar"
        },
        {
            title: "Industrial Solar System",
            path: "IndustrialSolar"
        },  
    ]
  return (
    <div>
        <LandingForm />
        <Content 
            title="Residential Solar System"
            description="Maxoptimus has designed and delivered solar energy solutions as an alternate source of energy(on-grid, off-grid/hybrid battery storage technology) to MNC, PSU's, nuclear power station, hydroelectric power startion, hospital, institutions and residentials for project size ranging from 1-kw to utility scale.

Solar energy system is a long term investment. Safegaurding, it means selecting solution provider that provides reliable solution with exceptional quality and modular design so that the solar energy system can be extended in future as the need grows. Our solar energy solutions provide reliable system and annual energy yeild that are exceptionally high."
            img={img}
            items={services}
        />
          <CTA
        title="PLAN TO START A FRANCHISE BUSINESS"
        info="Our Experts Ready to Help You, Get Consultation"
      />
      <Scroll />
    </div>
  )
}
export default ResidentialSolar