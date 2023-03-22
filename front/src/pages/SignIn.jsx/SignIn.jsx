import React from "react";
import { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test");
  };
  return (
    <>
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
                  setUsername(e.target.value);
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
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignIn;
