import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import logo from "../../../img/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="row">
          <div className="col-md-6">
            <a href="/#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="col-md-6">
            <a href="/">Biz haqimizda</a>
            <a href="/">Yangiliklar</a>
            <span>
              {" "}
              <PhoneIcon /> +998 91 254-00-00
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
