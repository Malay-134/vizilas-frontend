import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* HERO SECTION */}
      <div className="container-xxl py-5 hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                {t("hero.title")}
              </h1>

              <p className="text-white animated slideInLeft mb-4 pb-2">
                {t("hero.description")}
              </p>

              <a
                href="booking.html"
                className="btn btn-danger py-sm-3 px-sm-5 animated slideInLeft"
              >
                {t("hero.button")}
              </a>
            </div>

            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img
                className="img-fluid hero-img"
                src="img/Wines/wine-12.jpeg"
                alt="Delicious Meal"
              />
            </div>

          </div>
        </div>
      </div>

      {/* CSS INSIDE SAME FILE */}
      <style>{`
        .hero-header {
          background: linear-gradient(
              rgba(15, 23, 43, 0.85),
              rgba(15, 23, 43, 0.85)
            ),
            url("/img/hero-bg.jpg") center center / cover no-repeat;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-img {
          max-width: 100%;
          border-radius: 12px;
          animation: zoomIn 1.2s ease-in-out;
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;















































































































































/**import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 text-white animated slideInLeft">
              {t("hero.title")}
            </h1>
            <p className="text-white animated slideInLeft mb-4 pb-2">
              {t("hero.description")}
            </p>
            <a
              href="booking.html"
              className="btn btn-primary bg-danger btn-danger-hover py-sm-3 px-sm-5 me-3 animated slideInLeft"
            >
              {t("hero.button")}
            </a>
          </div>
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <img
              className="img-fluid"
              src="img/Wines/wine-12.jpeg"
              alt="Delicious Meal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
**/

