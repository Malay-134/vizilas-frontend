import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("home"), link: "/" },
    { label: t("about"), link: "/about" },
    { label: t("menu"), link: "/menu" },
    { label: t("contact"), link: "/contact" },
  ];

  const dropdownLinks = [
    { label: t("booking"), link: "/booking" },
    { label: t("testimonial"), link: "/testimonial" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container-xxl position-relative p-0">
      <nav
        className={`navbar navbar-expand-lg navbar-dark px-4 px-lg-5 py-3 py-lg-0 fixed-top ${
          scrolled ? "scrolled" : "bg-transparent"
        }`}
      >
        <Link to="/" className="navbar-brand p-0">
          <h1
            className=""
            style={{ fontFamily: "Nunito", fontWeight: "bold", color: "#FEA116" }}
          >
            {t("restaurant")}
          </h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            {navLinks.map(({ link, label }) => (
              <Link key={label} to={link} className="nav-item nav-link">
                {label}
              </Link>
            ))}

            {/* Pages dropdown */}
            <div className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                {t("pages")}
              </span>
              <div className="dropdown-menu m-0">
                {dropdownLinks.map(({ link, label }) => (
                  <Link key={label} to={link} className="dropdown-item">
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Language dropdown */}
            <div className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                🌐 
                {/* Language */}
              </span>
              <div className="dropdown-menu m-0">
                <button className="dropdown-item" onClick={() => changeLanguage("en")}>
                  English
                </button>
                <button className="dropdown-item" onClick={() => changeLanguage("la")}>
                  Lithonia
                </button>
              </div>
            </div>
          </div>
          <Link to="/booking" className="btn btn-primary py-2 px-4">
            {t("book_table")}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
