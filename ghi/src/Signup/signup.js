import "./signup.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    handlePasswordChange,
    handleEmailChange,
    handlePasswordConfirmationChange,
    handleUsernameChange,
    reset,
    error,
} from "../features/auth/signupSlice";
import { useSignupMutation } from '../services/auth';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const dispatch = useDispatch()
    const { errorMessage, fields } = useSelector(state => state.signup)
    const [signup] = useSignupMutation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (fields.password != fields.passwordConfirmation) {
            dispatch(error('Password does not match confirmation'))
            dispatch(reset());

            return;
        } else {
            console.log(fields)
            const result = await signup({
                username: fields.username,
                email: fields.email,
                password: fields.password,
            })
            dispatch(reset())
            navigate("/dashboard");
        }
    }


    return (
        <section className="signup-wrapper">
            <div className="signup-card">
                <h1>signup</h1>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="inputs">
                        <label className="signup-labels" for="username">
                            Username
                        </label>
                        <input
                            className="signup-input"
                            placeholder="username"
                            id="username"
                            required
                            value={fields.username}
                            onChange={(e) =>
                                dispatch(handleUsernameChange(e.target.value))
                            }
                        ></input>
                        <label className="signup-labels" for="email">
                            Email
                        </label>
                        <input
                            className="signup-input"
                            placeholder="email"
                            id="email"
                            required
                            value={fields.email}
                            onChange={(e) =>
                                dispatch(handleEmailChange(e.target.value))
                            }
                        ></input>
                        <label className="signup-labels" for="password">
                            Password
                        </label>
                        <input
                            className="signup-input"
                            placeholder="password"
                            type="password"
                            id="password"
                            value={fields.password}
                            onChange={(e) =>
                                dispatch(
                                    handlePasswordChange(
                                        e.target.value
                                    )
                                )
                            }
                            required
                        ></input>
                        <label
                            className="signup-labels"
                            for="passwordConfirmation"
                        >
                            Password Confirmation
                        </label>
                        <input
                            className="signup-input"
                            placeholder="Confirm Password"
                            type="password"
                            id="passwordConfirmation"
                            value={fields.passwordConfirmation}
                            onChange={(e) =>
                                dispatch(
                                    handlePasswordConfirmationChange(
                                        e.target.value
                                    )
                                )
                            }
                            required
                        ></input>
                    </div>
                    <button className="signup-button">Sign Up</button>
                </form>
            </div>
        </section>
    );
};
export default Signup;
