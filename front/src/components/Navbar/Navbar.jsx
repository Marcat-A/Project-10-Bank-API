import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { handleError } from "../../pages/SignIn.jsx/SignIn";
import { logout } from "../../redux/apiCalls";

const Navbar = () => {
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const disconnect = () => {
    try {
      logout(token, dispatch);
    } catch (err) {
      handleError(err.message);
    }
  };
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!token ? (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          <button onClick={() => disconnect()} className="main-nav-item button">
            <i className="fa fa-user-circle"></i>
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
