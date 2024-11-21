import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
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
          marginLeft: "100px",
          marginRight: "100px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
