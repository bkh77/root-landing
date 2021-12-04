import React from "react";
import elyor from "../../../img/mentors/1.jpg";
import man from "../../../img/mentors/2.jpg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Fade from "react-reveal/Fade";

const mentors = [
  {
    id: 1,
    name: "Abdumalikov Elyor",
    img: elyor,
    prof: "Designer",
    insta: "/#",
    teleg: "/#",
    linkedin: "/#",
  },
  {
    id: 2,
    name: "Sanjar Tursunov",
    img: man,
    prof: "Developer",
    insta: "/#",
    teleg: "/#",
    linkedin: "/#",
  },
  {
    id: 3,
    name: "Abdumalikov Elyor",
    img: elyor,
    prof: "Designer",
    insta: "/#",
    teleg: "/#",
    linkedin: "/#",
  },
  {
    id: 4,
    name: "Sanjar Tursunov",
    img: man,
    prof: "Developer",
    insta: "/#",
    teleg: "/#",
    linkedin: "/#",
  },
];

function Mentors() {
  return (
    <div className="mentors my-4">
      <h1>Bizning mentorlarimiz</h1>

      <Fade left cascade delay={600} >
        <div className="row">
          {mentors.map((item) => (
            <div key={item.id} className="col-md-3">
              <div className="mentor-card">
                <img src={item.img} alt={item.name} />
                <div className="info">
                  <h5>{item.name}</h5>
                  <p>{item.prof}</p>
                  <div className="social">
                    <a href="/">
                      <InstagramIcon />
                    </a>
                    <a href="/">
                      <TelegramIcon />
                    </a>
                    <a href="/">
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fade>
      <div className="arrows">
        <button>
          <ArrowBackIcon />
        </button>
        <button>
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}

export default Mentors;
