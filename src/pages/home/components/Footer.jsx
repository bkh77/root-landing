import React from "react";
import logo from "../../../img/footer/logo.png";
import docImg from "../../../img/footer/doc-img.png";

function Footer() {
  return (
    <div className="footer">
      <div className="logo-doc">
        <img src={logo} alt="logo" />
        <p>Davlat tomonidan tasdiqlangan hujjatlar</p>
        <img src={docImg} alt="doc-img" />
      </div>

      <div>
        <p>Asosiy</p>
        <ul>
          <li>
            <a href="/">Kompaniya haqida</a>
          </li>
          <li>
            <a href="/">Bog‘lanish</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Talim</p>
        <ul>
          <li>
            <a href="/">Online</a>
          </li>
          <li>
            <a href="/">Offline</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Loyihalar</p>
        <ul>
          <li>
            <a href="/">PDP live</a>
          </li>
          <li>
            <a href="/">PDP meetup</a>
          </li>
          <li>
            <a href="/">PDP Genaration</a>
          </li>
        </ul>
      </div>

      <div>
        <p>Telefon</p>
        <span>+998 90 777-47-47</span>
        <p>Manzil:</p>
        <span>
          Toshkent shahar. Shayxontohur <br /> tumani Zarqaynar ko‘chasi, 3b-uy
        </span>
      </div>
    </div>
  );
}

export default Footer;
