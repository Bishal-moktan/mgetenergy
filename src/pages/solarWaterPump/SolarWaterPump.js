import { Content, LandingForm,CTA, Scroll } from "../../components"
import img from "../../assests/images/solar.jpg"
const SolarWaterPump = () => {
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
        title="Solar Water Pump"
        description="Solar water pumps work on the power produced by solar PV (photovoltaic) panels. Solar energy is converted into electricity by the photovoltaic array, which powers the motor pump system. The pumping system uses ponds, bore wells, open well canals, etc. to pull water. Instead of using fossil fuels or a grid supply, solar water pumps use solar energy to power their motors. We offer a selection of solar water pumps in both DC and AC. These pumps can be used for irrigation, agriculture, livestock, farmhouses, recreational swimming pool circulation pumps, household drinking water supply or pressure boosting, and industrial water supply for enterprises and communities."
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
export default SolarWaterPump