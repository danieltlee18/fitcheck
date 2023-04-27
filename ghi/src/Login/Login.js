import "./Login.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    handleUsernameChange,
    handlePasswordChange,
    reset,
} from "../features/auth/loginSlice";
import { useLoginMutation } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const [login] = useLoginMutation();
    const { fields } = useSelector((state) => state.login);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login(fields);
            dispatch(reset());
            console.log(result);
            if (result.data?.access_token) {
                navigate("/dashboard");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="login-wrapper">
            <div className="login-card">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="login-form">
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
