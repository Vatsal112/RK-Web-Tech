import React, { useEffect, useState } from "react";
import { useScript } from "../../hooks/useScript";
import {
  scriptMain,
  swiperSliderTestimonialSAP,
} from "../../utils/particleCode";
import about_us_img from "../../assets/images/page_banner/about-us.webp";
import "./sap-services.css";
import { captchGeneration, captchValidation } from "../../utils/captch";
import { sapTechcard } from "../../utils/StaticDataForCards";
import SAPTechnologyCard from "../../components/SAPTechnologyCard/SAPTechnologyCard";
import { FiRefreshCcw } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../../utils/http-common";

const SapServices = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = captchValidation();
    if (valid) {
      alert("true");
      console.log(formData);
      postSAP();
    } else {
      captchGeneration();
      document.querySelector(".ans").value = "";
    }
  };
  const { isLoading: isPostSAP, mutate: postSAP } = useMutation(
    async () => {
      return await apiClient.post(`/contact-us`, formData);
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };

        console.log(result);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );
  return (
    <>
      <section
        id="about-page-banner"
        className="pt-332 bg_cover"
        style={{ backgroundImage: `url(${about_us_img})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="page-banner-title">
                <h1>SAP Services</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <i className="fas fa-home"></i>
                      <Link href="index.php">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      SAP Services
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                        href="https://www.prismetric.com/request-quote/"
                      >
                        Let&#8217;s Discuss
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                  <div className="banner-img">
                    <img
                      data-src="https://www.prismetric.com/wp-content/uploads/2021/06/SAP.png?tr=w-478.33,h-478.33"
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
                  change your company with latest tools. Prismetric leverages
                  software to deal with the developing requirement of your
                  business and allow you to offer everlasting consumer
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
                  sector-specific execution through to steady operation with
                  Prismetric, the largest general full-service partner for
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
                  <Link
                    href="https://www.prismetric.com/big-data-services/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                    data-src="https://www.prismetric.com/wp-content/uploads/2021/04/Custom-Application-Development-Services.svg?tr=w-50,h-50"
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
                    data-src="https://www.prismetric.com/wp-content/uploads/2021/04/Flexible-Solutions-and-Services.svg?tr=w-50,h-50"
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
                    data-src="https://www.prismetric.com/wp-content/uploads/2021/04/Adapt-To-Your-Budget.svg?tr=w-50,h-50"
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
      {/* <section className="testimonal main-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                <h2>Customer Testimonies </h2>
                <p>
                  With smiles of satisfaction, here’s what our clients’ had to
                  say about our services
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testi-slider swiper-container" data-aos="fade-up">
                <div className="swiper-wrapper">
                  <div className="testi-slider_one swiper-slide">
                    <div className="clients-item">
                      <div className="client_img text-center">
                        <img
                          data-src="https://www.prismetric.com/wp-content/uploads/2021/05/client5.png?tr=w-70,h-70"
                          loading="lazy"
                          src="https://www.prismetric.com/wp-content/uploads/2021/05/client5.png?tr=w-70,h-70"
                          style={{
                            borderRadius: "100%",
                            width: "70px",
                            height: "70px",
                          }}
                          alt="TAUREAN GORDON"
                        />
                      </div>
                      <div className="icon text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewbox="0 0 40 40"
                        >
                          <g
                            id="_40x40"
                            data-name="40x40"
                            transform="translate(-133 -203)"
                          >
                            <rect
                              id="Rectangle_17414"
                              data-name="Rectangle 17414"
                              width="40"
                              height="40"
                              transform="translate(133 203)"
                              fill="javascript:void(0)d85e5e"
                              opacity="0"
                            />
                            <g id="quote" transform="translate(133 176.765)">
                              <path
                                id="Path_30544"
                                data-name="Path 30544"
                                d="M0,46.378V63.521H17.143V46.378H5.714A11.442,11.442,0,0,1,17.143,34.949V29.235A17.162,17.162,0,0,0,0,46.378Z"
                                transform="translate(0 0)"
                                fill="rgba(119,119,119,0.56)"
                              />
                              <path
                                id="Path_30545"
                                data-name="Path 30545"
                                d="M251.025,34.949V29.235a17.162,17.162,0,0,0-17.143,17.143V63.521h17.143V46.378H239.6A11.442,11.442,0,0,1,251.025,34.949Z"
                                transform="translate(-211.025)"
                                fill="rgba(119,119,119,0.56)"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <p className="text-center my-3">
                        Prismetric is a perfect team to work with. We came to
                        them with a product that was a dream they helped to turn
                        it into reality and delivered it on time. Prismetric has
                        great support, great managers, and ability to take your
                        plan and develop a real product. We will be using them
                        for building our future products as well.
                      </p>
                      <div className="icon_video text-center">
                        <Link
                          href="https://www.youtube.com/embed/XjebRjSxu-k"
                          target="_blank"
                          data-lity
                        >
                          <span>
                            <svg
                              width="10"
                              height="14"
                              viewbox="0 0 10 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.522.088C1.394.015 1.23 0 1.092 0 .888 0 .7.053.53.158.236.35.03.665.013 1.015c-.017.105-.017 11.866 0 11.988.017.35.223.665.515.84.17.105.376.157.565.157.155 0 .3-.015.43-.087C6.528 10.95 9.45 7.98 9.623 7.84c.24-.21.376-.525.376-.84 0-.314-.138-.63-.378-.822-.172-.157-2.927-2.948-8.1-6.09z"
                                fill="javascript:void(0)FFF"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </Link>
                      </div>
                      <div className="clients-content text-center my-3">
                        <h3>TAUREAN GORDON</h3>
                        <span>CEO Pairchute Corp</span>
                      </div>
                    </div>
                  </div>
                  <div className="testi-slider_one swiper-slide">
                    <div className="clients-item">
                      <div className="client_img text-center">
                        <img
                          data-src="https://www.prismetric.com/wp-content/uploads/2021/05/client6.png?tr=w-70,h-70"
                          loading="lazy"
                          src="https://www.prismetric.com/wp-content/uploads/2021/05/client6.png?tr=w-70,h-70"
                          style={{
                            borderRadius: "100%",
                            width: "70px",
                            height: "70px",
                          }}
                          alt="MARC DE CHELLIS"
                        />
                      </div>
                      <div className="icon text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewbox="0 0 40 40"
                        >
                          <g
                            id="_40x40"
                            data-name="40x40"
                            transform="translate(-133 -203)"
                          >
                            <rect
                              id="Rectangle_17414"
                              data-name="Rectangle 17414"
                              width="40"
                              height="40"
                              transform="translate(133 203)"
                              fill="javascript:void(0)d85e5e"
                              opacity="0"
                            />
                            <g id="quote" transform="translate(133 176.765)">
                              <path
                                id="Path_30544"
                                data-name="Path 30544"
                                d="M0,46.378V63.521H17.143V46.378H5.714A11.442,11.442,0,0,1,17.143,34.949V29.235A17.162,17.162,0,0,0,0,46.378Z"
                                transform="translate(0 0)"
                                fill="rgba(119,119,119,0.56)"
                              />
                              <path
                                id="Path_30545"
                                data-name="Path 30545"
                                d="M251.025,34.949V29.235a17.162,17.162,0,0,0-17.143,17.143V63.521h17.143V46.378H239.6A11.442,11.442,0,0,1,251.025,34.949Z"
                                transform="translate(-211.025)"
                                fill="rgba(119,119,119,0.56)"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <p className="text-center my-3">
                        I am happy that I found Prismetric through some trusted
                        resource. We hired Prismetric team for our clients
                        product development. They did very excellent job and
                        completed the project in defined timeline. We found
                        their team very active and professional. They did give
                        their inputs in improving our app. Our experience was
                        positive so definitely we will work together again.
                      </p>
                      <div className="icon_video text-center">
                        <Link
                          href="https://www.youtube.com/embed/ec-SCJuNUcE"
                          target="_blank"
                          data-lity
                        >
                          <span>
                            <svg
                              width="10"
                              height="14"
                              viewbox="0 0 10 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.522.088C1.394.015 1.23 0 1.092 0 .888 0 .7.053.53.158.236.35.03.665.013 1.015c-.017.105-.017 11.866 0 11.988.017.35.223.665.515.84.17.105.376.157.565.157.155 0 .3-.015.43-.087C6.528 10.95 9.45 7.98 9.623 7.84c.24-.21.376-.525.376-.84 0-.314-.138-.63-.378-.822-.172-.157-2.927-2.948-8.1-6.09z"
                                fill="javascript:void(0)FFF"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </Link>
                      </div>
                      <div className="clients-content text-center my-3">
                        <h3>MARC DE CHELLIS</h3>
                        <span>Product Director- Launchpad Apps</span>
                      </div>
                    </div>
                  </div>
                  <div className="testi-slider_one swiper-slide">
                    <div className="clients-item">
                      <div className="client_img text-center">
                        <img
                          data-src="https://www.prismetric.com/wp-content/uploads/2021/05/client7.png?tr=w-70,h-70"
                          loading="lazy"
                          src="https://www.prismetric.com/wp-content/uploads/2021/05/client7.png?tr=w-70,h-70"
                          style={{
                            borderRadius: "100%",
                            width: "70px",
                            height: "70px",
                          }}
                          alt="RICHARD TELLIER"
                        />
                      </div>
                      <div className="icon text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewbox="0 0 40 40"
                        >
                          <g
                            id="_40x40"
                            data-name="40x40"
                            transform="translate(-133 -203)"
                          >
                            <rect
                              id="Rectangle_17414"
                              data-name="Rectangle 17414"
                              width="40"
                              height="40"
                              transform="translate(133 203)"
                              fill="javascript:void(0)d85e5e"
                              opacity="0"
                            />
                            <g id="quote" transform="translate(133 176.765)">
                              <path
                                id="Path_30544"
                                data-name="Path 30544"
                                d="M0,46.378V63.521H17.143V46.378H5.714A11.442,11.442,0,0,1,17.143,34.949V29.235A17.162,17.162,0,0,0,0,46.378Z"
                                transform="translate(0 0)"
                                fill="rgba(119,119,119,0.56)"
                              />
                              <path
                                id="Path_30545"
                                data-name="Path 30545"
                                d="M251.025,34.949V29.235a17.162,17.162,0,0,0-17.143,17.143V63.521h17.143V46.378H239.6A11.442,11.442,0,0,1,251.025,34.949Z"
                                transform="translate(-211.025)"
                                fill="rgba(119,119,119,0.56)"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <p className="text-center my-3">
                        When I connected with Prismetric, they stepped up to the
                        play and delivered. They developed TellAText and you
                        know what, they are fantastic! They are the best! They
                        are on time, under budget, and communication was great!
                        Check them out for your development needs. If you need a
                        genuine and productive developer overseas, then your
                        choice should be Prismetric.
                      </p>
                      <div className="icon_video text-center">
                        <Link
                          href="https://www.youtube.com/embed/ldlOR2mkT3w"
                          target="_blank"
                          data-lity
                        >
                          <span>
                            <svg
                              width="10"
                              height="14"
                              viewbox="0 0 10 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.522.088C1.394.015 1.23 0 1.092 0 .888 0 .7.053.53.158.236.35.03.665.013 1.015c-.017.105-.017 11.866 0 11.988.017.35.223.665.515.84.17.105.376.157.565.157.155 0 .3-.015.43-.087C6.528 10.95 9.45 7.98 9.623 7.84c.24-.21.376-.525.376-.84 0-.314-.138-.63-.378-.822-.172-.157-2.927-2.948-8.1-6.09z"
                                fill="javascript:void(0)FFF"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </Link>
                      </div>
                      <div className="clients-content text-center my-3">
                        <h3>RICHARD TELLIER</h3>
                        <span>President TellAText LLC</span>
                      </div>
                    </div>
                  </div>
                  <div className="testi-slider_one swiper-slide">
                    <div className="clients-item">
                      <div className="client_img text-center">
                        <img
                          data-src="https://www.prismetric.com/wp-content/uploads/2021/05/client8.png?tr=w-70,h-70"
                          loading="lazy"
                          src="https://www.prismetric.com/wp-content/uploads/2021/05/client8.png?tr=w-70,h-70"
                          style={{
                            borderRadius: "100%",
                            width: "70px",
                            height: "70px",
                          }}
                          alt="CURT HAYES"
                        />
                      </div>
                      <div className="icon text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewbox="0 0 40 40"
                        >
                          <g
                            id="_40x40"
                            data-name="40x40"
                            transform="translate(-133 -203)"
                          >
                            <rect
                              id="Rectangle_17414"
                              data-name="Rectangle 17414"
                              width="40"
                              height="40"
                              transform="translate(133 203)"
                              fill="javascript:void(0)d85e5e"
                              opacity="0"
                            />
                            <g id="quote" transform="translate(133 176.765)">
                              <path
                                id="Path_30544"
                                data-name="Path 30544"
                                d="M0,46.378V63.521H17.143V46.378H5.714A11.442,11.442,0,0,1,17.143,34.949V29.235A17.162,17.162,0,0,0,0,46.378Z"
                                transform="translate(0 0)"
                                fill="rgba(119,119,119,0.56)"
                              />
                              <path
                                id="Path_30545"
                                data-name="Path 30545"
                                d="M251.025,34.949V29.235a17.162,17.162,0,0,0-17.143,17.143V63.521h17.143V46.378H239.6A11.442,11.442,0,0,1,251.025,34.949Z"
                                transform="translate(-211.025)"
                                fill="rgba(119,119,119,0.56)"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <p className="text-center my-3">
                        This was our first attempt in creating an app and
                        Prismetric has taken us to the process of inception,
                        testing and submitting step by step. Throughout they
                        have been courteous and professional. I’m very pleased
                        with how our app has turned out and certainly plan on
                        continuing my relationship with the Prismetric team for
                        whenever there are more updates and version changes. I’m
                        happy to recommend them.
                      </p>
                      <div className="icon_video text-center">
                        <Link
                          href="https://www.youtube.com/embed/GBPqbEDZj_Y"
                          target="_blank"
                          data-lity
                        >
                          <span>
                            <svg
                              width="10"
                              height="14"
                              viewbox="0 0 10 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.522.088C1.394.015 1.23 0 1.092 0 .888 0 .7.053.53.158.236.35.03.665.013 1.015c-.017.105-.017 11.866 0 11.988.017.35.223.665.515.84.17.105.376.157.565.157.155 0 .3-.015.43-.087C6.528 10.95 9.45 7.98 9.623 7.84c.24-.21.376-.525.376-.84 0-.314-.138-.63-.378-.822-.172-.157-2.927-2.948-8.1-6.09z"
                                fill="javascript:void(0)FFF"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </Link>
                      </div>
                      <div className="clients-content text-center my-3">
                        <h3>CURT HAYES</h3>
                        <span>President Audio Design Inc</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="blog-post-info main-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                <h2>Related Blog</h2>
              </div>
            </div>
          </div>
          <div className="row blog-sec">
            <div className="col-12 col-md-4 col-lg-4">{/* <BlogCard /> */}</div>
            <div className="col-12 col-md-4 col-lg-4">{/* <BlogCard /> */}</div>
            <div className="col-12 col-md-4 col-lg-4">{/* <BlogCard /> */}</div>

            {/* <BlogCard />
            <BlogCard /> */}
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

                          {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group files color">
                              <label>Upload Your File </label>
                              <div className="file-content">
                                <div className="icon mr-3">
                                  {" "}
                                  <img
                                    data-src="https://www.prismetric.com/wp-content/uploads/2021/06/icon-download.svg?tr=w-25,h-24"
                                    loading="lazy"
                                    src="https://www.prismetric.com/wp-content/uploads/2021/06/icon-download.svg?tr=w-25,h-24"
                                    alt
                                  />{" "}
                                </div>
                                <p>
                                  <span className="wpcf7-form-control-wrap file">
                                    <input
                                      type="file"
                                      name="file"
                                      size="40"
                                      className="wpcf7-form-control wpcf7-file"
                                      accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav,.wmv"
                                      aria-invalid="false"
                                      onChange={(e) =>
                                        getBase64(e.target.files[0])
                                      }
                                    />
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div> */}
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
