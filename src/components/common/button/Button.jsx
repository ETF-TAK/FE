import React from "react";
import "./style.css";

export default function Button(props) {
  const { text, fontsize, width, onClickFunction, imgSrc, padding } = props;
  return (
    <div>
      <button
        className="blue-button"
        style={{ width: width, fontSize: fontsize, padding: padding }}
        onClick={() => {
          onClickFunction();
        }}
      >
        {imgSrc && <img src={imgSrc} alt="버튼 이미자" style={{ width: "28px", marginRight: "20px" }} />}
        {text}
      </button>
    </div>
  );
}
