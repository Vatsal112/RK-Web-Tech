import React from "react";

const OurKeyFeatureCard = ({ title, subtitle, para }) => {
  return (
    <div className="swiper-slide">
      <div className="card-box card-box-img-1 c-white">
        <div className="content d-flex flex-column">
          <div className="align-self-start">
            <img
              width="50px"
              height="50px"
              src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/okf-client-centric-development.svg"
              alt="client centric development"
            />
            <h3 className="my-3">
              {title}
              <br />
              {subtitle}
            </h3>
          </div>
          <p className="desc mb-0 c-white">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default OurKeyFeatureCard;
