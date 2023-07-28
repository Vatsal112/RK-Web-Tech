import React from "react";
import "./page-banner.css";
import about_us_img from "../../assets/images/page_banner/about-us.webp";
import { Link } from "react-router-dom";

const PageBanner = (props) => {
  const { mainTitle, firstText, firstLink, secondText, thirdText } = props;
  return (
    <section
      id="about-page-banner"
      class="pt-332 bg_cover"
      style={{ backgroundImage: `url(${about_us_img})` }}
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="page-banner-title">
              <h1>{mainTitle}</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <i class="fas fa-home"></i>
                    <Link to={firstLink}>{firstText}</Link>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="index.php">{secondText}</a>
                  </li>
                  {thirdText && (
                    <li class="breadcrumb-item active" aria-current="page">
                      {thirdText}
                    </li>
                  )}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
