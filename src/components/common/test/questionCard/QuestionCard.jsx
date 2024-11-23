import React from "react";
import "./style.css";

export default function QuestionCard() {
  return (
    <div className="question-card-container">
      <div>
        <div className="question-card-number">
          <span>Q. 1</span>/5
        </div>
        <div className="question-card-content">현재 연금계좌에서 투자하고 있나요?</div>
      </div>
      <div className="question-card-button-wrapper">
        <div className="question-card-button">네, 투자하고 있어요</div>
        <div className="question-card-button">아니오, 지금은 안하고 있어요</div>
      </div>
    </div>
  );
}
