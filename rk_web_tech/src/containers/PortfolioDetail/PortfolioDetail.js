import React from "react";
import costa_banner from "../../assets/images/page_banner/costa-banner.webp";
import "./portfolio-details.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const PortfolioDetail = () => {
  const location = useLocation();
  const propsData = location.state;
  console.log(propsData);
  return (
    <>
      <section
        id="portfolio-details-banner"
        className="pt-332 bg_cover"
        style={{ backgroundImage: `url(${costa_banner})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="page-banner-title">
                <h1>Costa International</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <i className="fas fa-home"></i>
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="#">Portfolio</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Costa International
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio_details">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 mw">
              <div className="tabs">
                <nav>
                  <div
                    className="nav nav-tabs nav-fill"
                    id="nav-tab"
                    role="tablist"
                  >
                    <Link
                      className="nav-item nav-link active"
                      id="nav-ux-ui-tab"
                      data-toggle="tab"
                      href="#nav-ux-ui"
                      role="tab"
                      aria-controls="nav-ux-ui"
                      aria-selected="true"
                    >
                      UI/UX Design
                    </Link>
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
                        src={
                          "https://www.rkwebtechnology.com/images/portfolio/details/pillow-mart.webp"
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
                                console.log(item);
                                return (
                                  <div className="skill-box">
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
