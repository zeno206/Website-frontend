import React from "react";

function Login() {
  return (
    <>
      <div className="lgndiv">
        <div className="lgn-box">
          <form className="lgn-frm">
            <h3 className="frm-h3">Welcome to my Portfolio</h3>
            <p className="frm-h2">Sign in or create your account to started</p>
            <h1 className="h-btn">Login👋</h1>
            <label htmlFor=""> Email</label>
            <br />
            <input type="text" placeholder="Enter your email" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" placeholder="Password" />
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
