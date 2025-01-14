import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo/photo_2025-01-14_21-49-54.jpg";
import { AuthContext } from "../context/AuthProvider";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  //authinfo
  const { user, logout } = useContext(AuthContext);
  //console.log(user);
  const handleLogout = () => {
    logout();
  };
  //addevent listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/*heater top start*/}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
      {/*header bottop start*/}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/*logo*/}
            <div className="logo-search-acte">
              <div className="logo d-flex align-items-center">
                <Link
                  to="/"
                  className="d-flex align-items-center text-decoration-none"
                >
                  <img
                    src={logo}
                    className="img-fluid rounded-circle me-2"
                    style={{ width: "60px", height: "60px" }}
                    alt=""
                  />
                  <h2 className="mb-0">AllYouNeed</h2>
                </Link>
              </div>
            </div>
            {/*menu area*/}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <NavLink to="/" activeClassName="active">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop" activeClassName="active">
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog" activeClassName="active">
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" activeClassName="active">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" activeClassName="active">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/*sign up and login*/}
              {/* <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>
              <Link to="/login" className="d-none d-md-block">
                Log In
              </Link> */}
              <div>
                {!user ? (
                  <>
                    <Link
                      to="/login"
                      className="d-none btn btn-danger text-white d-md-block"
                    >
                      Log In
                    </Link>
                  </>
                ) : (
                  <div className="d-flex  align-items-center">
                    {user && (
                      <button
                        className="btn lab-btn ms-3 d-none d-md-block me-2"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    )}
                    <img
                      src="https://i.ibb.co.com/mN4JGBf/GTY-Special-Offer-Page-Hero-5x2.webp"
                      alt="User Avatar"
                      className="img-fluid rounded-circle me-3"
                      style={{ width: "60px", height: "60px" }}
                      title={user.displayName}
                    />
                  </div>
                )}
              </div>

              {/*menu toggler*/}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/*social toggle*/}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
