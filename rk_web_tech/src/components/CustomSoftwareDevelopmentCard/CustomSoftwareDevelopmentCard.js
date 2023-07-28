import React from "react";

const CustomSoftwareDevelopmentCard = ({ title, para, image }) => {
  return (
    <div class="col-md-4 d-flex">
      <div class="feature-box">
        <div class="feature-icon">
          <img src={image} />
        </div>
        <h3 class="feature-title mt-0">{title}</h3>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default CustomSoftwareDevelopmentCard;
