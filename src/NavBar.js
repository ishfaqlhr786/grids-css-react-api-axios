import React, { useEffect } from "react";
import $ from "jquery";
import "./Nav.css";
export const NavBar = () => {
  useEffect(() => {
    $("#target").on("click", function () {
      $(".navbar1").fadeToggle();
    });

    // setup a global state flag
  });

  return (
    <>
      <div className="nav1">
        <div id="target">
          <i class="fa fa-bars"></i>
        </div>
        <a href="#">
          <span id="brand">
            <h3>User Places</h3>
          </span>
        </a>
        <ul className="navbar1">
          <li>
            <a href="/" className="btn1">
              All Users
            </a>
          </li>
          <li>
            <a href="/SignIn" className="btn1">
              Sign In
            </a>
          </li>
          <li>
            <a href="/SignUp" className="btn1">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
