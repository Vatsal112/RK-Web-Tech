import React, { useEffect, useState } from "react";
import { useScript } from "../../hooks/useScript";
import {
  scriptMain,
  swiperSliderTestimonialSAP,
} from "../../utils/particleCode";  
import "./sap-services.css";
import { captchGeneration, captchValidation } from "../../utils/captch";
import { sapTechcard } from "../../utils/StaticDataForCards";
import SAPTechnologyCard from "../../components/SAPTechnologyCard/SAPTechnologyCard";
import { FiRefreshCcw } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../../utils/http-common";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import PageBanner from "../../components/PageBanner/PageBanner";
import BlogCard from "../../components/BlogCard/BlogCard";
import Title from "../../components/Title/Title";

const fetchData = async () => {
  const data = await apiClient.get("/blogs");
  return data.data.data;
};
const SapServices = () => {
  useDynamicTitle("SAP Services | RK WebTechnology");
  useScript(scriptMain());
  useScript(swiperSliderTestimonialSAP());

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
  });

  useEffect(() => {
    captchGeneration();
  }, []);

  const { data} = useQuery(["blogs"], fetchData);
  data?.sort((a,b) => new Date(b.date) - new Date(a.date))
  console.log(data);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = captchValidation();
    if (valid) {
      alert("true");
      postSAP();
    } else {
      captchGeneration();
      document.querySelector(".ans").value = "";
    }
  };
  const { mutate: postSAP } = useMutation(
    async () => {
      return await apiClient.post(`/contact-us`, formData);
    },
    {
      onSuccess: (res) => {
        // const result = {
        //   status: res.status + "-" + res.statusText,
        //   headers: res.headers,
        //   data: res.data,
        // };
        alert("Data sent successfully");
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );
  return (
    <>
      <PageBanner
        mainTitle="SAP Services"
        firstText="Home"
        firstLink="/"
        secondText="SAP Services"
        // thirdText="Mobile Application Development"
      />
      <section className="slider_new">
        <div className="d1-table">
          <div className="d-table-cel">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7 col-md-12 co-sm-12">
                  <div className="main_slider_new_box">
                    <h1>SAP Consulting Services</h1>
                    <div className="baneer-btn">
                      <Link
                        id="banner_btn"
                        className="default-btn-one text-uppercase"
                      >
                        Let&#8217;s Discuss
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                  <div className="banner-img">
                    <img
                      loading="lazy"
                      src="https://www.prismetric.com/wp-content/uploads/2021/06/SAP.png?tr=w-478.33,h-478.33"
                      className="img-fluid"
                      width="100%"
                      height="100%"
                      alt="Best SAP Consulting Services"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
      <section className="main-section-banner text-center main-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 text-center">
              <div className="main-section-subbanner">
                <h2>Driving Digital Innovation through SAP technology</h2>
                <p>
                  It is very important for organizations to implement consistent
                  solutions in the digital era. In such a situation, an SAP
                  consulting company can assist you to meet the challenge and
                  change your company with latest tools. Rk web technology
                  leverages software to deal with the developing requirement of
                  your business and allow you to offer everlasting consumer
                  experience which is the need of the hour. With ample
                  experience in SAP consulting services, we can assist you to
                  execute, optimize and convert your applications that can bring
                  brilliance to your business.
                </p>
              </div>
              <div className="main-section-subbanner">
                <h2>
                  Build a strong foundation for your IT infrastructure, and with
                  it prepare you for growth
                </h2>
                <p>
                  The Strategy is to build upon accessible IT infrastructure
                  with solutions tailored according to your requirements. Our
                  consultants focus on generating assessable consequences for
                  you. Our skill across industries assists us to craft industry
                  detailed solutions using proven performances. We assist
                  organizations to execute and control applications by the vital
                  SAP Solution Manager platforms. Our team of professional SAP
                  consultants allows organizations to take benefit of innovative
                  functionality that is easier to use into existing SAP
                  enterprise solutions.
                </p>
              </div>
              <div className="main-section-subbanner">
                <h2>
                  Boost your business transformation with SAP consulting
                  services
                </h2>
                <p>
                  From our experienced SAP technology consultants’ strategy and
                  sector-specific execution through to steady operation with Rk
                  web technology, the largest general full-service partner for
                  end-to-end incorporation, and our consumers get everything
                  from one provider. The proficiency of specialists means that
                  you are sure optimal execution of current and future
                  requirements in difficult application environments. Our
                  practiced SAP business workflow consultants make sure
                  professional regulation and support based on the latest
                  discovery in the area of technology and platforms.
                </p>
              </div>
              <div className="main-section-subbanner">
                <h2>
                  Highly Collaborative approach to generate best Business
                  performance
                </h2>
                <p>
                  As an expert SAP Consulting Company our methodology is focused
                  on a highly collaborative approach. We constantly use best
                  practices to control essential technologies that generate
                  higher business performance with{" "}
                  <Link target="_blank" rel="noopener noreferrer">
                    effective use of big data services
                  </Link>
                  . This tactic has verified time and again to maximize the
                  client’s revisit on their investment. Our 100% success rate
                  with customers is a straight consequence of our belief that
                  winning projects begin with senior consultants who acquire
                  profound, industry-specific information. This consequences in
                  lower consultant-to-client ratios on our developments, which
                  in turn guides to better information transfer, advanced client
                  independence, and consumer satisfaction. Our senior-level
                  consultants have a perfect combination of technical
                  proficiency, business management, management, and project
                  insight that enables them to successfully lead a team through
                  the whole workflow development lifecycle. We have practice
                  running whole projects and incorporating organizations on
                  small and large-scale clients.
                </p>
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
                  The ever expanding SAP technology can be implied affluently
                  for business development
                </h2>
                <p className="m-auto">
                  We handle all the technology related necessity with expertise
                  as an experienced SAP Consulting Company
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {sapTechcard?.map((item) => {
              return (
                <SAPTechnologyCard
                  key={item?.id}
                  image={item?.image}
                  title={item?.title}
                  para={item?.para}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="rs-services  style4 main-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                <h2>
                  Superior SAP consulting services and analytics to pave the
                  profitable way to manage your resources
                </h2>
                <p className="m-auto">
                  Empowering Enterprises by Delivering Innovative Technology
                  Solution through Services
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 services-in">
              <div
                className="services-item2 new-item new-item-one wow fadeInUp border-0"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "100ms",
                  animationName: "fadeInUp",
                }}
              >
                <div className="services-icon new_f_one">
                  <img
                    loading="lazy"
                    src="https://www.prismetric.com/wp-content/uploads/2021/04/Custom-Application-Development-Services.svg?tr=w-50,h-50"
                    alt="Custom Application Development Services"
                  />
                </div>
                <div className="services-content">
                  <h3 className="services-title">
                    Custom Application Development Services
                  </h3>
                  <p className="services-desc">
                    Build one-of-a-kind solutions that assist you to succeed in
                    the digital economy - with our application development team.
                    Conceptualize, design, build and maintain custom
                    applications that work on any device and in on the cloud, or
                    hybrid surroundings
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 services-in">
              <div
                className="services-item2 new-item new-item-one wow fadeInUp border-0"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "100ms",
                  animationName: "fadeInUp",
                }}
              >
                <div className="services-icon new_f_one">
                  <img
                    loading="lazy"
                    src="https://www.prismetric.com/wp-content/uploads/2021/04/Flexible-Solutions-and-Services.svg?tr=w-50,h-50"
                    alt="Flexible Solutions and Services"
                  />
                </div>
                <div className="services-content">
                  <h3 className="services-title">
                    Flexible Solutions and Services
                  </h3>
                  <p className="services-desc">
                    Don’t believe one size fits all. We will work with you to
                    build a method that suits your particular business
                    requirements, with out industry-leading understanding of
                    accurate areas, and enable you to upscale and downscale at
                    any time
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 services-in">
              <div
                className="services-item2 new-item new-item-one wow fadeInUp border-0"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "100ms",
                  animationName: "fadeInUp",
                }}
              >
                <div className="services-icon new_f_one">
                  <img
                    loading="lazy"
                    src="https://www.prismetric.com/wp-content/uploads/2021/04/Adapt-To-Your-Budget.svg?tr=w-50,h-50"
                    alt="Adapt To Your Budget"
                  />
                </div>
                <div className="services-content">
                  <h3 className="services-title">Adapt To Your Budget</h3>
                  <p className="services-desc">
                    Having value and the significance of cost awareness and can
                    provide services that maximize efficiency without needing
                    you to assign to long-term contracts. With a dedicated team
                    our solutions are long-term, intended to develop your
                    business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-post-info main-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <Title normalText="Latest" spanText="Blogs" />
            </div>
          </div>
          <div className="row blog-sec">          
                {
                  data?.map((item) => <BlogCard cardData={item} />)
                }
              </div>
        </div>
      </section>
      <section className="contact main-padding pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="widget_text section-title">
                <div className="textwidget custom-html-widget">
                  <h2 id="get-custom-quote-for-your-needs">
                    Have a question or need a custom quote
                  </h2>
                  <p className="m-auto">
                    Our in-depth understanding in technology and innovation can
                    turn your aspiration into a business reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5 col-md-5 col-sm-12">
              <div className="widget_text inner-box">
                <div className="textwidget custom-html-widget">
                  <div className="single-item">
                    <div className="count-box" id="free-technical-consultation">
                      1
                    </div>
                    <span>Have a free technical consultation</span>
                  </div>
                  <div className="single-item">
                    <div className="count-box">2</div>
                    <span>Sign your NDA</span>
                  </div>
                  <div className="single-item">
                    <div className="count-box">3</div>
                    <span>Get connected to our tech team</span>
                  </div>
                  <div className="single-item">
                    <div className="count-box">4</div>
                    <span>Get our team onboard for you</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-7 col-sm-12">
              <div className="wrap-contact2 contact2-form validate-form">
                <div className="inner-box">
                  <div className="textwidget">
                    <div
                      role="form"
                      className="wpcf7"
                      id="wpcf7-f5187-o1"
                      lang="en-US"
                      dir="ltr"
                    >
                      <div className="screen-reader-response">
                        <p
                          role="status"
                          aria-live="polite"
                          aria-atomic="true"
                        ></p>
                        <ul></ul>
                      </div>
                      <form className="wpcf7-form init" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="form__group field">
                              <span className="wpcf7-form-control-wrap your-name">
                                <input
                                  type="text"
                                  name="name"
                                  size="40"
                                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form__field"
                                  id="name"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Name"
                                  required
                                  value={formData?.name}
                                  onChange={handleChange}
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="form__group field">
                              <span className="wpcf7-form-control-wrap your-email">
                                <input
                                  type="email"
                                  name="email"
                                  size="40"
                                  className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form__field"
                                  id="email"
                                  required
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Email"
                                  value={formData?.email}
                                  onChange={handleChange}
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form__group field">
                              <span className="wpcf7-form-control-wrap your-phone">
                                <input
                                  type="number"
                                  name="contactNo"
                                  className="wpcf7-form-control wpcf7-number wpcf7-validates-as-number form__field"
                                  id="phone"
                                  required
                                  aria-invalid="false"
                                  placeholder="Contact No."
                                  value={formData.contactNo}
                                  onChange={handleChange}
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form__group field">
                              <span className="wpcf7-form-control-wrap your-Description">
                                <textarea
                                  name="message"
                                  cols="40"
                                  rows="3"
                                  className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form__field form-control"
                                  id="Description1"
                                  required
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Message"
                                  value={formData?.message}
                                  onChange={handleChange}
                                ></textarea>
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-md-12 col-lg-12">
                            <div className="input-group mb-3 mb-md-4 mb-lg-3">
                              <div className="d-block w-100">
                                Please enter sum:
                              </div>
                              <div className="input-group-prepend mt-2">
                                <span className="lead f-w-600 align-self-center">
                                  <span className="que1">2</span>&nbsp;+&nbsp;
                                  <span className="que2">0</span>
                                  &nbsp;=&nbsp;
                                </span>
                                <input
                                  name="captcha"
                                  maxlength="2"
                                  className="form-control p-r-0 ans"
                                  id="captchacode"
                                  placeholder="Write Answer..."
                                  required
                                  aria-required="true"
                                  type="text"
                                />
                                <FiRefreshCcw
                                  className="refresh-icon ml-2"
                                  onClick={() => captchGeneration()}
                                />
                              </div>
                              <div>
                                {" "}
                                <span className="captchacode-error">
                                  {" "}
                                </span>{" "}
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form__group field text-right set_new_sub">
                              <input
                                type="submit"
                                value="Submit"
                                className="wpcf7-form-control wpcf7-submit default-btn text-uppercase text-dark"
                                id="footer_quote"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="wpcf7-response-output"
                          aria-hidden="true"
                        ></div>
                      </form>
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

export default SapServices;
