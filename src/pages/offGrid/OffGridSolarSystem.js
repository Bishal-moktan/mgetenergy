import { Content, LandingForm, CTA, Scroll } from "../../components"
import img from "../../assests/images/offgrid.jpg"

const OffGridSolarSystem = () => {
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
        title="Off Grid Solar System"
        description="An off-grid system is independent of the electric grid, but meets the user’s full electricity demand. To store excess power for use at night or when the system isn’t able to be fulfill electricity demand, a battery is connected, often supported by a back-up generator or other energy source.
Due to the complexity and reduced flexibility of off-grid systems, they are most commonly used for remote locations, or to power buildings or equipment with a consistent energy need."
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
export default OffGridSolarSystem