import React from "react";

const CoreTechCard = ({ image, title, para }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 position-relative service-block p-0 border">
      <div
        className="text-decoration-none d-block p-4 text-center core-tech"
        href="/java-development.html"
      >
        <img
          alt="Java Development"
          src={image}
          data-src="/assets/img/our-services/java-services.png"
          className="lazyload no-src img-fluid"
          data-pagespeed-url-hash="31059146"
          // onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);"
        />
        <h4 className="mt-3 h3 text-dark">{title}</h4>
        <p className="text-dark">{para}</p>
      </div>
    </div>
  );
};

export default CoreTechCard;
