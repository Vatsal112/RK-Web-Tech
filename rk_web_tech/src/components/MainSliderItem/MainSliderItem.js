import React from "react";

const MainSliderItem = ({ firstTitle, secondTitle, para, active }) => {
  return (
    <div className={`carousel-item ${active && "active"}`}>
      <div className="carousel-caption">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="slider_content w-75 m-auto text-center">
                <h1 className="bounceInUp text-center">{firstTitle}</h1>
                <h2 className="bounceInUp text-center">{secondTitle}</h2>
                <p className="bounceInUp text-center">{para}</p>
              </div>
            </div>
            {/* <div className="col-sm-12 col-md-6 col-lg-6 overflow-hidden">
          <div className="slide_1">
            <img
              src={slide1}
              alt="RK WebTechnology Company is offering services like UI/UX Design, Graphics Design and other designing solutions."
              title="UI/UX Design"
              className="img-fluid bounceInRight"
            />
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSliderItem;
