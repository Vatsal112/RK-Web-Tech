import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import "./mobile-app-development.css";
import flutter_img from "../../assets/images/Mobiile-App/flutterIcon.png";
import Title from "../../components/Title/Title";
import FrequentlyAsked from "../../components/FrequentlyAskedCard/FrequentlyAsked";
import {
  frequentlyData,
  HiringModelData,
} from "../../utils/StaticDataForCards";
import { useScript } from "../../hooks/useScript";
import { scriptMain } from "../../utils/particleCode";
import HiringModelCard from "../../components/HiringModelCard/HiringModelCard";
import { Link } from "react-router-dom";
import useDynamicTitle from "../../hooks/useDynamicTitle";

const MobileApplicationDevelopment = () => {
  useDynamicTitle("Mobile Application Development | RK WebTechnology");
  useScript(scriptMain());
  return (
    <>
      <PageBanner
        mainTitle="Mobile Application Development"
        firstText="Home"
        firstLink="/"
        secondText="Services"
        thirdText="Mobile Application Development"
      />
      <section className="mt-5 mobile-app">
        <div id="web_development">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 heading">
                <h1>
                  Mobile Application <span>Development</span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="web_development_content">
                  <p>
                    RK WebTechnology’s is a well experienced Mobile app
                    Development company with a proven track record of delivering
                    effective project management and flexible delivery models to
                    create successful apps that help businesses increasing
                    efficiency and engaging with end-users in an agile manner.
                    We strive hard to meet our customer expectations be it
                    native iOS, Android and hybrid app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="pt-5 pb-5 text-center mobile-tech"
        id="Mobile-App-Technologies"
      >
        <div className="container">
          <Title
            normalText="Key Mobile App"
            spanText="Development Technologies"
          />
          <p>
            A mobile app can boost your business, make your tasks more
            accessible, and generate higher revenue for your company. Custom
            mobile applications can be made to tailor to your required features.
            Integrating your brand voice into the platform can only elevate the
            user experience and attract new customers. We use key mobile app
            development technologies to give you the best software at the best
            price.
          </p>
        </div>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-md-4 d-flex">
              <Link className="feature-box">
                <div className="feature-icon">
                  <i className="fab fa-android"></i>
                </div>
                <h4 className="feature-title h3">Android</h4>
                <p>
                  Android app development can be done with Java, C++, Kotlin,
                  and other compatible programming languages. We build
                  customized Android apps with various features like SEO
                  integration, customer management, and any other business
                  requirement.
                </p>
              </Link>
            </div>
            <div className="col-md-4 d-flex">
              <Link className="feature-box">
                <div className="feature-icon">
                  <i className="fab fa-apple"></i>
                </div>
                <h4 className="feature-title h3">iOS</h4>
                <p>
                  iOS development for mobile can be enabled with Xcode,
                  including the iOS SDK, compilers, frameworks, and tools. With
                  our iOS development services, you get a design-customized app
                  and end-to-end support, from development to debugging.
                </p>
              </Link>
            </div>
            <div className="col-md-4 d-flex">
              <div className="feature-box">
                <div className="feature-icon">
                  <img src={flutter_img} height="70" width="70" />
                </div>
                <h4 className="feature-title h3">Xamarin</h4>
                <p>
                  We use Xamarin to build modern and interactive apps on iOS,
                  Windows, and Android platforms using cross-platform
                  implementations or shared code.
                </p>
              </div>
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

export default MobileApplicationDevelopment;
