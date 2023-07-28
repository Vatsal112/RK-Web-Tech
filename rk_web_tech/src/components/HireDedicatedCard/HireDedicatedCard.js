import React from "react";

const HireDedicatedCard = ({ image, title }) => {
  return (
    <div class="col-md-4 hire-icon">
      <a href="#">
        <img
          src={image}
          data-src="/assets/img/hire-developers/Node.js_logo.png"
          class="lazyload no-src"
          alt="Hire VueJS Developers"
          data-pagespeed-url-hash="31059146"
          onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
        />{" "}
        <span>
          {title}
          <br />
          Developers
        </span>
      </a>
    </div>
  );
};

export default HireDedicatedCard;
