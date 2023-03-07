import React from "react";
import "./login.scss";
import loginLogo from "../../../assets/images/loginLG.png";
import { RiUserFill, RiLockFill } from "react-icons/ri";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    e.persist();
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
      } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="loginBox">
        <div className="loginLogo">
          <img src={loginLogo} alt="Login" />
        </div>
        <div className="loginForm">
          <div className="emailBox">
            <RiUserFill className="icon" />
            <input
              type="username"
              onChange={handleChange}
              id="username"
              className="username"
              placeholder="Username"
            />
          </div>
          <div className="passwordBox">
            <RiLockFill className="icon" />
            <input
              type="password"
              onChange={handleChange}
              id="password"
              className="password"
              placeholder="Password"
            />
          </div>

          <p>
            <a>Forgot your password?</a>
          </p>
        </div>{" "}
        <div className="loginBtn">
          <button onClick={handleClick} type="submit">
            LOG IN
          </button>
        </div>
        {error && <span> {error.message}</span>}
      </div>
    </div>
  );
};
export default Login;
