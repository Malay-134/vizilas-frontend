import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Reservation from "../components/Reservation"
import ReservationBanner from "../Banner/ReservationBanner"

const BookingPage = () => {
  return (
    <>
        <Navbar/>
        <ReservationBanner/>
        <Reservation/>
        <Footer/>
    </>
  )
}

export default BookingPage;