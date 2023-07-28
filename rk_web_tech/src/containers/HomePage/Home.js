import React from "react";
import "./home.css";
import slideBG from "../../assets/images/home_slider/slider_bg.webp";
import rk_webtech from "../../assets/images/rk-webtechnology.webp";
import four from "../../assets/images/icon/4.png";
import three from "../../assets/images/icon/3.png";
import two from "../../assets/images/icon/2.png";
import one from "../../assets/images/icon/1.png";
import technology_laravel from "../../assets/images/technology/laravel.svg";
import technology_csharp from "../../assets/images/technology/csharp.svg";
import technology_vb from "../../assets/images/technology/vb.svg";
import technology_ado from "../../assets/images/technology/ado_net.svg";
import technology_asp from "../../assets/images/technology/asp_net.svg";
import technology_net_core from "../../assets/images/technology/net_core.svg";
import technology_angular from "../../assets/images/technology/angular_js.svg";
import technology_node from "../../assets/images/technology/node_js.svg";
import technology_vue from "../../assets/images/technology/vue_js.svg";
import technology_react from "../../assets/images/technology/react.svg";
import technology_next from "../../assets/images/technology/next.svg";
import technology_express from "../../assets/images/technology/express.svg";
import technology_android from "../../assets/images/technology/android.svg";
import technology_iso from "../../assets/images/technology/ios.svg";
import technology_flutter from "../../assets/images/technology/flutter.svg";
import technology_react_native from "../../assets/images/technology/react_native.svg";
import technology_odoo from "../../assets/images/technology/odoo.svg";
import technology_django from "../../assets/images/technology/django.svg";
import technology_aws from "../../assets/images/technology/aws.svg";
import technology_digital_ocean from "../../assets/images/technology/digital_ocean.svg";
import technology_docker from "../../assets/images/technology/docker.svg";
import technology_google_cloud from "../../assets/images/technology/google_cloud.svg";
import technology_heroku from "../../assets/images/technology/heroku.svg";
import technology_azure from "../../assets/images/technology/azure.svg";
import technology_oracle from "../../assets/images/technology/oracle.svg";
import technology_azure_db from "../../assets/images/technology/azure_db.svg";
import technology_sql_server from "../../assets/images/technology/sql_server.svg";
import technology_mysql from "../../assets/images/technology/mysql.svg";
import technology_mongo_db from "../../assets/images/technology/mongo_db.svg";
import technology_postgre_sql from "../../assets/images/technology/postgre_sql.svg";
import who_we_startupImg from "../../assets/images/whoWeWork/startUpBusiness.svg";
import who_we_smallImg from "../../assets/images/whoWeWork/smallMediumBusiness.svg";
import who_we_enterpriseImg from "../../assets/images/whoWeWork/enterprise.svg";
import who_we_agenciesImg from "../../assets/images/whoWeWork/agencies.svg";
import { useScript } from "../../hooks/useScript";
import { Link } from "react-router-dom";

import {
  HiringModelData,
  homeSlider,
  ourKeyFeatureData,
  processWeFollow,
} from "../../utils/StaticDataForCards";
import {
  particle,
  swiperSlider,
  swiperSliderPartnership,
} from "../../utils/particleCode";
import Title from "../../components/Title/Title";
import MainSliderItem from "../../components/MainSliderItem/MainSliderItem";
import OurKeyFeatureCard from "../../components/OurKeyFeatureCard/OurKeyFeatureCard";
import ProcessWeFollow from "../../components/ProcessWeFollowCard/ProcessWeFollow";
import HiringModelCard from "../../components/HiringModelCard/HiringModelCard";

