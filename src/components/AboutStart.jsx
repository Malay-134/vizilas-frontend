import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left Images Grid */}
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.1s"
                  src="/img/Wines/wine-5.jpeg"
                  alt="about-1"
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.3s"
                  src="/img/Non-alcoholic/item-6.jpeg"
                  style={{ marginTop: "25%" }}
                  alt="about-2"
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.5s"
                  src="/img/Sauces/sauce-1.jpeg"
                  alt="about-3"
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.7s"
                  src="/img/snacks-3.jpeg"
                  alt="about-4"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">
              {t("aboutus.title")}
            </h5>
            <h1 className="mb-4">
              {t("aboutus.welcome", { restaurant: "Vizilas Restobaras" })}
            </h1>
            <p className="mb-4">{t("aboutus.desc1")}</p>
            <p className="mb-4">{t("aboutus.desc2", { restaurant: "Vizilas Restobaras" })}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
