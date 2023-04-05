import "./Login.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {handleUsernameChange, handlePasswordChange}  from "../features/auth/loginSlice"

const Login = () => {
    const dispatch = useDispatch();
    const { fields } = useSelector((state) => state.login);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit");
    };

  return (
      <section className="login-wrapper">
          <div className="login-card">
              <h1>Login</h1>
              <form className="login-form">
                  <div className="inputs">
                      <label className="login-labels" for="username">
                          Username
                      </label>
                      <input
                          className="login-input"
                          placeholder="username"
                          id="username"
                          required
                          value={fields.username}
                          onChange={(e) =>
                              dispatch(handleUsernameChange(e.target.value))
                          }
                      ></input>
                      <label className="login-labels" for="password">
                          Password
                      </label>
                      <input
                          className="login-input"
                          placeholder="password"
                          type="password"
                          id="password"
                          required
                          value={fields.password}
                          onChange={(e) =>
                              dispatch(handlePasswordChange(e.target.value))
                          }
                      ></input>
                  </div>
                  <button className="login-button">Log In</button>
              </form>
          </div>
      </section>
  );
};
export default Login;
