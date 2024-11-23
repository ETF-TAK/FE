import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";

export default function TestResultPage() {
  const location = useLocation();
  const { answers } = location.state || { answers: [] };
  console.log(location.state);

  return <div>TestResultPage</div>;
}
