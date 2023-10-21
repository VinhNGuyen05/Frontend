import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{marginTop: "1.5px", }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
