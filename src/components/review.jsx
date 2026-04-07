import React from "react";
import pepole from "../assets/pepole.png";
import pepole1 from "../assets/pepole1.png";
import pepole2 from "../assets/pepole2.png";
function Review() {
  return (
    <>
      <div className="R-s">
        <div className="RLin-1">
          <div className="Rp-a">
            <h2 className="Rh-a">What people are saying about us</h2>
            <h3 className="Rh-b">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </h3>
          </div>
          <div className="Rp-b">
            <div className="crd-1">
              <h1 className="crd-h1">,,</h1>
              <p className="crd-p">
                Money is only a tool. It will take you wherever you wish, but it
                will not replace you as the driver.
              </p>
              <div className="crd-S">
                <img className="s-crd" src={pepole} alt="" />
                <div className="U-d">
                  <h2 className="crdh-2">Robert setve</h2>
                  <h3 className="crd-h3">founder and co</h3>
                </div>
              </div>
            </div>
            <div className="crd-1">
              <h1 className="crd-h1">,,</h1>
              <p className="crd-p">
                Money is only a tool. It will take you wherever you wish, but it
                will not replace you as the driver.
              </p>
              <div className="crd-S">
                <img className="s-crd" src={pepole2} alt="" />
                <div className="U-d">
                  <h2 className="crdh-2">Amit sharma</h2>
                  <h3 className="crd-h3">founder and co</h3>
                </div>
              </div>
            </div>
            <div className="crd-1">
              <h1 className="crd-h1">,,</h1>
              <p className="crd-p">
                Money is only a tool. It will take you wherever you wish, but it
                will not replace you as the driver.
              </p>
              <div className="crd-S">
                <img className="s-crd" src={pepole1} alt="" />
                <div className="U-d">
                  <h2 className="crdh-2">Ammy pose</h2>
                  <h3 className="crd-h3">founder and co</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="RLin-2">
          <div className="Ser-D">
            <div className="Ser-b">
              <h1 className="Ser-c">
                Come try our <span>service</span> now!
              </h1>
              <h2 className="Ser-p">
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </h2>
            </div>
            <button className="ser-btn">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
