
const MenuSection = () => {
  // Sample menu data
  const menuTabs = [
    {
      id: "tab-1",
      title: "Snacks",
      icon: "fa-hamburger",
      subtitle: "Popular",
      active: true,
      items: [
        { img: "/img/snacks-1.png", name: "Jalapeño Donuts ", price: "€4.00" },
        { img: "/img/snacks-2.png", name: "Donuts in Black Dough", price: "€4.50" },
        { img: "/img/snacks-3.png", name: "Chicken Nuggets", price: "€4.80" },
        { img: "/img/snacks-4.png", name: "Onion Rings", price: "€4.20" },
        { img: "/img/snacks-5.png", name: "Cheese Sticks", price: "€4.50" },
        { img: "/img/snacks-6.png", name: "French Fries", price: "€3.60" },
        { img: "/img/snacks-7.png", name: "Fried Bread", price: "€3.80" },
        { img: "/img/snacks-8.png", name: "Fried Bread with Cheese", price: "€4.20" },
        { img: "/img/snacks-9.png", name: "Calamari Rings", price: "€5.20" },
        { img: "/img/snacks-10.png", name: "Chicken Fillet Bites", price: "€5.00" },
        { img: "/img/snacks-11.png", name: "Sweet Potato Snack", price: "€4.80" },
        { img: "/img/snacks-12.jpg", name: "Chicken Wings", price: "€5.90" },
        { img: "/img/snacks-13.jpg", name: "Olive Snack", price: "€3.50" },
      ],
    },
    {
      id: "tab-2",
      title: "Sauce",
      icon: "fa-bottle-droplet",
      subtitle: "Special",
      active: false,
      items: [
        { img: "/img/Sauces/Garlic Sauce.jpg", name: "Garlic", price: "€1.00" },
        { img: "/img/Sauces/Spicy Sauce.jpg", name: "Spicy", price: "€1.00" },
        { img: "/img/Sauces/Tomato Sauce.png", name: "Tomato Sauce", price: "€0.80" },
        { img: "/img/Sauces/Hot Sauce.png", name: "Hot Sauce", price: "€1.20" },
        { img: "/img/Sauces/Sour Cream Sauce.png", name: "Sour Cream Sauce", price: "€1.00" },
      ],
    }
    //,
    // {
    //   id: "tab-3",
    //   title: "Dinner",
    //   icon: "fa-utensils",
    //   subtitle: "Lovely",
    //   active: false,
    //   items: [
    //     { img: "/img/menu-1.jpg", name: "Chicken Burger", price: "$115" },
    //     { img: "/img/menu-2.jpg", name: "Chicken Burger", price: "$115" },
    //     { img: "/img/menu-3.jpg", name: "Chicken Burger", price: "$115" },
    //     { img: "/img/menu-4.jpg", name: "Chicken Burger", price: "$115" },
    //     { img: "/img/menu-5.jpg", name: "Chicken Burger", price: "$115" },
    //     { img: "/img/menu-6.jpg", name: "Chicken Burger", price: "$115" },
    //     { img: "/img/menu-7.jpg", name: "Chicken Burger", price: "$115" },
    //     { img: "/img/menu-8.jpg", name: "Chicken Burger", price: "$115" },
    //   ],
    // },
  ];

  return (
    <div id="menu" className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Food Menu
          </h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>

        {/* Tabs */}
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            {menuTabs.map((tab) => (
              <li key={tab.id} className="nav-item">
                <a
                  className={`d-flex align-items-center text-start mx-3 pb-3 ${
                    tab.active ? "active" : ""
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
            {menuTabs.map((tab) => (
              <div
                key={tab.id}
                id={tab.id}
                className={`tab-pane fade show p-0 ${
                  tab.active ? "active" : ""
                }`}
              >
                <div className="row g-4">
                  {tab.items.map((item, idx) => (
                    <div key={idx} className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src={item.img}
                          alt={item.name}
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{item.name}</span>
                            <span className="text-primary">{item.price}</span>
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
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

export default MenuSection;
