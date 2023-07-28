import React from "react";

const PortfolioCard = () => {
  return (
    <div class="col-sm-12 col-md-6 col-lg-4 mix design">
      <div class="single-work-item">
        <Link to="/">
          <img
            class="img-fluid"
            src={bharat_e}
            alt="Bharat Essence"
            title="Bharat Essence"
          />
        </Link>
      </div>
      <div class="work-info-text">
        <h5>Bharat Essence</h5>
      </div>
    </div>
  );
};

export default PortfolioCard;
