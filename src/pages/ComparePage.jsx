import React from "react";
import { useNavigate } from "react-router-dom";

export default function ComparePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>ComparePage</h1>
      <button onClick={() => navigate("/detail?etfId=1")}>Go to DetailPage (ETF1)</button>
      <button onClick={() => navigate("/detail?etfId=2")}>Go to DetailPage (ETF2)</button>
    </div>
  );
}
