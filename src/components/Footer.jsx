import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    
    <>
       <div className="container-fluid bg-dark text-light footer pt-5  wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-5 text-start">

          {/* Company Section */}
          <div className="col d-flex flex-column">
            <h4 className="footer-line ff-secondary fw-normal mb-4">{t("translation.company")}</h4>
            <Link to="/about" className="btn btn-link text-light">{t("translation.about")}</Link>
            <Link to="/contact" className="btn btn-link text-light">{t("translation.contact")}</Link>
            <Link to="/booking" className="btn btn-link text-light">{t("translation.reservation")}</Link>
            <Link to="/menu" className="btn btn-link text-light">{t("translation.menu")}</Link>
          </div>

          {/* Contact Section */}
          <div className="col d-flex flex-column">
            <h4 className="footer-line ff-secondary fw-normal mb-4">{t("translation.contact")}</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Taikos pr. 81, Klaipėda, 94114 Klaipėdos m. sav., Lithuania</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+37065922833</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>administracija@vizilasrestobaras.com</p>
          </div>

          {/* Opening Section */}
          <div className="col d-flex flex-column">
            <h4 className="footer-line ff-secondary fw-normal mb-4">{t("translation.opening")}</h4>
            <h5 className="text-light fw-normal">{t("translation.mon-Sat")}</h5>
            <p>11AM - 11PM</p>
            <h5 className="text-light fw-normal">{t("translation.sun")}</h5>
            <p>11AM - 11PM</p>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
