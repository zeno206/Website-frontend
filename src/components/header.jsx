import React from "react";
import { useState } from "react";

function Header() {
  const [show, setshow] = useState(false);

  const Bar = () => {
    setshow((prev) => !prev);
  };

  return (
    <>
      <div className="head">
        <div className="bar-1">
          <h1>My Portfolio</h1>
        </div>
        <div className="bar-2">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <div onClick={Bar} className="bar-3">
            <i class="ri-bar-chart-horizontal-line"></i>
          </div>
        </div>
        {show && (
          <div className="ul-div">
            <ul className="ul-d">
              <li className="l-l">Home</li>
              <li className="l-l">About</li>
              <li className="l-l">Services</li>
              <li className="l-l">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
