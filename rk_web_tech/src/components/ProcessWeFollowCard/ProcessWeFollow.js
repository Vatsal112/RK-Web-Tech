import React from "react";

const ProcessWeFollow = ({ id, title, para, src }) => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3 mt-md-3 mt-lg-4">
      <div className="card-box">
        <div className="title-box d-flex align-items-center flex-column justify-content-center text-center">
          <div className="process-icon">
            <img src={src} />{" "}
          </div>
          <h3 className="h6 my-3 w-100">
            <b>
              {id}. {title}
            </b>
          </h3>
          <p className="desc m-0">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessWeFollow;
