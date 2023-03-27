import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { pending, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleError = (error) => {
    toast.error(error);
  };

  const handleValid = (message) => {
    toast.success(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch, handleError, handleValid);
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                onClick={() => {
                  isChecked ? setIsChecked(false) : setIsChecked(true);
                }}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button
              className="sign-in-button"
              disabled={pending}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Sign In
            </button>
            {pending && <span>Loading ...</span>}
            {token !== "" ? <Navigate to="/user" /> : ""}
          </form>
        </section>
      </main>
    </>
  );
};

export default SignIn;
