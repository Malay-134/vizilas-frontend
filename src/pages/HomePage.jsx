import AboutSection from '../components/AboutStart'
import MenuSection from '../components/MenuSection'
import Reservation from '../components/Reservation'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AboutSection/>
        <MenuSection/>
        <Reservation/>
        <Testimonial/>
        <Footer/>
    </>
  )
}

export default HomePage