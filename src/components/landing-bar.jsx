import React from "react";
import paymentImg from "../assets/payment.png";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const navigate = useNavigate();
  const Nav = () => {
    setTimeout(() => {
      navigate("/lgn");
    }, 1000);
  };
  return (
    <>
      <div className="bar-2a">
        <div className="box-1">
          <img
            className="S-i"
            src="https://cdn-icons-png.freepik.com/512/3562/3562089.png"
            alt=""
          />

          <h4>20% discount for new user</h4>
          <h2>
            The Next <br></br> <span>Genration</span>
            <br />
            Payment Method
          </h2>
          <p>
            Our team of expert uses a methodolgy to identify your credit card
            most likely ot fit your need we examine a anual manage rates, anual
            fess
          </p>
          <button className="Lng-btn" onClick={Nav}>
            Log in
          </button>
        </div>
        <div className="box-2">
          <h2 className="b2-h">your way</h2>
          <img className="b2-i" src={paymentImg} alt="" />
        </div>
      </div>
    </>
  );
}
export default Landingpage;
