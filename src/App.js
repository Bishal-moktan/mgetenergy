import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar, Search } from "./components";
import { Contact, Home, About, Error, OnGridSolarPower, OffGridSolarSystem, HybridSolarSystem, SolarWaterPump, ResidentialSolar, CommercialSolar, IndustrialSolar } from "./pages";


function App() {
  const [show, setShow] = useState(false)
  return (
    <BrowserRouter>
    <Navbar setShow={setShow}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/OnGridSolarPowerSystem" element={<OnGridSolarPower />} />
        <Route path="/OffGridSolarPowerSystem" element={<OffGridSolarSystem />} />
        <Route path="/HybridSolarSystem" element={<HybridSolarSystem />} />
        <Route path="/SolarWaterPump" element={<SolarWaterPump />} />
        <Route path="/ResidentialSolar" element={<ResidentialSolar />} />
        <Route path="/CommercialSolar" element={<CommercialSolar />} />
        <Route path="/IndustrialSolar" element={<IndustrialSolar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    <Search show={show} setShow={setShow}/>  
    <Footer />
    </BrowserRouter>
  );
}

export default App;
