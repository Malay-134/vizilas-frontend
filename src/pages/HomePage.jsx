import AboutSection from '../components/AboutStart'
import MenuSection from '../components/MenuSection'
import Reservation from '../components/Reservation'
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
        <Footer/>
    </>
  )
}

export default HomePage