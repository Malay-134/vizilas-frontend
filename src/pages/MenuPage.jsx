import Footer from "../components/Footer"
import MenuBanner from "../Banner/MenuBanner"
import MenuSection from "../components/MenuSection"
import Navbar from "../components/Navbar"
import FoodMenu from "../components/FoodMenu"

const MenuPage = () => {
  return (
    <>
        <Navbar/>
        <MenuBanner/>
        <FoodMenu/>
        <Footer/>
    </>
  )
}

export default MenuPage