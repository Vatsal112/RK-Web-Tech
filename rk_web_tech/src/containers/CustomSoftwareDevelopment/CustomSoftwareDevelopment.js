import React from "react";
import { Link } from "react-router-dom";
import services_bg from "../../assets/images/page_banner/services.webp";
import Title from "../../components/Title/Title";
import "./custom-software-development.css";
import { useScript } from "../../hooks/useScript";
import { scriptMain } from "../../utils/particleCode";
import PageBanner from "../../components/PageBanner/PageBanner";
import {
  comprehensiveCardData,
  coreTechCard,
  frequentlyData,
  HiringModelData,
} from "../../utils/StaticDataForCards";
import FrequentlyAsked from "../../components/FrequentlyAskedCard/FrequentlyAsked";
import ComprehensiveCard from "../../components/ComprehensiveCard/ComprehensiveCard";
import CoreTechCard from "../../components/CoreTechCard/CoreTechCard";
import HiringModelCard from "../../components/HiringModelCard/HiringModelCard";

const CustomSoftwareDevelopment = () => {
  useScript(scriptMain());
  return (
    <>
      <PageBanner />
      <section className="slider_new mt-5">
        <Title normalText="Custom Software" spanText="Development" />
        <div className="d1-table">
          <div className="d-table-cel">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7 col-md-12 co-sm-12">
                  <div className="main_slider_new_box">
                    <p>
                      Providing next-generation custom software development
                      services, no matter the industry.
                    </p>
                    <p>
                      RK WebTechnology collaborates closely with clients all
                      around the world to provide full-spectrum, unique software
                      solutions. We've done it before, and we can do it for you,
                      whether it's creating an MVP or a whole product suite.
                    </p>
                    <div className="main_Slider_box mt-2">
                      <ul>
                        <li>Agile software development services</li>
                        <li>Business-specific software customization</li>
                        <li>Software for all-size industry verticals</li>
                      </ul>
                    </div>
                    <div className="baneer-btn">
                      <Link
                        id="banner_btn"
                        className="default-btn-one text-uppercase"
                        to="https://www.prismetric.com/request-quote/"
                      >
                        Let&#8217;s Discuss
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                  <div className="banner-img">
                    <img
                      data-src="https://www.prismetric.com/wp-content/uploads/2021/06/software_development_4.webp?tr=w-478.33,h-478.33"
                      loading="lazy"
                      src="https://www.prismetric.com/wp-content/uploads/2021/06/software_development_4.webp?tr=w-478.33,h-478.33"
                      className="img-fluid"
                      width="100%"
                      height="100%"
                      alt="Top Software Development Company"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rs-services  style4 main-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                <h2>Comprehensive Customized Software Development Services</h2>
                <p className="max-wid">
                  Business-specific software development is one of the key
                  aspects to select Prismetric for custom software development
                  services for your business requirements. In other words, our
                  experienced software engineers listen to every word you say
                  and work accordingly. In true sense, it is a complete software
                  tool that your business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {comprehensiveCardData.map((item) => {
              return (
                <ComprehensiveCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  para={item.para}
                />
              );
            })}
          </div>
        </div>
      </section>
      <div className="pb-4 pb-md-5" id="Core-Technologies">
        <div className="container">
          <hr className="hr-divider" />
          <div className="row text-center">
            <div className="col-12">
              <Title normalText="Core" spanText="Technologies" />
              <p>
                We provide services encompassing the core technologies used in
                custom software design and development. Our experienced
                developers use the most efficient platforms to build tailor-made
                software to address specific needs. We work with Java, PHP,
                .NET, Python, C#, etc. to produce applications of various scales
                and uses.
              </p>
            </div>
          </div>
        </div>
        <div className="p-xl-5">
          <div className="container-fluid text-dark">
            <div className="row text-black text-center">
              {coreTechCard.map((item) => {
                return (
                  <CoreTechCard
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    para={item.para}
                  />
                );
              })}
            </div>
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
                <p className="max-wid">
                  Prismetric brings you budget-friendly solutions. Hire expert
                  web and mobile app programmers at affordable costs
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

export default CustomSoftwareDevelopment;
