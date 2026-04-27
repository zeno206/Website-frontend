import React from "react";
import axios from "axios";

function Login() {
  const login = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const logininfo = {
      email: formdata.get("email"),
      password: formdata.get("password"),
    };
    try {
      const res = await axios.post(
        "https://webiste-backend-q9b4.onrender.com/api/post/login",
        logininfo,
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="lgndiv">
        <div className="lgn-box">
          <form className="lgn-frm" onSubmit={login}>
            <h3 className="frm-h3">Welcome to my Portfolio</h3>
            <p className="frm-h2">Sign in or create your account to started</p>
            <h1 className="h-btn">Login👋</h1>
            <label htmlFor=""> Email</label>
            <br />
            <input type="text" placeholder="Enter your email" name="email" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" placeholder="Password" name="password" />
            <br />
            <button className="lgn-btn">login</button>
          </form>
          <h4 className="de">Or</h4>
          <button className="lgn-btn1">Register</button>
        </div>
      </div>
    </>
  );
}
export default Login;
