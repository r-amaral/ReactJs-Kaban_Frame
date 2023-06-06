import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../Views/Login";
import Register from "../Views/Register";
import DashBoard from "../Views/DashBoard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
