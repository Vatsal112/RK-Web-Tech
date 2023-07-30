import React, { useEffect, useState } from "react";
import costa_banner from "../../assets/images/page_banner/costa-banner.webp";
import "./portfolio-details.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import PageBanner from "../../components/PageBanner/PageBanner";

const PortfolioDetail = () => {
  const location = useLocation();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const propsData = location.state;
  useDynamicTitle(`${propsData?.title} | RK WebTechnology`);
  useEffect(() => {
    const updateDimension = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenWidth]);
  return (
    <>
      <PageBanner
        mainTitle={propsData?.title}
        firstText="Home"
        firstLink="/"
        secondText="portfolio"
        thirdText={propsData?.title}
      />
      <section id="portfolio_details">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 mw">
              <div className="tabs">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-item nav-link active flex-grow-0 flex-shrink-0"
                      id="nav-ux-ui-tab"
                      data-toggle="tab"
                      href="#nav-ux-ui"
                      role="tab"
                      aria-controls="nav-ux-ui"
                      aria-selected="true"
                      onClick={() => {
                        if (screenWidth <= 600) {
                          document.getElementById("mainImg").src =
                            propsData?.uiUxImageMobile;
                        } else {
                          document.getElementById("mainImg").src =
                            propsData?.uiUxImage;
                        }
                      }}
                    >
                      UI/UX Design
                    </a>
                    {propsData?.websiteImage && (
                      <a
                        className="nav-item nav-link  flex-grow-0 flex-shrink-0"
                        id="nav-web-tab"
                        data-toggle="tab"
                        href="#nav-web"
                        role="tab"
                        aria-controls="nav-web"
                        aria-selected="true"
                        onClick={() => {
                          if (screenWidth <= 600) {
                            document.getElementById("mainImg").src =
                              propsData?.websiteImageMobile;
                          } else {
                            document.getElementById("mainImg").src =
                              propsData?.websiteImage;
                          }
                        }}
                      >
                        Website Development
                      </a>
                    )}
                    {propsData?.mobileAppImage && (
                      <a
                        className="nav-item nav-link  flex-grow-0 flex-shrink-0"
                        id="nav-mobile-tab"
                        data-toggle="tab"
                        href="#nav-mobile"
                        role="tab"
                        aria-controls="nav-mobile"
                        aria-selected="true"
                        onClick={() => {
                          if (screenWidth <= 600) {
                            document.getElementById("mainImg").src =
                              propsData?.mobileAppImageMobile;
                          } else {
                            document.getElementById("mainImg").src =
                              propsData?.mobileAppImage;
                          }
                        }}
                      >
                        Mobile Applicaition Development
                      </a>
                    )}
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-ux-ui"
                    role="tabpanel"
                    aria-labelledby="nav-ux-ui-tab"
                  >
                    <div className="portfolio_image">
                      <img
                        className="img-fluid ui_detail"
                        id="mainImg"
                        src={
                          screenWidth <= 600
                            ? propsData?.uiUxImageMobile
                            : propsData?.uiUxImage
                        }
                        alt="Costa International | UI/UX Design"
                        title="Costa International Design"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio_details">
                <div className="project_bg">
                  <h1>
                    Project Details<i className="fas fa-minus"></i>
                  </h1>
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <div className="project_content">
                        <h3>Title</h3>
                        <h5>{propsData?.title}</h5>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="project_content">
                        <h3>Project Year</h3>
                        <h5>{propsData?.projectDetails?.projectYear}</h5>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="project_content">
                        <h3>Team Size</h3>
                        <h5>{propsData?.projectDetails?.teamSize}</h5>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="project_content">
                        <h3>Project Summary</h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: propsData?.projectDetails.content,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="technologies">
                  <div className="technologies-box">
                    <div id="accordion">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <a
                              href="#"
                              className="btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              Technologies Used
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <div className="row align-items-center">
                              {propsData?.technologiesUsed?.map((item) => {
                                return (
                                  <div
                                    className="skill-box"
                                    style={{
                                      marginBottom: "1.2rem",
                                    }}
                                  >
                                    <div className="shape-box">
                                      <div className="inner-box">
                                        <h4>{item}</h4>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h5 className="mb-0">
                            <a
                              href="#"
                              className="btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Tools Libraries Used
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="tools">
                                  <ul>
                                    {propsData?.toolsLibraryUsed?.map(
                                      (item) => {
                                        return <li>{item}</li>;
                                      }
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetail;
