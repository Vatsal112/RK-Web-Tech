import React from "react";

const FrequentlyAsked = ({ title, para, mainId, collapseId }) => {
  return (
    <div className="accordion-block">
      <div className="card-header" id={mainId}>
        <h4
          className="accordian-title mb-0 h3"
          data-toggle="collapse"
          data-target={`#${collapseId}`}
        >
          {title}
          <i className="fa fa-plus float-right"></i>
        </h4>
      </div>
      <div
        id={collapseId}
        className="collapse"
        aria-labelledby="headingOne0"
        data-parent="#accordionStyle01"
      >
        <div className="accordion-content pl-3 pr-3 pt-3">
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsked;
