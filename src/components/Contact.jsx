import { useState } from "react";

const Contact = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/reservation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error sending message");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Title Section */}
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Contact Us
          </h5>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>

        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-12">
            <div className="row gy-4">
              <div className="col-md-4">
                <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                  General
                </h5>
                <p>
                  <i className="fa fa-envelope-open text-primary me-2"></i>
                  info@example.com
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                  Contact
                </h5>
                <p>
                  <i className="fa fa-envelope-open text-primary me-2"></i>
                  +37065922833
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
            <iframe
              title="Google Map"
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.391052094639!2d21.135620876566828!3d55.68872899749784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4d9a5c061fbe9%3A0x2a2a2a7d7741c4b0!2sTaikos%20pr.%2081%2C%20Klaip%C4%97da%2094114%2C%20Klaip%C4%97dos%20m.%20sav.!5e0!3m2!1sen!2slt!4v1693914321234!5m2!1sen!2slt"
              frameBorder="0"
              style={{ minHeight: "350px", border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "150px" }}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
