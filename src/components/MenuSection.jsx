import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const MenuSection = () => {
  const { t } = useTranslation();

  const menu = t("foodmenu", { returnObjects: true });
  const navigate = useNavigate();

  return (
    <div id="menu" className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            {menu.title}
          </h5>
          <h1 className="mb-5">{menu.subtitle}</h1>
        </div>

        <div
          className="tab-class text-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            {menu.tabs.map((tab, idx) => (
              <li key={tab.id} className="nav-item">
                <a
                  className={`d-flex align-items-center text-start mx-3 pb-3 ${
                    idx === 0 ? "active" : ""
                  }`}
                  data-bs-toggle="pill"
                  href={`#${tab.id}`}
                >
                  <i className={`fa ${tab.icon} fa-2x text-primary`}></i>
                  <div className="ps-3">
                    <small className="text-body">{tab.subtitle}</small>
                    <h6 className="mt-n1 mb-0">{tab.title}</h6>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            {menu.tabs.map((tab, idx) => (
              <div
                key={tab.id}
                id={tab.id}
                className={`tab-pane fade show p-0 ${
                  idx === 0 ? "active" : ""
                }`}
              >
                <div className="row g-4">
                  {tab.items.slice(0, 4).map((item, i) => (
                    <div key={i} className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <div style={{ width: "100px", aspectRatio: "1 / 1" }}>
                          <img
                            src={item.img}
                            alt={item.name}
                            loading="lazy"
                            className="img-fluid rounded"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{item.name}</span>
                            <span className="text-primary">{item.price}</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4 pt-4">
          <button className="btn btn-primary" onClick={() => navigate("/menu")}>
            {menu.view}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
