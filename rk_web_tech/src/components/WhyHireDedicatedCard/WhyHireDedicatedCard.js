import React from "react";

const WhyHireDedicatedCard = ({ image, title }) => {
  return (
    <div class="col-md-4 col-sm-6 col-6">
      <div class="why-should-item d-flex align-items-center">
        <div class="why-should-icon">
          <img height={35} width={35} src={image} alt="" />
          {/* <figure style={{backgroundPosition: "-125px 0px"}}></figure> */}
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default WhyHireDedicatedCard;
