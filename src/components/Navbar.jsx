import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const navLinks = [
    { label: t("home"), link: "/" },
    { label: t("about"), link: "/about" },
    { label: t("menu"), link: "/menu" },
    { label: t("contact"), link: "/contact" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        
        {/* Logo */}
        <Link to="/" className="navbar-brand p-0 d-flex align-items-center">
          <img
            src="/nav_logo1.png"
            alt="Vizilas Restobaras Logo"
            className="navbar-logo"
          />
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            
            {navLinks.map(({ link, label }) => (
              <Link key={link} to={link} className="nav-item nav-link">
                {label}
              </Link>
            ))}

            {/* Language Dropdown */}
            <div className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                🌐
              </span>

              <div className="dropdown-menu dropdown-menu-end m-0">
                <button
                  className="dropdown-item"
                  onClick={() => changeLanguage("en")}
                >
                  English
                </button>

                <button
                  className="dropdown-item"
                  onClick={() => changeLanguage("la")}
                >
                  Lithuanian
                </button>

                <button
                  className="dropdown-item"
                  onClick={() => changeLanguage("ru")}
                >
                  Russian
                </button>
              </div>
            </div>
          </div>

          {/* Book Table Button */}
          <Link
            to="/booking"
            className="btn bg-danger btn-primary py-2 px-4"
          >
            {t("book_table")}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
