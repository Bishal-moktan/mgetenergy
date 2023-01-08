import HeadingLine from "../headingLine/HeadingLine"
import "./services.css"

const Services = () => {
  const services = [
    {
        title: "Solar for Housing",
        description: "In residential rooftop as the energy consumption increases, tariff increases in corresponding slabs. For residential one can have a grid-connected system – generating required electricity and exporting excess power generated to the grid (through netmetering) is offered by a state government for customers."
    },
    {
        title: "Solar for Industries",
        description: "Almost all the industries are suitable for solar power system installation, but warehouse is one that is the better suited than almost all other industries beacuse of massive flat roof surface with less aggressive pitch. Warehouse with refrigerated use more power, solar power system stand huge saving on electric bills."
    },
    {
        title: "Solar for Agriculture",
        description: "Solar power is most commonly used to generate electricity for farm houses, dairy, poultry farms and for solar irrigation. Solar photovoltaic water pumping systems are becoming more and more popular, solar pump run directly when the sun is shining, ensuring that they work hardest in the summer months when they needed."
    },
    {
        title: "Solar for HealthCare",
        description: "Healthcare business are open 24/7, with critical component and medical equipment such as CT scanners, MRI machines consuming significant amounts of energy, heating and air conditioning systems contributing to their high utility bills. Solar energy can be stored in batteries, protecting from frequent power cuts."
    },
    {
        title: "Solar for IT Company",
        description: "Electricity prices keep on fluctuating from time to time, so its is difficult to calculate the cost of electricity for IT companies. However, when it comes to electricity for solar rooftop its a secure investment for the next 25 years, the government offers tax credits to those who install rooftop solar panels."
    },
    {
        title: "Solar for Institute",
        description: "Most school/college/university/ buildings have large, flat rooftops that are ideal for rooftop solar photovoltaic system. Also these institutions have parking lots which could be put to productive use by installing solar canopies that harness the sun’s power and offer the added benefit of shading parked vehicles."
    },
  ]
  return (
    <section className="services__container">
        <div className="container">

        <h4>SERVICES</h4>
        <h1>Services We Offers</h1>

        <HeadingLine />
        <div className="services">

        {services.map((service, index) => {
            const {title, description} = service
            return (
                <div className="service" key={index}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
            )
        })}
        </div>
        </div>
    </section>
  )
}
export default Services