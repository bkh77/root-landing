import React from "react";
import android from "../../../img/dir-logo/android.png";
import desktop from "../../../img/dir-logo/desktop.png";
import java from "../../../img/dir-logo/java.png";
import front from "../../../img/dir-logo/front.png";
import php from "../../../img/dir-logo/php.png";
import python from "../../../img/dir-logo/python.png";
import found from "../../../img/dir-logo/found.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Flip from "react-reveal/Flip";

const directions = [
  { id: 1, title: "Python", month: 3, modul: 6, logo: python },
  { id: 2, title: "PHP", month: 3, modul: 6, logo: php },
  { id: 3, title: "Java", month: 3, modul: 6, logo: java },
  { id: 4, title: "Android", month: 3, modul: 6, logo: android },
  { id: 5, title: "Frontend", month: 3, modul: 6, logo: front },
  { id: 6, title: "Desktop", month: 3, modul: 6, logo: desktop },
  { id: 7, title: "Foundation", month: 3, modul: 6, logo: found },
];

function Directions() {
  return (
    <div className="directions my-4">
      <h1>Bizning yo'nalishlar</h1>
      <div className="row">
        {directions.map((item) => (
          <Flip duration={1500} delay={600} key={item.id} top>
            <div className="col-md-4">
              <div className="dir-card">
                <div className="left">
                  <p>Kurs</p>
                  <h2>{item.title}</h2>
                  <p>
                    <span>{item.month} oy </span>
                    <br />
                    {item.modul} ta modul
                  </p>
                </div>
                <div className="right">
                  <img src={item.logo} alt={item.title} />
                </div>
                <div className="cyrcle">
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </Flip>
        ))}
      </div>
    </div>
  );
}

export default Directions;
