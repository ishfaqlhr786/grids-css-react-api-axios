import React from "react";
import "./SignIn.css";
export const SignIn = () => {
  return (
    <>
      <div className="wrapperLogin">
        <div className="main">
          <h1 style={{ marginTop: "20px", textAlign: "center" }}>Sign In</h1>
          <div style={{ marginLeft: "60px" }}>
            <label for="email">Email</label>
            <br />
            <br />
            <input type="email" id="email" className="inputLogin" />
          </div>
          <br />
          <div style={{ marginLeft: "60px" }}>
            <label for="password">Password</label>
            <br />
            <br />
            <input type="password" id="password" className="inputLogin" />
          </div>
          <br />
          <br />
          <br />
          <div id="login">
            <span style={{ lineHeight: "30px" }}>LOGIN</span>
          </div>
        </div>
      </div>
    </>
  );
};
