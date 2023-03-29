import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { editUser, fetchUser } from "../../redux/apiCalls";
import { handleError, handleValid } from "../SignIn.jsx/SignIn";

const User = () => {
  const [update, setUpdate] = useState(true);
  useEffect(() => {
    fetchUser(token, dispatch);
  }, []);
  const { token, firstName, lastName } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  const handleEdit = () => {
    try {
      editUser(
        {
          firstName: newFirstName ? newFirstName : firstName,
          lastName: newLastName ? newLastName : lastName,
        },
        dispatch,
        token,
        handleError
      );
      handleValid("User successfully updated !");
      setUpdate(false);
    } catch (err) {
      handleError(err.message);
    }
  };
  return (
    <>
      <Toaster />
      <main className="main bg-dark">
        {!update ? (
          <div className="header">
            <h1>
              Welcome back
              <br />
              {`${firstName}  ${lastName}`}!
            </h1>
            <button className="edit-button" onClick={() => setUpdate(true)}>
              Edit Name
            </button>
          </div>
        ) : (
          <div className="header">
            <h1>
              Welcome back
              <br />
              <input
                type="text"
                name="firstName"
                className="update-inputs"
                placeholder={firstName}
                onChange={(e) => {
                  setNewFirstName(e.target.value);
                }}
              />
              <input
                type="text"
                name="lastName"
                className="update-inputs"
                placeholder={lastName}
                onChange={(e) => {
                  setNewLastName(e.target.value);
                }}
              />
            </h1>
            <button
              className="save-button double-btn"
              onClick={() => {
                handleEdit();
              }}
            >
              Save
            </button>
            <button
              className="cancel-button double-btn"
              onClick={() => {
                setUpdate(false);
              }}
            >
              Cancel
            </button>
          </div>
        )}

        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default User;
