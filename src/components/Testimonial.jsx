import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonialpage.items", { returnObjects: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div id="testimonial" className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-primary fw-normal">
            {t("testimonialpage.title")}
          </h5>
          <h1 className="mb-5">{t("testimonialpage.subtitle")}</h1>
        </div>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="p-3">
              <div className="testimonial-item bg-transparent border rounded p-4 h-100">
                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                <p>{item.text}</p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={`img/testimonial-${index + 1}.jpg`}
                    alt={item.name} 
                    className="rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="ps-3">
                    <h5 className="mb-1">{item.name}</h5>
                    <small>{item.profession}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
