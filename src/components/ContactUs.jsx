const ContactUS = () => {
  const mapWrapperStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
  };

  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "0",
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Title Section */}
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary fw-normal">
            Contact Us
          </h5>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>

        {/* Contact Info */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-4 text-center">
            <h5 className="section-title ff-secondary fw-normal">
              General
            </h5>
            <p>
              <i className="fa fa-envelope-open text-secondary me-2"></i>
              administracija@vizilasrestobaras.com
            </p>
          </div>

          <div className="col-md-4 text-center">
            <h5 className="section-title ff-secondary fw-normal">
              Contact
            </h5>
            <p>
              <i className="fa fa-phone text-secondary me-2"></i>
              +37065922833
            </p>
          </div>
        </div>

        {/* Centered Google Map */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div
              className="wow fadeIn"
              data-wow-delay="0.1s"
              style={mapWrapperStyle}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.391052094639!2d21.135620876566828!3d55.68872899749784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4d9a5c061fbe9%3A0x2a2a2a7d7741c4b0!2sTaikos%20pr.%2081%2C%20Klaip%C4%97da!5e0!3m2!1sen!2slt!4v1693914321234"
                loading="lazy"
                allowFullScreen
                style={iframeStyle}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
