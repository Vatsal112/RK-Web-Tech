import React from "react";
// import web_dev_img from "../../assets/images/page_banner/web-development.webp";
import PageBanner from "../../components/PageBanner/PageBanner";
import "./web-development.css";
import Title from "../../components/Title/Title";
import {
  frequentlyData,
  HiringModelData,
  webDevtechCard,
} from "../../utils/StaticDataForCards";
import FrequentlyAsked from "../../components/FrequentlyAskedCard/FrequentlyAsked";
import WebDevelopmentCard from "../../components/WebDevelopmentCard/WebDevelopmentCard";
import HiringModelCard from "../../components/HiringModelCard/HiringModelCard";
import { Link } from "react-router-dom";

const WebsiteDevelopment = () => {
  return (
    <>
      <PageBanner
        mainTitle="Web Application Development"
        firstText="Home"
        firstLink="/"
        secondText="Services"
        thirdText="Wep Application Development"
      />
      <section className="mt-5">
        <div id="web_development">
          <div className="container">
            <Title normalText="Web Application" spanText="Development" />
            <div className="row">
              <div className="col-lg-12">
                <div className="web_development_content">
                  <p>
                    Design, Develop and deploy web applications to bring
                    impactful change within your web development projects. RK
                    WebTechnology’s development approach assist clients right
                    from analyzing disruptive web development challenges to
                    create an intuitive UI/UX, fully functional and powerful web
                    based solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-padding abuts-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                <h2>
                  End-to-End Solutions as Leading Software Development Company
                </h2>
                <p>
                  We house the best professional software developers who have
                  hands-on experience with various tools and technologies
                  required to build quality software. Depending on the type of
                  software to be built, we excel in waterfall to agile software
                  development methodology and use vigorous software testing
                  tools to check the quality of the product before delivering it
                  to our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 px-1">
              <div
                className="abouts_box wow fadeInUp"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "100ms",
                  animationName: "fadeInUp",
                }}
              >
                <div className="services-icon">
                  <img
                    data-src="https://www.prismetric.com/wp-content/uploads/2021/05/Consultation-and-development.svg?tr=w-50,h-50"
                    loading="lazy"
                    src="https://www.prismetric.com/wp-content/uploads/2021/05/Consultation-and-development.svg?tr=w-50,h-50"
                    alt="Consultation and development"
                  />
                </div>
                <div className="services-content">
                  <h3 className="services-title">
                    Consultation and development
                  </h3>
                  <p className="services-desc">
                    Hire skilled software developers at Prismetric and discuss
                    your business processes & strategies, and we’ll help you
                    figure out a perfectly planned solution that is scalable and
                    fruitful. From business automation to digital client
                    handling, we have an answer to all your queries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 px-1">
              <div
                className="abouts_box wow fadeInUp"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "100ms",
                  animationName: "fadeInUp",
                }}
              >
                <div className="services-icon">
                  <img
                    data-src="https://www.prismetric.com/wp-content/uploads/2021/05/Design-to-deployment.svg?tr=w-50,h-50"
                    loading="lazy"
                    src="https://www.prismetric.com/wp-content/uploads/2021/05/Design-to-deployment.svg?tr=w-50,h-50"
                    alt="Software Design to deployment"
                  />
                </div>
                <div className="services-content">
                  <h3 className="services-title">
                    Software Design to deployment
                  </h3>
                  <p className="services-desc">
                    Prismetric, a top custom software development firm, is a
                    one-stop solution. You can{" "}
                    <Link
                      to="https://www.prismetric.com/hire-full-stack-developers/"
                      style={{ color: "#ff414b !important;" }}
                      target="_blank"
                    >
                      hire full stack developers
                    </Link>{" "}
                    or software programmers in web and mobile technologies. We
                    take care of your entire software development project from
                    building software to deploy it into your existing business
                    flow.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 px-1">
              <div
                className="abouts_box wow fadeInUp"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "100ms",
                  animationName: "fadeInUp",
                }}
              >
                <div className="services-icon">
                  <img
                    data-src="https://www.prismetric.com/wp-content/uploads/2021/05/Enterprise-mobility.svg?tr=w-50,h-50"
                    loading="lazy"
                    src="https://www.prismetric.com/wp-content/uploads/2021/05/Enterprise-mobility.svg?tr=w-50,h-50"
                    alt="Enterprise mobility"
                  />
                </div>
                <div className="services-content">
                  <h3 className="services-title">Enterprise mobility</h3>
                  <p className="services-desc">
                    Our web and mobile app developers possess years of
                    experience in developing quality enterprise software
                    solutions. We build customized software solutions using
                    groundbreaking technologies like AR, VR, AI and Chatbots,
                    while making it a point to provide end-to-end service.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 px-1">
              <div
                className="abouts_box wow fadeInUp"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "100ms",
                  animationName: "fadeInUp",
                }}
              >
                <div className="services-icon">
                  <img
                    data-src="https://www.prismetric.com/wp-content/uploads/2021/05/Database-and-cloud.svg?tr=w-50,h-50"
                    loading="lazy"
                    src="https://www.prismetric.com/wp-content/uploads/2021/05/Database-and-cloud.svg?tr=w-50,h-50"
                    alt="Database and cloud"
                  />
                </div>
                <div className="services-content">
                  <h3 className="services-title">Database and cloud</h3>
                  <p className="services-desc">
                    We efficiently handle big-data management software and help
                    you develop cloud solutions for the chain of companies.
                    Customized software developed for larger businesses include
                    web and mobile application solutions that are developed
                    using smart coding and highly versatile platforms at
                    Prismetric.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="gray-wrapper pt-5 pb-4 pb-md-5" id="Web-Technologies">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <Title normalText="Web Development" spanText="Technologies" />
              <p>
                For a successful custom web application development, a developer
                has to work with programming languages and tools that combine to
                produce a website or application with a full set of features and
                dynamic interactions. We work with development platforms like
                ReactJS, Angular, Javascript, and many more to make custom
                software that is scalable, flexible, and reliable. You can trust
                us to give you the best technological experience in web
                development.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row dedicated-icon text-center mt-5">
            {webDevtechCard.map((item) => {
              return (
                <WebDevelopmentCard
                  key={item.id}
                  title={item.title}
                  icon={item.icon}
                  subtitle={item.subtitle}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* <!-- End Web Development --> */}

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

export default WebsiteDevelopment;
