import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavItems from "./NavItems";
import Footer from "./Footer";
import { AuthContext } from "../context/AuthProvider";
const title = "Register Now";
const socialTitle = "Register with Social Media";
const btnText = "SignUp Now";

// const socialList = [
//   {
//     link: "#",
//     iconName: "icofont-facebook",
//     className: "facebook",
//   },
//   {
//     link: "#",
//     iconName: "icofont-twitter",
//     className: "twitter",
//   },
//   {
//     link: "#",
//     iconName: "icofont-linkedin",
//     className: "linkedin",
//   },
//   {
//     link: "#",
//     iconName: "icofont-instagram",
//     className: "instagram",
//   },
//   {
//     link: "#",
//     iconName: "icofont-pinterest",
//     className: "pinterest",
//   },
// ];

const SignUp = () => {
  const {createUser,signUpWithGmail} = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const confirmPassword = form.confirmpassword.value;
    createUser(email,password)
    .then(res=>{
      navigate('/')
    })
  };
  const handleRegisterGoogle=()=>{
    signUpWithGmail()
    .then(res=>{
      navigate('/')
    })
  }
  return (
   <>
   <NavItems></NavItems>
   <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name*"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address*"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          <div className="account-button">
            <span className="d-block cate pt">
              Have an Account?{" "}
              <Link to="/login" className="text-warning">
                Login
              </Link>
            </span>

            <span className="or">
              <span>or</span>
            </span>

            {/*social login */}
            <h5 className="subtitle">{socialTitle}</h5>
            <ul className="la-ul social-icons justify-content-center">
            <ul className="la-ul social-icons justify-content-center">
                <button
                  className="btn mb-3"
                  style={{
                    backgroundColor: "green",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "4px",
                    padding: "10px 20px",
                    marginTop:"20px",
                    cursor: "pointer",
                  }}
                  onClick={handleRegisterGoogle}
                >
                  Sing Up with Google
                </button>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
   
   </>
  );
};

export default SignUp;
