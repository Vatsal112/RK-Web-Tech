import React from "react";
import { Link } from "react-router-dom";
import "./footer-quote.css";

const FooterGetQuote = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="get-a-quote">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
            <div className="content-box text-center c-white">
              <h5 className="mb-3 footer-title">
                Let’s Create Big Stories Together
              </h5>
              <p className="mb-0 c-white text-center">
                Mobile is in our nerves. We don’t just build apps, we create
                brand.
                <br />
                Choosing us will be your best decision.
              </p>
              <div className="mt-35 text-center">
                <label className="mb-0 d-inline-flex align-items-center read-more-btn">
                  <Link
                    className="btn shadow-none"
                    title=""
                    to="/contact-us"
                    onClick={handleScroll}
                  >
                    Get A Quote{" "}
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterGetQuote;
