import React from "react";
import "./style.css"

export default function WordCard(props) {
  const { img, title, num, onClick } = props;

  return (
    <div className="card"
      style={{ backgroundImage: `url(${img})`}} 
      onClick={onClick}
    >
      <p style={{ fontSize: "14px", margin: "25px 0" }}>{num}편</p> {/* 순서 */}
      <h3 style={{ fontSize: "18px"}}>{title}</h3> {/* 제목 */}
    </div>
  );
}

