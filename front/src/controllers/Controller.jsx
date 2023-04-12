import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Controller = () => {
  const token = localStorage.getItem("sessionToken");
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default Controller;
