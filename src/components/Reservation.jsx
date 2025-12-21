import { useState } from "react";
import { useTranslation } from "react-i18next";
import booking from "/img/logo.jpge";

const Reservation = () => {
  const { t } = useTranslation();
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
    people: "1",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/reservation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Reservation saved!");
        setFormData({
          name: "",
          email: "",
          datetime: "",
          people: "1",
          message: "",
        });
      } else {
        alert("Error saving reservation");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="booking"
      className="container-xxl mb-5 px-0 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="row g-0">
        <div className="col-md-6">
          <img style={{ width: "100%" }} src={booking} alt="reservation" />
        </div>

        {/* Reservation Form */}
        <div className="col-md-6 bg-dark d-flex align-items-center">
          <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">
              {t("rese.title")}
            </h5>
            <h1 className="text-white mb-4">{t("rese.subtitle")}</h1>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder={t("rese.name")}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label htmlFor="name">{t("rese.name")}</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder={t("rese.email")}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">{t("rese.email")}</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating date">
                    <input
                      type="text"
                      className="form-control"
                      id="datetime"
                      placeholder={t("rese.datetime")}
                      value={formData.datetime}
                      onChange={handleChange}
                    />
                    <label htmlFor="datetime">{t("rese.datetime")}</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="people"
                      value={formData.people}
                      onChange={handleChange}
                    >
                      <option value="1">{t("rese.peopleOptions.1")}</option>
                      <option value="2">{t("rese.peopleOptions.2")}</option>
                      <option value="3">{t("rese.peopleOptions.3")}</option>
                    </select>
                    <label htmlFor="people">{t("rese.people")}</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder={t("rese.message")}
                      id="message"
                      style={{ height: "100px" }}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="message">{t("rese.message")}</label>
                  </div>
                </div>

                <div className="col-12">
                  <button
                    className="btn btn-primary w-100 py-3"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : t("rese.button")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
