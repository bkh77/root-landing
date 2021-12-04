import React, { useState } from "react";
import silver from "../../../img/sertificete/silver.png";
import gold from "../../../img/sertificete/gold.png";
import plantinum from "../../../img/sertificete/plantinum.png";
import lenta from "../../../img/sertificete/lenta.png";
import Flip from "react-reveal/Flip";

function Sertificates() {
  // const [active, setActive] = useState(1)
  const [img, setImg] = useState(silver);

  return (
    <div className="sertificates my-5 ">
      <div className="left">
        <h1>Sertifikatlar</h1>
        <div className="my-btn-group">
          <button
            className="btn btn-outline-primary"
            onClick={() => setImg(silver)}
          >
            Silver
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setImg(gold)}
          >
            Gold
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setImg(plantinum)}
          >
            Plantinum
          </button>
        </div>
        <p>
          Kursni tamomlagan talabalarning o'zlashtirish ko'rsatkichi etiborga
          olingan holda sertifikatlar beriladi.
        </p>
      </div>
      <div className="mid">
        <img src={lenta} alt="lenta" />
      </div>
      <div className="right">
        <Flip left>
          <img src={img} alt="sertificate" />
        </Flip>
      </div>
    </div>
  );
}

export default Sertificates;
