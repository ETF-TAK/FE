import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function QuestionCard() {
  const questions = [
    {
      id: 1,
      question: "투자 기간에 대해 어떻게 생각하시나요?",
      options: ["단기간에 수익을 내고 싶어요 ⏱️", "장기간 투자하면서 성장을 지켜보고 싶어요 🌳"],
      point: [2, 1],
    },
    {
      id: 2,
      question: "투자할 때 어떤 목표를 더 중요하게 생각하나요?",
      options: ["빠르게 높은 수익을 얻고 싶어요 🚀", "안전하게 꾸준한 수익을 얻고 싶어요 🌱"],
      point: [2, 1],
    },
    {
      id: 3,
      question: "위험을 감수하더라도 더 큰 수익을 원하나요?",
      options: ["네, 큰 수익을 목표로 하고 싶어요 💰", "아니요, 안정적인 투자가 중요해요 💼"],
      point: [2, 0],
    },
    {
      id: 4,
      question: "투자 경험이 없다면, 어떤 접근이 더 편하게 느껴지나요?",
      options: ["미국의 글로벌 기업에 투자해보고 싶어요 🇺🇸", "한국의 잘 아는 기업에 투자해보고 싶어요 🇰🇷"],
      point: [0, 100],
    },
    {
      id: 5,
      question: "분산투자보다 레버리지나 인버스 상품을 통한 투자를 선호하시나요?",
      options: ["네, 선호해요 ⭕️", "아니요, 선호하지 않아요 ❌"],
      point: [2, 0],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (index) => {
    const selectedPoint = questions[currentQuestionIndex].point[index];

    setAnswers((prevAnswers) => prevAnswers + selectedPoint);

    if (currentQuestionIndex < 4) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (currentQuestionIndex === 4) {
      navigate("/test/result", { state: { answer: answers } });
    }
  }, [currentQuestionIndex, answers, navigate]);

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
