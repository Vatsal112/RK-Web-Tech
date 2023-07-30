import React from "react";

const HiringModelCard = ({ title, subTopics, src }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 services-in">
      <div
        className="services-item new-item new-item-one wow fadeInUp border-0"
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
          <img loading="lazy" src={src} alt="Fixed-Cost" />
        </div>
        <div className="services-content">
          <h3 className="services-title">{title}</h3>
          <p className="services-desc">
            <div className="main_slider_new_box">
              <div className="main_Slider_box">
                <ul style={{ textAlign: "left" }}>
                  {subTopics?.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiringModelCard;
