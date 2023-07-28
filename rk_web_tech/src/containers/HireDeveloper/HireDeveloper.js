import React from "react";
import "./hire-developer.css";
import PageBanner from "../../components/PageBanner/PageBanner";
import Title from "../../components/Title/Title";
import {
  hireDedicatedDev,
  HiringModelData,
  hiringProcessCard,
  whyhireDedicatedCard,
} from "../../utils/StaticDataForCards";
import WhyHireDedicatedCard from "../../components/WhyHireDedicatedCard/WhyHireDedicatedCard";
import HireDedicatedCard from "../../components/HireDedicatedCard/HireDedicatedCard";
import HiringProcessCard from "../../components/HiringProcessCard/HiringProcessCard";
import HiringModelCard from "../../components/HiringModelCard/HiringModelCard";
import { Link } from "react-router-dom";
const HireDeveloper = () => {
  return (
    <>
      <PageBanner
        mainTitle="Hire Developer"
        firstText="Home"
        firstLink="/"
        secondText="Hire Developer"
        // thirdText="Mobile Application Development"
      />
      <section className="mt-5">
        <div id="web_development">
          <div className="container">
            <Title normalText="hire" spanText="Developer" />
            <div className="row">
              <div className="col-lg-12">
                <div className="web_development_content">
                  <p>
                    Do you face challenges in hiring dedicated developers on
                    time? Concerned with the high attrition rate of your
                    in-house team? Does dedicated Software Development cost
                    going out of budget? Dealing with such problems can shift
                    your focus from your core competency. Finding the right
                    dedicated software development team is challenging,
                    especially for growing companies that are looking to scale
                    operations. We have a solution to your problems! You can
                    hire dedicated web & mobile app developers on an hourly,
                    part-time, or contract basis. Scale your delivery capacity
                    with our team of dedicated developers.
                  </p>
                  <p className="mt-4">
                    Over the past 22 years, we have helped our clients develop,
                    deploy, and maintain products that are revolutionizing
                    industries. Our system allows our clients to access some of
                    the best development talents in the market to create their
                    perfect development team. Whatever tech stack you are
                    working with, we can help with the right resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="white-wrapper pt-5 pb-5" id="Hire-Developers">
        <div className="container">
          <div className="row  text-center">
            <div className="col-12">
              <Title
                normalText="Hire Dedicated Developers"
                spanText="for various technologies"
              />
              {/* <h2 className="heading2">
                Hire Dedicated Developers for various technologies
              </h2> */}
            </div>
            {hireDedicatedDev.map((item) => {
              return (
                <HireDedicatedCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                />
              );
            })}
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <Link className="btn  contact-now mt-3" to="/contact-us">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-wrapper pt-5 pb-5" id="Hiring-Process">
        <div className="container-fluid">
          <div className="row mb-4 text-center">
            <div className="col-12">
              <h2 className="heading2 text-white">
                Hiring Process for Dedicated Developers
              </h2>
            </div>
          </div>
          <div className="row text-white">
            <div className="col-12">
              <div className="block-style01">
                <ul className="row">
                  {hiringProcessCard.map((item) => {
                    return (
                      <HiringProcessCard
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        para={item.para}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="hire-dedicated">
        <div className="container">
          <div className="et_pb_section et_pb_section_7 et_pb_with_background et_section_regular et_section_transparent">
            <div className="et_pb_row et_pb_row_8">
              <div className="et_pb_column et_pb_column_4_4 et_pb_column_12  et_pb_css_mix_blend_mode_passthrough et-last-child">
                <div className="et_pb_module et_pb_text et_pb_text_10  et_pb_text_align_center et_pb_bg_layout_light">
                  <div className="et_pb_text_inner text-center">
                    <Title
                      normalText="Why Hire Dedicated Developers"
                      spanText="from GuruTechnoLabs?"
                    />
                    <p>
                      Guru TechnoLabs is a leading web and app development
                      company, having a global presence with 5 stars and good
                      ratings on the internet. Apart from this, here are a few
                      benefits of hiring our dedicated developers:
                    </p>
                  </div>
                </div>
                <div className="et_pb_module et_pb_code et_pb_code_5">
                  <div className="et_pb_code_inner">
                    <section className="whyshould-hire">
                      <div className="why-should-info">
                        <div className="row">
                          {whyhireDedicatedCard.map((item) => {
                            return (
                              <WhyHireDedicatedCard
                                key={item.id}
                                image={item.image}
                                title={item.title}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </section>
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
    </>
  );
};

export default HireDeveloper;
