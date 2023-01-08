import { Card, Client, HeroSection, Services, Slider, Testinomials, Blog, CTA, Scroll} from "../../components"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Card />
      <Slider />
      <Services />
      <Testinomials />
      <Client />
      <Blog />
      <CTA 
        title="PLAN TO INSTALL SOLAR"
        info="Know more, Get Free Consultation!"
      />
      <Scroll />
    </div>
  )
}
export default Home