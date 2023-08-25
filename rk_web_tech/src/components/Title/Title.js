import React from "react";
import "./title.css";
const Title = ({ normalText, spanText, color }) => {
  return (
    <div className="row w-100 m-auto">
      <div className="col-lg-12 heading">
        <h1 style={{ color: color ? "white" : "#002a54" }}>
          {normalText}
          <span></span>
          <span className="ml-2">{spanText}</span>
        </h1>
      </div>
    </div>
  );
};

export default Title;
