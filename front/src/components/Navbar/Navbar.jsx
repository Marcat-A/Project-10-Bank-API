import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { handleError } from "../../pages/SignIn/SignIn";
import { fetchUser, logout } from "../../redux/apiCalls";

const Navbar = () => {
  const { token, firstName } = useSelector((state) => state.user);

  useEffect(() => {
    if (
      window.location.href !== "http://localhost:3000/sign-in" &&
      sessionToken
    )
      if (sessionToken === "default") {
        fetchUser(token, dispatch);
        localStorage.setItem("sessionToken", token);
      } else {
        fetchUser(sessionToken, dispatch);
      }
  }, []);

  const sessionToken = localStorage.getItem("sessionToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const disconnect = async () => {
    try {
      await logout(token, dispatch);
      navigate("/");
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
        {!sessionToken ? (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          <div className="logout">
            <Link to="/user" className="main-nav-item button">
              <div className="secondElementNav">
                <i className="fa fa-user-circle"></i>
                {firstName}
              </div>
            </Link>
            <button
              onClick={() => disconnect()}
              className="main-nav-item button"
            >
              <div className="secondElementNav">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                Sign Out
              </div>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
