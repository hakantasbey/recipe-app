import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Details from "../pages/Details";

const AppRouter = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Login isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
        }
      />

      <Route path="" element={<PrivateRouter isLoggedin={isLoggedin} />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;