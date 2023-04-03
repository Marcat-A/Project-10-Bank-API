import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const Controller = () => {
  // const { token } = useSelector((state) => state.user);
  const token = localStorage.getItem("sessionToken");
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default Controller;
