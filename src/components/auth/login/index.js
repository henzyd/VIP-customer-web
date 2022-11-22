import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import styles from "./index.module.css";
import { login_a } from "store/actions/authActions";
import { AuthStore } from "store/contexts/AuthContext";

const Login = () => {
  const { dispatch } = AuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const nav = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (email && password.length > 8) {
      login_a(dispatch);
      nav("/dashboard");
    } else if (password.length < 8) {
      setIsVisible(true);
    }
  };

  return (
    <div className={styles.login__container}>
      <div className={styles.login__container__img}>
        <div>
          <h1>Let&apos;s help you, identify VIPs</h1>
          <p>
            We are closer than you can imagine, AXE VIP always at your service.
          </p>
        </div>
      </div>

      <div className={styles.login}>
        <h1>Login</h1>

        <p>Welcome, Kindly enter your details to login.</p>

        <form action="">
          <div className={styles.formgroup}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="JohnDoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.formgroup}>
            <div>
              <label htmlFor="">Password</label>
              <a href="/password-recovery">Reset password</a>
            </div>
            <input
              type="password"
              placeholder="************************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isVisible && <p>Incorrect Password</p>}
          </div>

          <div id={styles.remember}>
            <span>
              <input type="checkbox" />
            </span>
            <p>Remember me</p>
          </div>

          <button
            className={styles.login__btn}
            onClick={(e) => {
              handleClick(e);
            }}>
            Login
          </button>
        </form>

        <div className={styles.lines}>
          <span className={styles.line}></span>{" "}
          <span className={styles.txt}>OR</span>{" "}
          <span className={styles.line}></span>
        </div>

        <button className={styles.google}>
          <FcGoogle />
          Authorize with Google
        </button>

        <p>
          Don&apos;t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
