import React from "react";
import "./style.css";

export default function Button(props) {
  const { text, fontsize, width } = props;
  return (
    <div>
      <button className="blue-button" style={{ width: width, fontSize: fontsize }}>
        {text}
      </button>
    </div>
  );
}
