import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import MbtiCard from "../../../components/common/test/mbtiCard/MbtiCard";

export default function TestResultPage() {
  const location = useLocation();
  const { answers } = location.state || { answers: [] };
  console.log(location.state);

  return (
    <div>
      <MbtiCard index={0} />
      <MbtiCard index={1} />
      <MbtiCard index={2} />
      <MbtiCard index={3} />
      <MbtiCard index={4} />
    </div>
  );
}
