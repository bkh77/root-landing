import React from "react";
import picOffline from "../../../img/picOffline.png";
import picOnline from "../../../img/picOnline.png";
import Fade from "react-reveal/Fade";

function Education() {
  return (
    <div className="education my-3">
      <h1>Ta'lim</h1>

      <Fade duration={1500} delay={600} left>
        <div className="offline">
          <h2>Offline ta'lim</h2>
          <p>
            Siz ushbu ta'lim shaklimizda bizni o'quv markazimizga kelib
            o'zingizga qulay vaqtda zamonaviy dars xonalarida o'tirib ta'lim
            olishingiz mumkin.
          </p>
          <div className="picOffline">
            <img src={picOffline} alt="picOffline" />
          </div>
        </div>
      </Fade>

      <Fade duration={1500} delay={600} right>
        <div className="online">
          <h2>Online ta'lim</h2>
          <p>
            Siz bizning Online ta'lim shaklimizda o'qishdan va uyingizdan
            chiqmagan holda kunning istalgan vaqtida online ta'lim olishingiz
            mumkin.
          </p>
          <div className="picOnline">
            <img src={picOnline} alt="picOnline" />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Education;
