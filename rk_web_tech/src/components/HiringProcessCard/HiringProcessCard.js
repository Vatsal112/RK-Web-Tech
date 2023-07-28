import React from "react";

const HiringProcessCard = ({ icon, title, para }) => {
  return (
    <li class="col-md-6 col-xl-4 d-lg-flex text-center text-lg-left p-4 p-xl-5">
      <div class="block-style01-icon">
        <i class={icon}></i>
      </div>
      <div class="block-style01-content pl-lg-3 mt-4 mt-lg-0">
        <h3>{title}</h3>
        <p class="m-0 line-height-26">{para}</p>
      </div>
    </li>
  );
};

export default HiringProcessCard;
