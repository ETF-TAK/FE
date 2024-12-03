import React from "react";
import Header from "./header/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  // 메인 페이지인가 체크
  const isMainPage = location.pathname === "/";
  return (
    <div
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div
        style={{
          marginLeft: isMainPage ? "0px" : "100px",
          marginRight: isMainPage ? "0px" : "100px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
