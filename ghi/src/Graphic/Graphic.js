import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import "./Graphic.css";
import logo from "../images/fitCheckLogo.png";
import Login from "../Login/Login";
import Signup from "../Signup/signup";

const Graphic = () => {
  const [loginClicked, setLoginClicked] = useState(false);
  const [signupClicked, setSignupClicked] = useState(false);
  useEffect(() => {}, []);

  return (
    <>
      <section className="wrapper">
        <Spline
          className="spline"
          scene="https://prod.spline.design/3otfNvPQRgOnYZrA/scene.splinecode"
        />
        <div className="content">
          <img src={logo} alt="logo" />
          <h1>
            GET YOUR OUTFITS RATED. <br />
            RATE OTHER'S OUTFITS.
          </h1>
          <div className="buttons">
            <button
              onClick={() => {
                setLoginClicked(true);
                setSignupClicked(false);
              }}
            >
              LOG IN
            </button>
            <button
              onClick={() => {
                setSignupClicked(true);
                setLoginClicked(false);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
        {loginClicked ? (
          <div className="login-exit-wrapper">
            <button
              className="login-exit"
              onClick={() => setLoginClicked(false)}
            >
              X
            </button>
            <Login />
          </div>
        ) : null}
        {signupClicked ? (
          <div className="signup-exit-wrapper">
            <button
              className={signupClicked ? "signup-exit" : "hide"}
              onClick={() => setSignupClicked(false)}
            >
              X
            </button>
          </div>
        ) : null}

        {loginClicked ? <Login /> : ""}
        {signupClicked ? <Signup /> : ""}
      </section>
    </>
  );
};

export default Graphic;
