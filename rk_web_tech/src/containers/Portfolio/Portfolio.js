import React, { useEffect, useState } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import "./portfolio.css";
import { useScript } from "../../hooks/useScript";
import { jqueryPortfolio } from "../../utils/jqueryPortfolio";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "../../utils/http-common";
import { Link } from "react-router-dom";

const fetchData = async () => {
  const data = await apiClient.get("/portfolios");
  return data.data.data;
};
const Portfolio = () => {
  const [change, setChange] = useState(false);

  const { data } = useQuery(["portfolio"], fetchData);
  useScript(jqueryPortfolio(), change);
  const handleChange = () => {
    setChange(true);
  };
  return (
    <>
      <PageBanner
        mainTitle="Portfolio"
        firstText="Home"
        firstLink="/"
        secondText="Portfolio"
        // thirdText="Mobile Application Development"
      />
      <section id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 main-heading">
              <h1>
                Our <span>Portfolio</span>
              </h1>
            </div>
            <div className="col-lg-12">
              <div className="main-heading-content">
                <p>
                  Please explore our astonishing journey and achievements in
                  UI/UX Design, Website development and Mobile application
                  development. Our certified and highly experienced team used
                  cutting edge technologies to address clients’ requirements and
                  delivered innovative, robust, reliable and steady solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="portfolio-menu">
                <ul>
                  <li
                    className="mixitup-control-active"
                    data-filter=".design"
                    onClick={handleChange}
                  >
                    UI/UX Design
                  </li>
                  <li data-filter=".web" onClick={handleChange}>
                    Website Development
                  </li>
                  <li data-filter=".apps" onClick={handleChange}>
                    Mobile Application Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row portfolio-list">
            {data?.map((item) => {
              let classNameForFilter = "";
              console.log(item.type);
              if (item?.type === "Mobile") {
                classNameForFilter = "apps";
              }
              return (
                <div
                  className={`col-sm-12 col-md-6 col-lg-4 mix ${classNameForFilter}`}
                >
                  <div className="single-work-item">
                    <Link to={`/portfolio/${item.title}`} state={item}>
                      <img
                        className="img-fluid"
                        src={item.cardImage}
                        alt="Shopmax Design"
                        title="Shopmax Design"
                      />
                    </Link>
                  </div>
                  <div className="work-info-text">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