const Home = () => {
  // useScript(scriptMain());
  useScript(particle());
  useScript(swiperSlider());
  useScript(swiperSliderPartnership());
  return (
    <>
      <section id="main">
        <div
          id="particles-js"
          className="particles-js-canvas-el"
          style={{ height: "100vh" }}
        ></div>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <div
            className="bg-overlay bg-image bg-animation bg-img-slider"
            style={{
              backgroundImage: `url(${slideBG})`,
            }}
          ></div>
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          <div className="carousel-inner d-flex align-item-center">
            {homeSlider.map((item) => {
              return (
                <MainSliderItem
                  key={item.id}
                  firstTitle={item.firstTitle}
                  secondTitle={item.secondTitle}
                  para={item.para}
                  active={item?.active}
                />
              );
            })}
          </div>
        </div>
        <div id="converting_ideas">
          <div className="container">
            <Title normalText="CONVERTING IDEAS INTO" spanText="PRODUCTS" />
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <p>
                  RK WebTechnology is the leading software development company
                  in India. We are specialized in database management, website
                  development, mobile application development, including ui/ux
                  design & digital marketing. We believe in delivering values by
                  walking and extra mile for our clients. When you work with a
                  proficient & experienced team, you will have fewer things to
                  care about. Our experts will ensure to make your digital
                  experience delightful by producing innovative solutions
                  through Web & Mobile applications. We have earned a very good
                  rapport by showing persistent security and support at database
                  management services, to keep our clients data safe and easily
                  accessible. We believe that "design is thinking made visual",
                  and our designers would drop your jaws with impeccable
                  designing solutions.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="company_services">
                  <img
                    className="img-fluid services_img hidden-sm"
                    src={rk_webtech}
                    alt="RK WebTechnology is offering Website Development, Mobile Application Development, UI/UX Design, and Database Management."
                    title="RK WebTechnology"
                  />
                  <div className="services_box text-center service_01">
                    <div className="services_icon displa visible-sm">
                      <img
                        className="img-fluid"
                        src={four}
                        alt="UI/UX Design"
                        title="UI/UX Design"
                      />
                    </div>
                    <div className="services_title">
                      <h6>UI/UX Design</h6>
                    </div>
                    <div className="services_icon displa hidden-sm">
                      <img
                        className="img-fluid"
                        src={four}
                        alt="UI/UX Design"
                        title="UI/UX Design"
                      />
                    </div>
                  </div>
                  <div className="services_box text-center service_02">
                    <div className="services_icon displa visible-sm">
                      <img
                        className="img-fluid"
                        src={one}
                        alt="Website Development"
                        title="Website Development"
                      />
                    </div>
                    <div className="services_title">
                      <h6>Website Development</h6>
                    </div>
                    <div className="services_icon displa hidden-sm">
                      <img
                        className="img-fluid"
                        src={one}
                        alt="Website Development"
                        title="Website Development"
                      />
                    </div>
                  </div>
                  <div className="services_box text-center service_03">
                    <div className="services_icon displa visible-sm">
                      <img
                        className="img-fluid"
                        src={two}
                        alt="Mobile Application Development"
                        title="Mobile Application Development"
                      />
                    </div>
                    <div className="services_title">
                      <h6>Mobile Application Development</h6>
                    </div>
                    <div className="services_icon displa hidden-sm">
                      <img
                        className="img-fluid"
                        src={two}
                        alt="Mobile Application Development"
                        title="Mobile Application Development"
                      />
                    </div>
                  </div>
                  <div className="services_box text-center service_04 mar_40">
                    <div className="services_icon displa visible-sm">
                      <img
                        className="img-fluid"
                        src={three}
                        alt="Digital Marketing"
                        title="Digital Marketing"
                      />
                    </div>
                    <div className="services_title">
                      <h6>Digital Marketing</h6>
                    </div>
                    <div className="services_icon displa hidden-sm">
                      <img
                        className="img-fluid"
                        src={three}
                        alt="Digital Marketing"
                        title="Digital Marketing"
                      />
                    </div>
                  </div>
                  <div className="services_box text-center service_05">
                    <div className="services_icon displa visible-sm">
                      <img
                        className="img-fluid"
                        src={three}
                        alt="Database Management"
                        title="Database Management"
                      />
                    </div>
                    <div className="services_title">
                      <h6>Database Management</h6>
                    </div>
                    <div className="services_icon displa hidden-sm">
                      <img
                        className="img-fluid"
                        src={three}
                        alt="Database Management"
                        title="Database Management"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our custom software developement */}
        <section className="abuts-one">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 text-center mt-5">
                <div className="container">
                  <Title
                    normalText="Our Custom Software"
                    spanText="Development Process"
                  />
                  {/* <h2>Our Custom Software Development Process</h2> */}
                  <p className="max-wid">
                    Prismetric employs the best practiced software development
                    processes and development methodologies to build custom
                    software applications. Hire our dedicated team of software
                    developers to craft a cutting-edge business solution
                    following every phase of the Software Development Life
                    Cycle.
                  </p>
                </div>
                <img
                  data-src="https://www.prismetric.com/wp-content/uploads/2021/07/Custom-Software-Development-Process.png?tr=w-987,h-184"
                  loading="lazy"
                  src="https://www.prismetric.com/wp-content/uploads/2021/07/Custom-Software-Development-Process.png?tr=w-987,h-184"
                  alt="Software Development Life Cycle"
                  className="img-fluid mt-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* our key feature */}
        <section
          className="sect-pad-tb position-relative blue-grad"
          id="our-key-features"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h2 className="main-title mb-3 mt-60 title-key-features text-white">
                  Our Key Features
                </h2>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5">
                <p className="text-white">
                  Services That We Deliver Makes Us Dignified As One of The Top
                  App Development Companies.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-12">
                <div className="mt-3 swiper-container our-key-features">
                  <div className="swiper-wrapper">
                    {ourKeyFeatureData.map((item) => {
                      return (
                        <OurKeyFeatureCard
                          key={item.id}
                          title={item.title}
                          subtitle={item.subtitle}
                          para={item.para}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sect-pad-tb process-we-follow bg-light-gray d-none d-sm-none d-md-none d-lg-block d-xl-block mt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 left-content">
                <h2 className="main-title mb-3 mt-60 title-process-we-follow text-center">
                  <Title normalText={"Process We"} spanText={"Follow"} />
                  {/* Process We Follow */}
                </h2>
              </div>
              {processWeFollow.map((item) => {
                return (
                  <ProcessWeFollow
                    key={item?.id}
                    title={item?.title}
                    para={item?.para}
                    src={item?.source}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* partnership models */}
        <section className="sect-pad-b partnership-models">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="main-title-box pt-md-0 pt-lg-5">
                  <h3 className="main-title mb-2 mt-60 title-partnership-models c-black">
                    <Title normalText="Partnership" spanText="Models" />
                    {/* Partnership Models */}
                  </h3>
                  <p className="w-75 text-center m-auto">
                    Hyperlink InfoSystem a leading mobile app development
                    company in USA & India offers custom app development
                    services to wide range of industries and businesses. Know
                    more about our partnership models.
                  </p>
                </div>
              </div>
            </div>
            <div className="row d-none d-sm-none d-md-none d-lg-flex d-xl-flex">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-3 mt-md-3">
                <div className="card-box title-box bg-light-blue d-flex align-items-start flex-column">
                  <img
                    className="img-fluid"
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/fixed-price-model-new.png"
                    alt="fixed price model"
                  />
                  <h3 className="h5 title w-100 my-3">
                    <b>Fixed Price Model</b>
                  </h3>
                  <p className="desc mb-0">
                    In this model, the project scope of work with its associated
                    cost and timeline is defined before development starts. This
                    is a preferred model for longer periods of engagement.
                    Client always has peace of mind of knowing the project will
                    remain on the same budget as agreed. This model suits best
                    to clients who have a perfect vision of their requirement.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-3 mt-md-3">
                <div className="card-box title-box bg-light-blue d-flex align-items-start flex-column">
                  <img
                    className="img-fluid"
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/hire-dedicated-model.png"
                    alt="hire dedicated model"
                  />
                  <h3 className="h5 title w-100 my-3">
                    <b>Hire Dedicated Model</b>
                  </h3>
                  <p className="desc mb-0">
                    This is very classic and simple way of engagement wherein
                    clients pay for the number of hours the app developer works
                    on project. Clients easily start the project as they don't
                    have to walk in with detailed specifications. This model
                    also allows client to update new features any time and
                    clients know exactly what they’re paying for. This drives a
                    lot more trust and communication.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-3 mt-md-3">
                <div className="card-box title-box bg-light-blue d-flex align-items-start flex-column">
                  <img
                    className="img-fluid"
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/on-site-development-model-new.png"
                    alt="on site development model"
                  />
                  <h3 className="h5 title w-100 my-3">
                    <b>On Site Development Model</b>
                  </h3>
                  <p className="desc mb-0">
                    This model is preferred when clients want additional
                    temporary resources for on-site development. This contract
                    type ensures the engagement is cost-effective and a
                    face-to-face interactions with developers. This model helps
                    in achieving the deadline on time as there is continuous
                    communication during the whole process.
                  </p>
                </div>
              </div>
            </div>
            <div className="row d-flex d-sm-flex d-md-flex d-lg-none d-xl-none">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3 mt-md-3">
                <div className="swiper-container partnership-models-mob mt-3 w-100">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide p-3">
                      <div className="card-box title-box bg-light-blue d-flex align-items-start flex-column">
                        <img
                          className="img-fluid"
                          src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/fixed-price-model-new.png"
                          alt="fixed price model"
                        />
                        <h3 className="h5 title w-100 my-3">
                          <b>Fixed Price Model</b>
                        </h3>
                        <p className="desc mb-0">
                          In this model, the project scope of work with its
                          associated cost and timeline is defined before
                          development starts. This is a preferred model for
                          longer periods of engagement. Client always has peace
                          of mind of knowing the project will remain on the same
                          budget as agreed. This model suits best to clients who
                          have a perfect vision of their requirement.
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide p-3">
                      <div className="card-box title-box bg-light-blue d-flex align-items-start flex-column">
                        <img
                          className="img-fluid"
                          src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/hire-dedicated-model.png"
                          alt="hire dedicated model"
                        />
                        <h3 className="h5 title w-100 my-3">
                          <b>Hire Dedicated Model</b>
                        </h3>
                        <p className="desc mb-0">
                          This is very classic and simple way of engagement
                          wherein clients pay for the number of hours the app
                          developer works on project. Clients easily start the
                          project as they don't have to walk in with detailed
                          specifications. This model also allows client to
                          update new features any time and clients know exactly
                          what they’re paying for. This drives a lot more trust
                          and communication.
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide p-3">
                      <div className="card-box title-box bg-light-blue d-flex align-items-start flex-column">
                        <img
                          className="img-fluid"
                          src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/on-site-development-model-new.png"
                          alt="on site development model"
                        />
                        <h3 className="h5 title w-100 my-3">
                          <b>On Site Development Model</b>
                        </h3>
                        <p className="desc mb-0">
                          This model is preferred when clients want additional
                          temporary resources for on-site development. This
                          contract type ensures the engagement is cost-effective
                          and a face-to-face interactions with developers. This
                          model helps in achieving the deadline on time as there
                          is continuous communication during the whole process.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mob-clutch-swiper-pagination mt-3 d-flex justify-content-center"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* who we work with     */}
        <section className="sect-pad-tb who-work-with mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5 align-self-center">
                <h4 className="main-title mb-0 mt-60 title-who-work-with text-white">
                  Who We Work With
                </h4>
                <p className="desc mb-0 mt-3  pr-md-0 pr-lg-5 mr-0 mr-md-0 mr-lg-4 text-white">
                  As a leading mobile app development company in USA and India,
                  we worked with 2000+ businesses either it is a start-up or
                  enterprise and delivers the best solution in the industry. At
                  Hyperlink InfoSystem, we offer a broad range of app
                  development services based on business requirements.
                </p>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 mt-3">
                <div className="row">
                  <div className="col-6 col-sm-6 col-md-6 col-xl-6 my-3">
                    <div className="card-box p-3 p-md-4 text-center">
                      <img src={who_we_startupImg} alt={who_we_startupImg} />
                      <h3 className="work-title h5 mb-0">
                        <b>Start Up Business</b>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6 col-xl-6 my-3">
                    <div className="card-box p-3 p-md-4 text-center">
                      <img src={who_we_smallImg} alt={who_we_smallImg} />
                      <h3 className="work-title h5 mb-0">
                        <b>Small & Medium Business</b>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6 col-xl-6 my-3">
                    <div className="card-box p-3 p-md-4 text-center">
                      <img
                        src={who_we_enterpriseImg}
                        alt={who_we_enterpriseImg}
                      />
                      <h3 className="work-title h5 mb-0">
                        <b>Enterprise</b>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6 col-xl-6 my-3">
                    <div className="card-box p-3 p-md-4 text-center">
                      <img src={who_we_agenciesImg} alt={who_we_agenciesImg} />
                      <h3 className="work-title h5 mb-0">
                        <b>Agencies</b>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        {/* technology stack */}
        <div id="technology_stack">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="technology">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="pills-php-tab"
                        data-toggle="pill"
                        href="#pills-php"
                        role="tab"
                        aria-controls="pills-php"
                        aria-selected="true"
                      >
                        WEB
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-mobile-tab"
                        data-toggle="pill"
                        href="#pills-mobile"
                        role="tab"
                        aria-controls="pills-mobile"
                        aria-selected="false"
                      >
                        Mobile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-python-tab"
                        data-toggle="pill"
                        href="#pills-python"
                        role="tab"
                        aria-controls="pills-python"
                        aria-selected="false"
                      >
                        Python
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-net-tab"
                        data-toggle="pill"
                        href="#pills-net"
                        role="tab"
                        aria-controls="pills-net"
                        aria-selected="false"
                      >
                        .NET
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-cloud-tab"
                        data-toggle="pill"
                        href="#pills-cloud"
                        role="tab"
                        aria-controls="pills-cloud"
                        aria-selected="false"
                      >
                        SAP
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-database-tab"
                        data-toggle="pill"
                        href="#pills-database"
                        role="tab"
                        aria-controls="pills-database"
                        aria-selected="false"
                      >
                        DATABASE
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-php"
                      role="tabpanel"
                      aria-labelledby="pills-php-tab"
                    >
                      <div className="row">
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_laravel}
                              alt="Codeigniter"
                              title="Codeigniter"
                              className="img-fluid"
                            />
                            <h6>Laravel</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_node}
                              alt="NodeJs"
                              title="NodeJs"
                              className="img-fluid"
                            />
                            <h6>NodeJs</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_react}
                              alt="ReactJs"
                              title="ReactJs"
                              className="img-fluid"
                            />
                            <h6>ReactJs</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_next}
                              alt="NextJS"
                              title="NextJs"
                              className="img-fluid"
                            />
                            <h6>NextJs</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_angular}
                              alt="AngularJs"
                              title="AngularJs"
                              className="img-fluid"
                            />
                            <h6>AngularJs</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_vue}
                              alt="VueJs"
                              title="VueJs"
                              className="img-fluid"
                            />
                            <h6>VueJs</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_express}
                              alt="ExpressJs"
                              title="ExpressJs"
                              className="img-fluid"
                            />
                            <h6>ExpressJs</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-net"
                      role="tabpanel"
                      aria-labelledby="pills-net-tab"
                    >
                      <div className="row">
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_csharp}
                              alt="C Sharp"
                              title="C Sharp"
                              className="img-fluid"
                            />
                            <h6>C Sharp</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_vb}
                              alt="Visual Basic"
                              title="Visual Basic"
                              className="img-fluid"
                            />
                            <h6>Visual Basic</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_ado}
                              alt="ADO .Net"
                              title="ADO .Net"
                              className="img-fluid"
                            />
                            <h6>ADO .Net</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_asp}
                              alt="ASP .Net"
                              title="ASP .Net"
                              className="img-fluid"
                            />
                            <h6>ASP .Net</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_net_core}
                              alt=".Net Core"
                              title=".Net Core"
                              className="img-fluid"
                            />
                            <h6>.Net Core</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="pills-mobile"
                      role="tabpanel"
                      aria-labelledby="pills-mobile-tab"
                    >
                      <div className="row">
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_android}
                              alt="Android"
                              title="Android"
                              className="img-fluid"
                            />
                            <h6>Android</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_flutter}
                              alt="Flutter"
                              title="Flutter"
                              className="img-fluid"
                            />
                            <h6>Flutter</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_iso}
                              alt="iOS"
                              title="iOS"
                              className="img-fluid"
                            />
                            <h6>iOS</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_react_native}
                              alt="React Native"
                              title="React Native"
                              className="img-fluid"
                            />
                            <h6>React Native</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-python"
                      role="tabpanel"
                      aria-labelledby="pills-python-tab"
                    >
                      <div className="row">
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_odoo}
                              alt="Odoo"
                              title="Odoo"
                              className="img-fluid"
                            />
                            <h6>Odoo</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_django}
                              alt="Django"
                              title="Django"
                              className="img-fluid"
                            />
                            <h6>Django</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-cloud"
                      role="tabpanel"
                      aria-labelledby="pills-cloud-tab"
                    >
                      <div className="row">
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_aws}
                              alt="AWS"
                              title="AWS"
                              className="img-fluid"
                            />
                            <h6>AWS</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_digital_ocean}
                              alt="Digital Ocean"
                              title="Digital Ocean"
                              className="img-fluid"
                            />
                            <h6>Digital Ocean</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_docker}
                              alt="Docker"
                              title="Docker"
                              className="img-fluid"
                            />
                            <h6>Docker</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_google_cloud}
                              alt="Google Cloud Platform"
                              title="Google Cloud Platform"
                              className="img-fluid"
                            />
                            <h6>Google Cloud Platform</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_heroku}
                              alt="Heroku"
                              title="Heroku"
                              className="img-fluid"
                            />
                            <h6>Heroku</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_azure}
                              alt="Microsoft Azure"
                              title="Microsoft Azure"
                              className="img-fluid"
                            />
                            <h6>Microsoft Azure</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-database"
                      role="tabpanel"
                      aria-labelledby="pills-database-tab"
                    >
                      <div className="row">
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_mysql}
                              alt="MySQL"
                              title="MySQL"
                              className="img-fluid"
                            />
                            <h6>MySQL</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_mongo_db}
                              alt="MongoDB"
                              title="MongoDB"
                              className="img-fluid"
                            />
                            <h6>MongoDB</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_postgre_sql}
                              alt="Postgre SQL"
                              title="Postgre SQL"
                              className="img-fluid"
                            />
                            <h6>Postgre SQL</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_oracle}
                              alt="Oracle"
                              title="Oracle"
                              className="img-fluid"
                            />
                            <h6>Oracle</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_azure_db}
                              alt="Microsoft Azure"
                              title="Microsoft Azure"
                              className="img-fluid"
                            />
                            <h6>Microsoft Azure</h6>
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <div className="technology_list text-center">
                            <img
                              src={technology_sql_server}
                              alt="SQL Server"
                              title="SQL Server"
                              className="img-fluid"
                            />
                            <h6>SQL Server</h6>
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
        {/* <section id="reviews" className="custom_owl my_dots">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 heading">
                <h1>
                  OUR <span>CLIENTS</span> SPEAK
                </h1>
                <h3>TESTIMONIALS</h3>
              </div>
            </div>
            <div className="big_widget_top_pdd">
              <Link
                className="big_widget_company__name"
                data-ga-action="num_reviews_click"
                rel="noopener"
                target="_blank"
                to="https://clutch.co/profile/rk-webtechnology?utm_source=widget&amp;utm_medium=4&amp;utm_campaign=widget&amp;utm_content=title"
              >
                RK WebTechnology&nbsp;Reviews
              </Link>
              <Link
                className="logotype"
                to="https://clutch.co?utm_source=widget&amp;utm_medium=4&amp;utm_campaign=widget&amp;utm_content=powered_by"
                rel="noopener"
                target="_blank"
                data-ga-action="top_logo_click"
              ></Link>
            </div>
            <div className="carousel-wrap">
              <div className="owl-carousel">
                <div className="item">
                  <Link to="https://clutch.co/profile/rk-webtechnology#review-1455779">
                    <img
                      className="review1"
                      src={review1}
                      alt="Website Development By RK WebTechnology"
                      title="Website Development By RK WebTechnology"
                    />
                  </Link>
                </div>
                <div className="item">
                  <Link to="https://clutch.co/profile/rk-webtechnology#review-1424691">
                    <img
                      className="review2"
                      src={review2}
                      alt="Website Development By RK WebTechnology"
                      title="Website Development By RK WebTechnology"
                    />
                  </Link>
                </div>
                <div className="item">
                  <Link to="https://clutch.co/profile/rk-webtechnology#review-1324757">
                    <img
                      className="review3"
                      src={review3}
                      alt="Website Development By RK WebTechnology"
                      title="Website Development By RK WebTechnology"
                    />
                  </Link>
                </div>
                <div className="item">
                  <Link to="https://clutch.co/profile/rk-webtechnology#review-1931982">
                    <img
                      className="review4"
                      src={review4}
                      alt="Website Development By RK WebTechnology"
                      title="Website Development By RK WebTechnology"
                    />
                  </Link>
                </div>
                <div className="item">
                  <Link to="https://clutch.co/profile/rk-webtechnology#review-1928534">
                    <img
                      className="review5"
                      src={review5}
                      alt="Website Development By RK WebTechnology"
                      title="Website Development By RK WebTechnology"
                    />
                  </Link>
                </div>
                <div className="item">
                  <Link to="https://clutch.co/profile/rk-webtechnology#review-1885707">
                    <img
                      className="review6"
                      src={review6}
                      alt="Website Development By RK WebTechnology"
                      title="Website Development By RK WebTechnology"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="client-voices">
            <div className="page-wr">
                <h2 className="heading-2">Voices from our clients</h2>
                <div className="testimonials-cms w-dyn-list">
                    <div role="list" className="testimonials-grid-2col-v2 w-dyn-items">
                        <div role="listitem" className="testimonial w-dyn-item">
                            <div className="w-layout-grid flex-1col">
                                <div className="quote-wr">
                                    <div className="quote-content"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364ecdb1295f374d0bd75eb_quote.svg" loading="lazy" width="27" height="22" alt="" id="w-node-_73088e82-b789-5ef1-adb4-ef3629f7abfb-3e345034" className="quote-mark sm"
                                        />
                                        <div className="rich-text bold-text w-richtext">
                                            <p>The people from Brainhub are highly-skilled in React and Node.js and they work hard to achieve our goals.</p>
                                        </div>
                                    </div>
                                    <div className="stars-wr"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd37169874185646b6d_clutch-logo.svg" loading="lazy" width="51" height="15" alt="Clutch" className="platfrom-logo" />
                                        <div className="_5stars-wr"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                                loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18"
                                                alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img
                                                src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /></div>
                                        <div className="_4stars-wr w-condition-invisible"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                                loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18"
                                                alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img
                                                src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd371698734c9646b6c_star-icon-outline.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /></div>
                                    </div>
                                </div>
                                <div className="client-info-wr">
                                    <div className="avatar-wr"><img height="60" loading="lazy" width="60" alt="" src="https://global-uploads.webflow.com/622fa4d65a5fab0c3465af07/6238d34a721b43bbc7af3be1_622f3bd37169871b6d646b65_wes-testimonial.jpeg" className="avatar-img" /></div>
                                    <div
                                        className="flex-1col clear-row-padding">
                                        <div className="paragraph1">Wes Reid</div>
                                        <div className="paragraph1 sm">Head of Product &amp; Technology of Dealer Market Exchange</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-embed">
                            // <style>
                            //     @media screen and (min-width: 992px) {
                            //         .testimonial:nth-child(odd) {
                            //             padding-top: 100px
                            //         }
                            //     }
                            // </style>
                        </div>
                    </div>
                    <div role="listitem" className="testimonial w-dyn-item">
                        <div className="w-layout-grid flex-1col">
                            <div className="quote-wr">
                                <div className="quote-content"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364ecdb1295f374d0bd75eb_quote.svg" loading="lazy" width="27" height="22" alt="" id="w-node-_73088e82-b789-5ef1-adb4-ef3629f7abfb-3e345034" className="quote-mark sm"
                                    />
                                    <div className="rich-text bold-text w-richtext">
                                        <p>Brainhub have been working without needing a lot of assistance, and only asking the right questions.</p>
                                    </div>
                                </div>
                                <div className="stars-wr"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd37169874185646b6d_clutch-logo.svg" loading="lazy" width="51" height="15" alt="Clutch" className="platfrom-logo" />
                                    <div className="_5stars-wr"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18"
                                            alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /></div>
                                    <div className="_4stars-wr w-condition-invisible"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18"
                                            alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd371698734c9646b6c_star-icon-outline.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /></div>
                                </div>
                            </div>
                            <div className="client-info-wr">
                                <div className="avatar-wr"><img height="60" loading="lazy" width="60" alt="" src="https://global-uploads.webflow.com/622fa4d65a5fab0c3465af07/6238d28ba4832155eed0bbd8_claus-testimonial.jpeg" className="avatar-img" /></div>
                                <div className="flex-1col clear-row-padding">
                                    <div className="paragraph1">Claus Stilbord</div>
                                    <div className="paragraph1 sm">Omnicar A/S</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-embed">
                            // <style>
                            //     @media screen and (min-width: 992px) {
                            //         .testimonial:nth-child(odd) {
                            //             padding-top: 100px
                            //         }
                            //     }
                            // </style>
                        </div>
                    </div>
                    <div role="listitem" className="testimonial w-dyn-item">
                        <div className="w-layout-grid flex-1col">
                            <div className="quote-wr">
                                <div className="quote-content"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364ecdb1295f374d0bd75eb_quote.svg" loading="lazy" width="27" height="22" alt="" id="w-node-_73088e82-b789-5ef1-adb4-ef3629f7abfb-3e345034" className="quote-mark sm"
                                    />
                                    <div className="rich-text bold-text w-richtext">
                                        <p>It’s critical that Brainhub understands the context of the project and is treated as part of the team.<br/></p>
                                    </div>
                                </div>
                                <div className="stars-wr"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd37169874185646b6d_clutch-logo.svg" loading="lazy" width="51" height="15" alt="Clutch" className="platfrom-logo" />
                                    <div className="_5stars-wr"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18"
                                            alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /></div>
                                    <div className="_4stars-wr w-condition-invisible"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18"
                                            alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd371698734c9646b6c_star-icon-outline.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /></div>
                                </div>
                            </div>
                            <div className="client-info-wr">
                                <div className="avatar-wr"><img height="60" loading="lazy" width="60" alt="" src="https://global-uploads.webflow.com/622fa4d65a5fab0c3465af07/6238d60f4cbee83c2662da5d_emartin-testimonial.png" className="avatar-img" /></div>
                                <div className="flex-1col clear-row-padding">
                                    <div className="paragraph1">Enzo Martin</div>
                                    <div className="paragraph1 sm">Technical Director at Paradox Interactive</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-embed">
                            // <style>
                            //     @media screen and (min-width: 992px) {
                            //         .testimonial:nth-child(odd) {
                            //             padding-top: 100px
                            //         }
                            //     }
                            // </style>
                        </div>
                    </div>
                    <div role="listitem" className="testimonial w-dyn-item">
                        <div className="w-layout-grid flex-1col">
                            <div className="quote-wr">
                                <div className="quote-content"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364ecdb1295f374d0bd75eb_quote.svg" loading="lazy" width="27" height="22" alt="" id="w-node-_73088e82-b789-5ef1-adb4-ef3629f7abfb-3e345034" className="quote-mark sm"
                                    />
                                    <div className="rich-text bold-text w-richtext">
                                        <p>They’re technical experts who aren’t afraid to speak up when they think something isn’t working.<br/></p>
                                    </div>
                                </div>
                                <div className="stars-wr"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd37169874185646b6d_clutch-logo.svg" loading="lazy" width="51" height="15" alt="Clutch" className="platfrom-logo" />
                                    <div className="_5stars-wr w-condition-invisible"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18"
                                            alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /></div>
                                    <div className="_4stars-wr"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18"
                                            alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd371698734c9646b6c_star-icon-outline.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /></div>
                                </div>
                            </div>
                            <div className="client-info-wr">
                                <div className="avatar-wr"><img height="60" loading="lazy" width="60" alt="" src="https://global-uploads.webflow.com/622fa4d65a5fab0c3465af07/6238d6ab053216906f3fabaa_marcus-serene.jpeg" className="avatar-img" /></div>
                                <div className="flex-1col clear-row-padding">
                                    <div className="paragraph1">Marcus Taylor</div>
                                    <div className="paragraph1 sm">CEO &amp; Founder of Venture Harbour</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-embed">
                            // <style>
                            //     @media screen and (min-width: 992px) {
                            //         .testimonial:nth-child(odd) {
                            //             padding-top: 100px
                            //         }
                            //     }
                            // </style>
                        </div>
                    </div>
                    <div role="listitem" className="testimonial w-dyn-item">
                        <div className="w-layout-grid flex-1col">
                            <div className="quote-wr">
                                <div className="quote-content"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364ecdb1295f374d0bd75eb_quote.svg" loading="lazy" width="27" height="22" alt="" id="w-node-_73088e82-b789-5ef1-adb4-ef3629f7abfb-3e345034" className="quote-mark sm"
                                    />
                                    <div className="rich-text bold-text w-richtext">
                                        <p>I’ve been working on Scribi for 3 years - in two and a half hours they helped me refine my project even more.<br/></p>
                                    </div>
                                </div>
                                <div className="stars-wr"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd37169874185646b6d_clutch-logo.svg" loading="lazy" width="51" height="15" alt="Clutch" className="platfrom-logo" />
                                    <div className="_5stars-wr"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18"
                                            alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /></div>
                                    <div className="_4stars-wr w-condition-invisible"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18"
                                            alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd371698734c9646b6c_star-icon-outline.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /></div>
                                </div>
                            </div>
                            <div className="client-info-wr">
                                <div className="avatar-wr"><img height="60" loading="lazy" width="60" alt="" src="https://global-uploads.webflow.com/622fa4d65a5fab0c3465af07/6238d7d82ec87e0a4f5b2048_bpalmer-testimonial.jpeg" className="avatar-img" /></div>
                                <div className="flex-1col clear-row-padding">
                                    <div className="paragraph1">Brian Palmer</div>
                                    <div className="paragraph1 sm">CEO &amp; Founder at Scribi Writer’s Studio</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-embed">
                            // <style>
                            //     @media screen and (min-width: 992px) {
                            //         .testimonial:nth-child(odd) {
                            //             padding-top: 100px
                            //         }
                            //     }
                            // </style>
                        </div>
                    </div>
                    <div role="listitem" className="testimonial w-dyn-item">
                        <div className="w-layout-grid flex-1col">
                            <div className="quote-wr">
                                <div className="quote-content"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364ecdb1295f374d0bd75eb_quote.svg" loading="lazy" width="27" height="22" alt="" id="w-node-_73088e82-b789-5ef1-adb4-ef3629f7abfb-3e345034" className="quote-mark sm"
                                    />
                                    <div className="rich-text bold-text w-richtext">
                                        <p>They have excellent React.js knowledge.<br/></p>
                                    </div>
                                </div>
                                <div className="stars-wr"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd37169874185646b6d_clutch-logo.svg" loading="lazy" width="51" height="15" alt="Clutch" className="platfrom-logo" />
                                    <div className="_5stars-wr"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18"
                                            alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /></div>
                                    <div className="_4stars-wr w-condition-invisible"><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18"
                                            alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg" loading="lazy" width="19" height="18" alt="" className="star-icon" /><img src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd371698734c9646b6c_star-icon-outline.svg"
                                            loading="lazy" width="19" height="18" alt="" className="star-icon" /></div>
                                </div>
                            </div>
                            <div className="client-info-wr">
                                <div className="avatar-wr"><img height="60" loading="lazy" width="60" alt="" src="https://global-uploads.webflow.com/622fa4d65a5fab0c3465af07/6238d87f2ec87e476f5b26f8_cto_ridebeam.png" className="avatar-img" /></div>
                                <div className="flex-1col clear-row-padding">
                                    <div className="paragraph1">Deb Gangopadhyay</div>
                                    <div className="paragraph1 sm">CTO of Beam</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-embed">
                            // <style>
                            //     @media screen and (min-width: 992px) {
                            //         .testimonial:nth-child(odd) {
                            //             padding-top: 100px
                            //         }
                            //     }
                            // </style>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section> */}
      </section>
      <section className="client-voices">
        <div className="container">
          <Title normalText="Voices from our" spanText="Clients" />
          <div className="testimonials-cms w-dyn-list">
            <div role="list" className="testimonials-grid-2col-v2 w-dyn-items">
              <div role="listitem" className="testimonial w-dyn-item">
                <div className="w-layout-grid flex-1col">
                  <div className="quote-wr">
                    <div className="quote-content">
                      <img
                        src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364ecdb1295f374d0bd75eb_quote.svg"
                        loading="lazy"
                        width="27"
                        height="22"
                        alt=""
                        id="w-node-_73088e82-b789-5ef1-adb4-ef3629f7abfb-3e345034"
                        className="quote-mark sm"
                      />
                      <div className="rich-text bold-text w-richtext">
                        <p>
                          The people from Brainhub are highly-skilled in React
                          and Node.js and they work hard to achieve our goals.
                        </p>
                      </div>
                    </div>
                    <div className="stars-wr">
                      <img
                        src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd37169874185646b6d_clutch-logo.svg"
                        loading="lazy"
                        width="51"
                        height="15"
                        alt="Clutch"
                        className="platfrom-logo"
                      />
                      <div className="_5stars-wr">
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                      </div>
                      <div className="_4stars-wr w-condition-invisible">
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd371698734c9646b6c_star-icon-outline.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="client-info-wr">
                    <div className="avatar-wr">
                      <img
                        height="60"
                        loading="lazy"
                        width="60"
                        alt=""
                        src="https://global-uploads.webflow.com/622fa4d65a5fab0c3465af07/6238d34a721b43bbc7af3be1_622f3bd37169871b6d646b65_wes-testimonial.jpeg"
                        className="avatar-img"
                      />
                    </div>
                    <div className="flex-1col clear-row-padding">
                      <div className="paragraph1">Wes Reid</div>
                      <div className="paragraph1 sm">
                        Head of Product &amp; Technology of Dealer Market
                        Exchange
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-embed">
                  {/* <style>
                                @media screen and (min-width: 992px) {
                                    .testimonial:nth-child(odd) {
                                        padding-top: 100px
                                    }
                                }
                            </style> */}
                </div>
              </div>
              <div role="listitem" className="testimonial w-dyn-item">
                <div className="w-layout-grid flex-1col">
                  <div className="quote-wr">
                    <div className="quote-content">
                      <img
                        src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364ecdb1295f374d0bd75eb_quote.svg"
                        loading="lazy"
                        width="27"
                        height="22"
                        alt=""
                        id="w-node-_73088e82-b789-5ef1-adb4-ef3629f7abfb-3e345034"
                        className="quote-mark sm"
                      />
                      <div className="rich-text bold-text w-richtext">
                        <p>
                          Brainhub have been working without needing a lot of
                          assistance, and only asking the right questions.
                        </p>
                      </div>
                    </div>
                    <div className="stars-wr">
                      <img
                        src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd37169874185646b6d_clutch-logo.svg"
                        loading="lazy"
                        width="51"
                        height="15"
                        alt="Clutch"
                        className="platfrom-logo"
                      />
                      <div className="_5stars-wr">
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                      </div>
                      <div className="_4stars-wr w-condition-invisible">
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd371698734c9646b6c_star-icon-outline.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="client-info-wr">
                    <div className="avatar-wr">
                      <img
                        height="60"
                        loading="lazy"
                        width="60"
                        alt=""
                        src="https://global-uploads.webflow.com/622fa4d65a5fab0c3465af07/6238d28ba4832155eed0bbd8_claus-testimonial.jpeg"
                        className="avatar-img"
                      />
                    </div>
                    <div className="flex-1col clear-row-padding">
                      <div className="paragraph1">Claus Stilbord</div>
                      <div className="paragraph1 sm">Omnicar A/S</div>
                    </div>
                  </div>
                </div>
                <div className="w-embed">
                  {/* <style>
                                @media screen and (min-width: 992px) {
                                    .testimonial:nth-child(odd) {
                                        padding-top: 100px
                                    }
                                }
                            </style> */}
                </div>
              </div>
              <div role="listitem" className="testimonial w-dyn-item">
                <div className="w-layout-grid flex-1col">
                  <div className="quote-wr">
                    <div className="quote-content">
                      <img
                        src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364ecdb1295f374d0bd75eb_quote.svg"
                        loading="lazy"
                        width="27"
                        height="22"
                        alt=""
                        id="w-node-_73088e82-b789-5ef1-adb4-ef3629f7abfb-3e345034"
                        className="quote-mark sm"
                      />
                      <div className="rich-text bold-text w-richtext">
                        <p>
                          It’s critical that Brainhub understands the context of
                          the project and is treated as part of the team.
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="stars-wr">
                      <img
                        src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd37169874185646b6d_clutch-logo.svg"
                        loading="lazy"
                        width="51"
                        height="15"
                        alt="Clutch"
                        className="platfrom-logo"
                      />
                      <div className="_5stars-wr">
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                      </div>
                      <div className="_4stars-wr w-condition-invisible">
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd371698734c9646b6c_star-icon-outline.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="client-info-wr">
                    <div className="avatar-wr">
                      <img
                        height="60"
                        loading="lazy"
                        width="60"
                        alt=""
                        src="https://global-uploads.webflow.com/622fa4d65a5fab0c3465af07/6238d60f4cbee83c2662da5d_emartin-testimonial.png"
                        className="avatar-img"
                      />
                    </div>
                    <div className="flex-1col clear-row-padding">
                      <div className="paragraph1">Enzo Martin</div>
                      <div className="paragraph1 sm">
                        Technical Director at Paradox Interactive
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-embed">
                  {/* <style>
                                @media screen and (min-width: 992px) {
                                    .testimonial:nth-child(odd) {
                                        padding-top: 100px
                                    }
                                }
                            </style> */}
                </div>
              </div>
              <div role="listitem" className="testimonial w-dyn-item">
                <div className="w-layout-grid flex-1col">
                  <div className="quote-wr">
                    <div className="quote-content">
                      <img
                        src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364ecdb1295f374d0bd75eb_quote.svg"
                        loading="lazy"
                        width="27"
                        height="22"
                        alt=""
                        id="w-node-_73088e82-b789-5ef1-adb4-ef3629f7abfb-3e345034"
                        className="quote-mark sm"
                      />
                      <div className="rich-text bold-text w-richtext">
                        <p>
                          They’re technical experts who aren’t afraid to speak
                          up when they think something isn’t working.
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="stars-wr">
                      <img
                        src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd37169874185646b6d_clutch-logo.svg"
                        loading="lazy"
                        width="51"
                        height="15"
                        alt="Clutch"
                        className="platfrom-logo"
                      />
                      <div className="_5stars-wr w-condition-invisible">
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                      </div>
                      <div className="_4stars-wr">
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd371698734c9646b6c_star-icon-outline.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="client-info-wr">
                    <div className="avatar-wr">
                      <img
                        height="60"
                        loading="lazy"
                        width="60"
                        alt=""
                        src="https://global-uploads.webflow.com/622fa4d65a5fab0c3465af07/6238d6ab053216906f3fabaa_marcus-serene.jpeg"
                        className="avatar-img"
                      />
                    </div>
                    <div className="flex-1col clear-row-padding">
                      <div className="paragraph1">Marcus Taylor</div>
                      <div className="paragraph1 sm">
                        CEO &amp; Founder of Venture Harbour
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-embed"></div>
              </div>
              <div role="listitem" className="testimonial w-dyn-item">
                <div className="w-layout-grid flex-1col">
                  <div className="quote-wr">
                    <div className="quote-content">
                      <img
                        src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364ecdb1295f374d0bd75eb_quote.svg"
                        loading="lazy"
                        width="27"
                        height="22"
                        alt=""
                        id="w-node-_73088e82-b789-5ef1-adb4-ef3629f7abfb-3e345034"
                        className="quote-mark sm"
                      />
                      <div className="rich-text bold-text w-richtext">
                        <p>
                          I’ve been working on Scribi for 3 years - in two and a
                          half hours they helped me refine my project even more.
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="stars-wr">
                      <img
                        src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd37169874185646b6d_clutch-logo.svg"
                        loading="lazy"
                        width="51"
                        height="15"
                        alt="Clutch"
                        className="platfrom-logo"
                      />
                      <div className="_5stars-wr">
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                      </div>
                      <div className="_4stars-wr w-condition-invisible">
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd371698734c9646b6c_star-icon-outline.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="client-info-wr">
                    <div className="avatar-wr">
                      <img
                        height="60"
                        loading="lazy"
                        width="60"
                        alt=""
                        src="https://global-uploads.webflow.com/622fa4d65a5fab0c3465af07/6238d7d82ec87e0a4f5b2048_bpalmer-testimonial.jpeg"
                        className="avatar-img"
                      />
                    </div>
                    <div className="flex-1col clear-row-padding">
                      <div className="paragraph1">Brian Palmer</div>
                      <div className="paragraph1 sm">
                        CEO &amp; Founder at Scribi Writer’s Studio
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-embed"></div>
              </div>
              <div role="listitem" className="testimonial w-dyn-item">
                <div className="w-layout-grid flex-1col">
                  <div className="quote-wr">
                    <div className="quote-content">
                      <img
                        src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364ecdb1295f374d0bd75eb_quote.svg"
                        loading="lazy"
                        width="27"
                        height="22"
                        alt=""
                        id="w-node-_73088e82-b789-5ef1-adb4-ef3629f7abfb-3e345034"
                        className="quote-mark sm"
                      />
                      <div className="rich-text bold-text w-richtext">
                        <p>
                          They have excellent React.js knowledge.
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="stars-wr">
                      <img
                        src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd37169874185646b6d_clutch-logo.svg"
                        loading="lazy"
                        width="51"
                        height="15"
                        alt="Clutch"
                        className="platfrom-logo"
                      />
                      <div className="_5stars-wr">
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                      </div>
                      <div className="_4stars-wr w-condition-invisible">
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/6364eb99cff2c8a81b05492d_star-clutch.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                        <img
                          src="https://global-uploads.webflow.com/622f3bd37169876d51646b17/622f3bd371698734c9646b6c_star-icon-outline.svg"
                          loading="lazy"
                          width="19"
                          height="18"
                          alt=""
                          className="star-icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="client-info-wr">
                    <div className="avatar-wr">
                      <img
                        height="60"
                        loading="lazy"
                        width="60"
                        alt=""
                        src="https://global-uploads.webflow.com/622fa4d65a5fab0c3465af07/6238d87f2ec87e476f5b26f8_cto_ridebeam.png"
                        className="avatar-img"
                      />
                    </div>
                    <div className="flex-1col clear-row-padding">
                      <div className="paragraph1">Deb Gangopadhyay</div>
                      <div className="paragraph1 sm">CTO of Beam</div>
                    </div>
                  </div>
                </div>
                <div className="w-embed"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
