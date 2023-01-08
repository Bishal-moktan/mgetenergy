import { Content, LandingForm, CTA, Scroll } from "../../components"
import img from "../../assests/images/ongrid.jpg"

const OnGridSolarPower = () => {
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
        title="On Grid Solar System"
        description="Grid-tied systems are the most common type of solar power system. Grid-tied connect to the electric grid, and allow user to use solar as well as electricity provided by the utility. When power demand is higher than the solar panels can provide, electricity from the utility provides the remaining electricity to the solar system.
On the other hand , when the solar panels are generating more electricity than the user needs, it sends the excess power to the utility grid. Also, for safety reason when the electricity grid is down, grid-tied systems will not operate."
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
export default OnGridSolarPower