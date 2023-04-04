import "./Login.css";

const Login = () => {
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
            ></input>
          </div>
          <button className="login-button">Log In</button>
        </form>
      </div>
    </section>
  );
};
export default Login;
