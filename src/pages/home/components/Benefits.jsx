import React from "react";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import men from "../../../img/men.png";
import Fade from "react-reveal/Fade";

function Benefits() {
  return (
    <div className="benefits my-5">
      <div className="left img-container">
        <img src={men} alt="men" />
      </div>
      <Fade duration={1500} delay={600} top cascade>
        <div className="right">
          <h1>Imtiyozlar </h1>
          <p>
            Agarda Sizning hozirgi moliyaviy vaziyatinigiz bizda o'qish imkonini
            bermasa afsuslanmang. Siz uchun maxsus Imtiyozlarimiz mavjud.
          </p>
          <ul>
            <li>
              <span>
                <CheckCircleOutlinedIcon />
              </span>{" "}
              Har oyda 3 ta o'quvchi bepul talim oladi{" "}
            </li>
            <li>
              <span>
                <CheckCircleOutlinedIcon />
              </span>{" "}
              Birinchi a'zo bo'lganlarga 30% lik chegirmalar{" "}
            </li>
            <li>
              <span>
                <CheckCircleOutlinedIcon />
              </span>{" "}
              Siz uchun yagona axil jamoz{" "}
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  );
}

export default Benefits;
