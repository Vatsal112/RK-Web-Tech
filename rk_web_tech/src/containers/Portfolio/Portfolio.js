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
import TitleDescription from "../../components/TitleDescription/TitleDescription";

const fetchData = async () => {
  const data = await apiClient.get("/portfolios");
  return data.data.data;
};
const Portfolio = () => {
  useDynamicTitle("Portfolio | RK WebTechnology");
  const { data } = useQuery(["portfolio"], fetchData);
  const [index, setIndex] = useState(9);
  const initialPost = data?.slice(0, index);
  const [isCompleted, setIsCompleted] = useState(false);

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

  const handleLoadMore = () => {
    setIndex(index + 3);

    if (index >= data.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
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
                <TitleDescription
                  desc="Please explore our astonishing journey and achievements in
                  UI/UX Design, Website development and Mobile application
                  development. Our certified and highly experienced team used
                  cutting edge technologies to address clients’ requirements and
                  delivered innovative, robust, reliable and steady solutions."
                  classCustom="text-left  m-auto"
                />
                <p></p>
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
            {initialPost?.map((parentItem) => {
              let classNameTextParent = parentItem?.type;
              if (parentItem?.type?.split(",")) {
                return parentItem?.type?.split(",")?.map((item) => {
                  let classNameText = "";
                  if (item === "website") {
                    classNameText = "web";
                  } else if (item === "App") {
                    classNameText = "apps";
                  } else {
                    classNameText = "design";
                  }
                  return (
                    <div
                      className={`col-sm-12 col-md-6 col-lg-4 item ${classNameText}`}
                    >
                      <div className="single-work-item">
                        <Link
                          to={`/portfolio/${parentItem.title}`}
                          state={parentItem}
                        >
                          <img
                            className="img-fluid"
                            src={parentItem.cardImage}
                            alt="Shopmax Design"
                            title="Shopmax Design"
                          />
                        </Link>
                      </div>
                      <div className="work-info-text">
                        <h5>{parentItem.title}</h5>
                      </div>
                    </div>
                  );
                });
              } else {
                return (
                  <div
                    className={`col-sm-12 col-md-6 col-lg-4 item ${classNameTextParent}`}
                  >
                    <div className="single-work-item">
                      <Link
                        to={`/portfolio/${parentItem.title}`}
                        state={parentItem}
                      >
                        <img
                          className="img-fluid"
                          src={parentItem.cardImage}
                          alt="Shopmax Design"
                          title="Shopmax Design"
                        />
                      </Link>
                    </div>
                    <div className="work-info-text">
                      <h5>{parentItem.title}</h5>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        {!isCompleted && initialPost?.length > 9 && (
          <button
            className="btn d-block m-auto mt-5 load-more"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </section>
    </>
  );
};

export default Portfolio;
