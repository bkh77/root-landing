import React, { useEffect } from "react";
import girl from "../../img/girl.png";
import Benefits from "./components/Benefits";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Directions from "./components/Directions";
import Aproach from "./components/Aproach";
import { init } from "ityped";
import Sertificates from "./components/Sertificates";
import Mentors from "./components/Mentors";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

const skills = [
  "Python",
  "Java",
  "Android",
  "Php",
  "Frontend",
  "Desktop",
  "Foundation",
];

function Home() {
  useEffect(() => {
    const text = document.querySelector("#typed");
    init(text, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 1500,
      strings: ["osonroq!", "qulayroq!", "foydaliroq!"],
    });
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="row my-4">
        <div className="col-md-6">
          <img src={girl} alt="girl" />
        </div>

        <div className="col-md-6">
          <h1>
            Dasturlashni biz bilan o'rganish yanada <span id="typed"></span>
          </h1>
          <p>
            ROOT Academiy sizga dasturlash kurslarini online va offline holatda
            taqdim etadi. Siz biz bilan kelajak kasblarini o'rganing.
          </p>
          <div className="skills">
            {skills.map((item) => (
              <a key={item} href="/#">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <Education />
        <Benefits />
        <Directions />
        <Aproach />
        <Sertificates />
        <Mentors />
        <Partners />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
