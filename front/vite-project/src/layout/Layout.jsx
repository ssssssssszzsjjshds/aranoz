import React from "react";
import { Outlet } from "react-router";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div>
        <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
