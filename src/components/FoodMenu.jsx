import { useTranslation } from "react-i18next";

const FoodMenu = () => {
  const { t } = useTranslation();

  const menu = t("foodmenu", { returnObjects: true });
  const menuItems = t("foodItems", { returnObjects: true });

  return (
    <div id="menu" className="container-xxl py-5 ">
      <div className="container mb-5">
        <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            {menu.title}
          </h5>
          <h1 className="fw-bold fs-4 fs-md-2">{menu.subtitle}</h1>
        </div>

        <div
          className="tab-class text-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <ul className="nav nav-pills d-flex flex-nowrap overflow-auto justify-content-start justify-content-md-center border-bottom mb-4">
            {menu.tabs.map((tab, idx) => (
              <li key={tab.id} className="nav-item">
                <a
                  className={`d-flex align-items-center text-start px-3 px-md-4 py-2 py-md-3 gap-2 gap-md-3 ${
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
                  {tab.items.map((item, i) => (
                    <div key={i} className="col-lg-6">
                      <div className="d-flex align-items-center p-3 rounded shadow-sm menu-item">
                        <div
                          className="flex-shrink-0"
                          style={{ width: 90, height: 90 }}
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className="img-fluid rounded"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>

                        <div className="w-100 ps-4">
                          <h5 className="d-flex justify-content-between align-items-start align-items-sm-center mb-1 flex-column flex-sm-row">
                            <span className="fw-semibold">{item.name}</span>
                            <span className="text-primary fw-bold">
                              {item.price}
                            </span>
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
      </div>
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            {menuItems.title}
          </h5>
          <h1 className="mb-5 fs-4 fs-md-2">{menuItems.subtitle}</h1>

        </div>

        <div className="tab-class text-center">
          <ul className="nav nav-pills d-flex flex-nowrap overflow-auto justify-content-start justify-content-md-center border-bottom mb-4">
            {menuItems.tabs.map((tab, idx) => (
              <li key={tab.id} className="nav-item">
                <a
                  className={`d-flex align-items-center text-start px-3 px-md-4 py-2 py-md-3 gap-2 gap-md-3 ${
                    idx === 0 ? "active" : ""
                  }`}
                  data-bs-toggle="pill"
                  href={`#${tab.id}`}
                >
                  <i className={`fa ${tab.icon} fa-2x text-primary`} />
                  <div className="ps-3">
                    <small>{tab.subtitle}</small>
                    <h6 className="mt-n1 mb-0">{tab.title}</h6>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content">
            {menuItems.tabs.map((tab, idx) => (
              <div
                key={tab.id}
                id={tab.id}
                className={`tab-pane fade show p-0 ${
                  idx === 0 ? "active" : ""
                }`}
              >
                <div className="row g-4">
                  {tab.items.map((item, i) => (
                    <div key={i} className="col-lg-6">
                      <div className="d-flex align-items-center p-3 rounded shadow-sm menu-item">
                        <div
                          className="flex-shrink-0"
                          style={{ width: 90, height: 90 }}
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className="img-fluid rounded"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>

                        <div className="w-100 ps-4">
                          <h5 className="d-flex justify-content-between align-items-start align-items-sm-center mb-1 flex-column flex-sm-row">

                            <span className="fw-semibold">{item.name}</span>
                            <span className="text-primary fw-bold">
                              {item.price}
                            </span>
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
      </div>
    </div>
  );
};

export default FoodMenu;
