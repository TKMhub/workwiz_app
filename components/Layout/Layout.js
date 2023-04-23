import React from "react";
import { Header } from "components/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="menu"></div>
      <main>{children}</main>
      {/* 共通のフッターなどを実装 */}
    </>
  );
};

export default Layout;
