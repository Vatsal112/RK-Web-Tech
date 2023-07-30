import React from "react";

const ComprehensiveCard = ({ image, title, para }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 services-in">
      <div
        className="services-item new-item new-item-three wow fadeInUp border-0"
        data-wow-delay="100ms"
        data-wow-duration="1500ms"
        style={{
          visibility: "visible",
          animationDuration: "1500ms",
          animationDelay: "100ms",
          animationName: "fadeInUp",
        }}
      >
        <div className="services-icon new_f_one">
          <img
            loading="lazy"
            src={image}
            alt="Customized software development"
          />
        </div>
        <div className="services-content">
          <h3 className="services-title mt-3">{title}</h3>
          <p className="">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveCard;
