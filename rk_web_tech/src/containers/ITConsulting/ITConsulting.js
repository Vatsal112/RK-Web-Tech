import React from "react";
import CustomSoftwareDevelopmentCard from "../../components/CustomSoftwareDevelopmentCard/CustomSoftwareDevelopmentCard";
import FrequentlyAsked from "../../components/FrequentlyAskedCard/FrequentlyAsked";
import HiringModelCard from "../../components/HiringModelCard/HiringModelCard";
import PageBanner from "../../components/PageBanner/PageBanner";
import Title from "../../components/Title/Title";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import { useScript } from "../../hooks/useScript";
import { scriptMain } from "../../utils/particleCode";
import {
  frequentlyData,
  HiringModelData,
  ITConsultingCard,
} from "../../utils/StaticDataForCards";
import "./it-consulting.css";

const ITConsulting = () => {
  useDynamicTitle("IT Consulting | RK WebTechnology");
  useScript(scriptMain());
  return (
    <>
      <PageBanner
        mainTitle="IT Consulting"
        firstText="Home"
        firstLink="/"
        secondText="Services"
        thirdText="IT Consulting"
      />
      <div
        className="white-wrapper pt-4 pt-md-5 custom-development"
        id="Services"
      >
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <Title
                normalText="We provide custom software development"
                spanText="services in the areas mentioned below"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid px-md-4">
          <div className="row mt-5">
            {ITConsultingCard.map((item) => {
              return (
                <CustomSoftwareDevelopmentCard
                  key={item.id}
                  title={item.title}
                  para={item.para}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* our hiring model */}
      <section className="rs-services  style4 main-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                {/* <h2>Our Hiring Model for Dedicated Developers Team </h2> */}
                <Title
                  normalText="Our Hiring Model"
                  spanText="Dedicated Developer Team"
                />
                <p className="max-wid m-auto">
                  Rk web technology brings you budget-friendly solutions. Hire
                  expert web and mobile app programmers at affordable costs
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {HiringModelData.map((item) => {
              return (
                <HiringModelCard
                  key={item.id}
                  title={item.title}
                  subTopics={item.subTopics}
                  src={item?.src}
                />
              );
            })}
          </div>
        </div>
      </section>
      <div className="faq-section pt-5 pb-5" id="FAQ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Title normalText="Frequently Asked" spanText="Questions" />
              <div className="accordion" id="accordionStyle01">
                {frequentlyData.map((item) => {
                  return (
                    <FrequentlyAsked
                      title={item.title}
                      para={item.para}
                      mainId={item.mainId}
                      collapseId={item.collapseId}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITConsulting;
