import React, { useEffect, useState } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import "./portfolio.css";
// import { useScript } from "../../hooks/useScript";
// import { jqueryPortfolio } from "../../utils/jqueryPortfolio";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "../../utils/http-common";
import { Link } from "react-router-dom";
import mixitup from "mixitup";
import useDynamicTitle from "../../hooks/useDynamicTitle";

const fetchData = async () => {
  const data = await apiClient.get("/portfolios");
  return data.data.data;
};
const Portfolio = () => {
  useDynamicTitle("Portfolio | RK WebTechnology");
  const { data } = useQuery(["portfolio"], fetchData);

  useEffect(() => {
    // Initialize MixItUp when the component mounts
    const container = document.querySelector(".portfolio-list");
    const mixer = mixitup(container, {
      load: {
        filter: ".design",
      },
      selectors: {
        target: ".item",
        control: ".filter-controls li",
      },
      animation: {
        duration: 300, // Animation duration in milliseconds
        easing: "ease-in-out", // Animation easing function
      },
    });

    // mixer.filter(".design");

    return () => {
      mixer.destroy();
    };
  });
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
                <ul className="filter-controls">
                  <li data-filter=".design">UI/UX Design</li>
                  <li data-filter=".web">Website Development</li>
                  <li data-filter=".apps">Mobile Application Development</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row portfolio-list">
            {data
              // ?.filter((item) => item?.type === activePortfolio)
              ?.map((item) => {
                let classNameText = "";
                if (item?.type === "Ui-Ux") {
                  classNameText = "design";
                } else if (item?.type === "Web") {
                  classNameText = "web";
                } else {
                  classNameText = "apps";
                }
                return (
                  <div
                    className={`col-sm-12 col-md-6 col-lg-4 item ${classNameText}`}
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
