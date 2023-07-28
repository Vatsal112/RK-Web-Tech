import React from "react";

const SAPTechnologyCard = ({ image, title, para }) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 px-1">
      <div
        className="abouts_box wow fadeInUp"
        data-wow-delay="100ms"
        data-wow-duration="1500ms"
        style={{
          visibility: "visible",
          animationDuration: "1500ms",
          animationDelay: "100ms",
          animationName: "fadeInUp",
        }}
      >
        <div className="services-icon">
          <img
            data-src="https://www.prismetric.com/wp-content/uploads/2021/04/SAP-Technical-Services.svg?tr=w-50,h-50"
            loading="lazy"
            src={image}
            alt="SAP Technical Services"
          />
        </div>
        <div className="services-content">
          <h3 className="services-title">{title}</h3>
          <p className="services-desc">{para}</p>
          {/* <a
            className="read_more services-btn"
            href="https://www.prismetric.com/sap-technical-services/"
          >
            Know More <i className="ri-arrow-right-line"></i>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default SAPTechnologyCard;
