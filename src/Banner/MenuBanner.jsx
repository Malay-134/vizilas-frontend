import { Link } from "react-router-dom";

const MenuBanner = () => {
  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container text-center my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown" style={{fontWeight:"bold"}}>
          Food Menu
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item">
              <Link to="/" style={{color:"#FEA116",textDecoration:"none", fontWeight:"bold"}}>Home </Link>
            </li>
            <li style={{color:"white",paddingInline:"10px"}}>
                /
            </li>
            <li
              className="breadcrumb-item text-white active"
              aria-current="page"
              style={{ fontWeight:"bold"}}
            >
              Menu
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default MenuBanner;
