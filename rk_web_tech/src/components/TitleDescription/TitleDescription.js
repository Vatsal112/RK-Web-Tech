import React from "react";

const TitleDescription = ({ desc, color, classCustom }) => {
  return (
    <p
      className={`title-desc ${classCustom}`}
      style={{ color: color ? "white" : "#696969" }}
    >
      {desc}
    </p>
  );
};

export default TitleDescription;
