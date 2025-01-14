import CountUp from "react-countup";
import { Link } from "react-router-dom";
import logo from "../assets/images/about/rahat.jpg";
const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc =
  "Shop the best products anywhere, anytime with our app. Download now and start shopping!";
const btnText = "Join Us";

const countList = [
  {
    iconName: "icofont-users-alt-4",
    count: "12600",
    text: "Marchant Enrolled",
  },
  {
    iconName: "icofont-graduate-alt",
    count: "30",
    text: "Certified Courses",
  },
  {
    iconName: "icofont-notification",
    count: "100",
    text: "Rewards and GitCards",
  },
];

const About = () => {
  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col">
              {countList.map((val, i) => (
                <div key={i} className="count-item">
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <div className="count-content">
                      <h2>
                        <span className="count">
                          <CountUp end={val.count} />
                        </span>
                        <span>+</span>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col">
              <div className="instructor-content">
                <span className="subtitle">{subTitle}</span>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
                <Link to="/sign-up" className="lab-btn">
                  {btnText}
                </Link>
              </div>
            </div>
            <div className="instructor-thumb d-flex gap-2">
              <div className="col">
                <img
                  src="https://i.ibb.co.com/7C57ByX/photo-2025-01-08-23-08-26-modified.png"
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div className="col">
                <img
                  src="https://i.ibb.co.com/7RG8sc6/photo-2025-01-14-22-28-45.jpg"
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
