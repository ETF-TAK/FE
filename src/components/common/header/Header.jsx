import React from "react";
import { useLocation } from "react-router-dom";
import MainLogo from "../../../assets/images/common/logo.png";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link>
        <img src={MainLogo} alt="로고 이미지" className="navbar-logo" />
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/invest" className={location.pathname === "/invest" ? "active" : ""}>
            1년 전에 투자했다면?
          </Link>
        </li>
        <li>
          <Link to="/compare" className={location.pathname === "/compare" ? "active" : ""}>
            ETF 비교
          </Link>
        </li>
        <li>
          <Link to="/guide" className={location.pathname === "/guide" ? "active" : ""}>
            ETF 투자 가이드
          </Link>
        </li>
        <li>
          <Link to="/test" className={location.pathname === "/test" ? "active" : ""}>
            투자 성향 테스트
          </Link>
        </li>
      </ul>
    </nav>
  );
}
