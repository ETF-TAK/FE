import React from "react";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QuestionCard() {
  const questions = [
    {
      id: 1,
      question: "현재 연금계좌에서 투자하고 있나요?",
      options: ["네, 투자하고 있어요", "아니오, 지금은 안하고 있어요"],
    },
    {
      id: 2,
      question: "분산투자보다 레버리지나 인버스 상품을 통한 투자를 선호하시나요?",
      options: ["네, 선호해요", "아니요, 선호하진 않아요"],
    },
    {
      id: 3,
      question: "국내주식보다 미국주식에 대한 투자를 더 선호하시나요?",
      options: ["네, 미국 주식이 더 좋아요", "아니요, 국내 주식을 더 좋아해요"],
    },
    {
      id: 4,
      question: "거시적인 시장 경제의 흐름에 관심이 많으신가요?",
      options: ["네, 관심이 많아요", "아니요, 관심이 많진 않아요"],
    },
    {
      id: 5,
      question: "2차전지, 반도체와 같은 최근 트렌드 산업에 관심이 있으신가요?",
      options: ["네, 관심 있어요", "아니요, 관심 없어요"],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (index) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers, index];

      if (currentQuestionIndex === 4) {
        navigate("/test/result", { state: { answers: updatedAnswers } });
      }

      return updatedAnswers;
    });

    if (currentQuestionIndex < 4) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="question-card-container">
      <div>
        <div className="question-card-number">
          <span>Q. {currentQuestionIndex + 1}</span>/5
        </div>
        <div className="question-card-content">{questions[currentQuestionIndex].question}</div>
      </div>
      <div className="question-card-button-wrapper">
        <div
          className="question-card-button"
          onClick={() => {
            handleAnswer(0);
          }}
        >
          {questions[currentQuestionIndex].options[0]}
        </div>
        <div
          className="question-card-button"
          onClick={() => {
            handleAnswer(1);
          }}
        >
          {questions[currentQuestionIndex].options[1]}
        </div>
      </div>
    </div>
  );
}
