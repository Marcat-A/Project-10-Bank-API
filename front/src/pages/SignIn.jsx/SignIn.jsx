import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signIn } from "../../redux/apiCalls";
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [create, setCreate] = useState(false);
  const { pending, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!create) {
      login({ email, password }, dispatch, handleError, handleValid);
    } else {
      signIn(
        { email, password, firstName, lastName },
        dispatch,
        handleError,
        handleValid
      );
    }
  };
  return !create ? (
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
            <span
              className="create"
              onClick={() => {
                setCreate(true);
              }}
            >
              Don't have an account ?
            </span>
          </form>
        </section>
      </main>
    </>
  ) : (
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
              <label htmlFor="username">Email</label>
              <input
                type="text"
                id="username"
                required
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
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Firstname</label>
              <input
                type="text"
                id="firstname"
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Lastname</label>
              <input
                type="text"
                id="lastname"
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <button
              className="sign-in-button"
              disabled={pending}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Create Account
            </button>
            {pending && <span>Loading ...</span>}
            {token !== "" ? <Navigate to="/user" /> : ""}
            <span
              className="create"
              onClick={() => {
                setCreate(false);
              }}
            >
              Alredy have an account ?
            </span>
          </form>
        </section>
      </main>
    </>
  );
};

export const handleError = (error) => {
  toast.error(error);
};

export const handleValid = (message) => {
  toast.success(message);
};

export default SignIn;
