import React from "react";
import one from "../../../img/brends/1.png";
import two from "../../../img/brends/2.png";
import three from "../../../img/brends/3.png";
import four from "../../../img/brends/4.png";
import five from "../../../img/brends/5.png";
import Fade from "react-reveal/Fade";

const brends = [one, two, three, four, five, two];

function Partners() {
  return (
    <div className="partners my-4">
      <h1>Bizning hamkorlarimiz</h1>
      <Fade right cascade delay={600} >
        <div className="brends">
          {brends.map((item, index) => (
            <img key={index} src={item} alt="brend-logo" />
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default Partners;
