// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <>
//       {/* Footer Start */}
//       <div
//         className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
//         data-wow-delay="0.1s"
//       >
//         <div className="container py-5">
//           <div className="row row-cols-1 row-cols-md-3 g-5 text-start">
            
//             {/* Company Section */}
//             <div className="col d-flex flex-column">
//               <h4 style={{color:"#FEA116"}} className="footer-line ff-secondary fw-normal mb-4">
//                 Company
//               </h4>
//               <Link style={{textDecoration:"none"}} to="/about" className="btn btn-link text-light">
//                 About Us
//               </Link>
//               <Link style={{textDecoration:"none"}} to="/contact" className="btn btn-link text-light">
//                 Contact Us
//               </Link>
//               <Link style={{textDecoration:"none"}} to="/booking" className="btn btn-link text-light">
//                 Reservation
//               </Link>
//               <Link style={{textDecoration:"none"}} to="/menu" className="btn btn-link text-light">
//                 Menu
//               </Link>
//               </div>

//             {/* Contact Section */}
//             <div className="col d-flex flex-column">
//               <h4 style={{color:"#FEA116"}} className="footer-line ff-secondary fw-normal mb-4">
//                 Contact
//               </h4>
//               <p className="mb-2">
//                 <i className="fa fa-map-marker-alt me-3"></i>
//                 Taikos pr. 81, Klaipėda, 94114 Klaipėdos m. sav.
//               </p>
//               <p className="mb-2">
//                 <i className="fa fa-phone-alt me-3"></i>+37065922833
//               </p>
//               <p className="mb-2">
//                 <i className="fa fa-envelope me-3"></i>
//                 administracija@vizilasrestobaras.com
//               </p>
//               <div className="d-flex pt-2">
//                 <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/share/1Ap256eGdd/">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/vizilas_restobaras/">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//               </div>
//             </div>

//             {/* Opening Section */}
//             <div className="col d-flex flex-column">
//               <h4 style={{color:"#FEA116"}} className="footer-line ff-secondary fw-normal mb-4">
//                 Opening
//               </h4>
//               <h5 className="text-light fw-normal">Monday - Saturday</h5>
//               <p>09AM - 09PM</p>
//               <h5 className="text-light fw-normal">Sunday</h5>
//               <p>10AM - 08PM</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;


import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    
    <>
       <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-5 text-start">

          {/* Company Section */}
          <div className="col d-flex flex-column">
            <h4 style={{color:"#FEA116"}} className="footer-line ff-secondary fw-normal mb-4">{t("translation.company")}</h4>
            <Link to="/about" className="btn btn-link text-light">{t("translation.about")}</Link>
            <Link to="/contact" className="btn btn-link text-light">{t("translation.contact")}</Link>
            <Link to="/booking" className="btn btn-link text-light">{t("translation.reservation")}</Link>
            <Link to="/menu" className="btn btn-link text-light">{t("translation.menu")}</Link>
          </div>

          {/* Contact Section */}
          <div className="col d-flex flex-column">
            <h4 style={{color:"#FEA116"}} className="footer-line ff-secondary fw-normal mb-4">{t("translation.contact")}</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Taikos pr. 81, Klaipėda, 94114 Klaipėdos m. sav.</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+37065922833</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>administracija@vizilasrestobaras.com</p>
          </div>

          {/* Opening Section */}
          <div className="col d-flex flex-column">
            <h4 style={{color:"#FEA116"}} className="footer-line ff-secondary fw-normal mb-4">{t("translation.opening")}</h4>
            <h5 className="text-light fw-normal">{t("translation.mon-Sat")}</h5>
            <p>09AM - 09PM</p>
            <h5 className="text-light fw-normal">{t("translation.sun")}</h5>
            <p>10AM - 08PM</p>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
