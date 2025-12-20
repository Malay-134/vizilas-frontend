const MenuTabs = ({data}) => {
  return (
    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
      {/* Tabs */}
      <ul className="nav nav-pills d-flex flex-nowrap overflow-auto justify-content-start justify-content-md-center border-bottom mb-4">
        {data.tabs.map((tab, idx) => (
          <li key={tab.id} className="nav-item">
            <a
              className={`d-flex align-items-center text-start px-3 px-md-4 py-2 py-md-3 gap-2 gap-md-3 ${
                idx === 0 ? "active" : ""
              }`}
              data-bs-toggle="pill"
              href={`#${tab.id}`}
            >
              <i className={`fa ${tab.icon} fa-2x text-secondary`} />
              <div className="ps-3">
                <small className="text-body">{tab.subtitle}</small>
                <h6 className="mt-n1 mb-0 text-body">{tab.title}</h6>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {data.tabs.map((tab, idx) => (
          <div
            key={tab.id}
            id={tab.id}
            className={`tab-pane fade show p-0 ${idx === 0 ? "active" : ""}`}
          >
            <div className="row g-4">
              {tab.items.map((item, i) => (
                <div key={i} className="col-lg-12">
                  <div className="d-flex align-items-center menu-item">
                    {/* Text */}
                    <div className="flex-grow-1 pe-3">
                      <h5 className="d-flex justify-content-between align-items-center mb-0">
                        <span className="menu-name">{item.name}</span>
                        <span className="menu-price">{item.price}</span>
                      </h5>
                    </div>

                    {/* Image */}
                    <div className="menu-img">
                      <img loading="lazy" src={item.img} alt={item.name} />
                    </div>
                  </div>
                  <div className="menu-divider"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuTabs