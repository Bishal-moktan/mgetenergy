import { Content, LandingForm,CTA, Scroll } from "../../components"
import img from "../../assests/images/hybrid.jpg"

const HybridSolarSystem = () => {
  const solutions = [
    {
     title:"On-grid Solar System",
     path: "OnGridSolarPowerSystem"
    },
    {
     title:"Off-grid Solar System",
     path: "OffGridSolarPowerSystem"
    },
    {
     title:"Hybrid Solar System",
     path: "HybridSolarSystem"
    },
    {
     title:"Solar Water Pump",
     path: "SolarWaterPump"
    },
  ]
  return (
    <div>
      <LandingForm />
      <Content
        title="Hybrid Solar System"
        description="A hybrid solar power system fundamentally produces electricity from your solar panels during times of good sunlight or daytime and stores it in a battery energy storage solution. When your battery is fully charged, you can utilize any extra solar power to power your home's appliances. If there is still any excess power left, it can be exported to the government power utility grid.

The power backup capability of a hybrid solar system is its most significant advantage. It implies that, even in the event of a power outage, you can continue to use electricity uninterrupted.

When your utility grid is shut off, you will use the stored energy in your battery as a source of backup power. All the advantages of a grid-tied system are available with hybrid solar systems, which also offer power backup in the event of a power outage."
img={img}
items={solutions}

      />
        <CTA
        title="PLAN TO START A FRANCHISE BUSINESS"
        info="Our Experts Ready to Help You, Get Consultation"
      />
      <Scroll />
    </div>
  )
}
export default HybridSolarSystem