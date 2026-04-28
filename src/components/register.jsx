import React, { useState } from "react";
import spinner from "../assets/spinner.gif";
import Popup from "./popup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [showx, setshowx] = useState(false);
  const [showy, setshowy] = useState(true);
  const [showz, setshowz] = useState(false);

  const navigate = useNavigate();
  const lgn = () => {
    setTimeout(() => {
      navigate("/lgn");
    }, 500);
  };
  const Regs = async (e) => {
    e.preventDefault();
    setshowz(true);
    setshowy(false);
    const formdata = new FormData(e.target);
    const data = {
      username: formdata.get("username"),
      email: formdata.get("email"),
      password: formdata.get("password"),
    };
    try {
      const reg = await axios.post(
        "https://webiste-backend-q9b4.onrender.com/api/post/reg",
        data,
      );
      setshowz(false);
      setshowy(true);
      setshowx(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="lgndiv">
        <div className="lgn-box">
          <form className="lgn-frm" onSubmit={Regs}>
            <h3 className="frm-h3">Welcome to my Portfolio</h3>
            <p className="frm-h2">Sign in or create your account to started</p>
            <h1 className="h-btn">Register👋</h1>
            <label htmlFor=""> Username</label>
            <br />
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
            />
            <br />
            <label htmlFor=""> Email</label>
            <br />
            <input type="text" placeholder="Enter your email" name="email" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" placeholder="Password" name="password" />
            <br />
            {showy && <button className="lgn-btn">Sign in</button>}
            {showz && (
              <button className="lgn-btn">
                <img className="spin-img" src={spinner} alt="" />
              </button>
            )}
          </form>
          <h4 className="de">Or</h4>
          <button onClick={lgn} className="lgn-btn1">
            Login
          </button>
        </div>
      </div>
      {showx && (
        <div className="popup">
          <Popup />
        </div>
      )}
    </>
  );
}

export default Register;
