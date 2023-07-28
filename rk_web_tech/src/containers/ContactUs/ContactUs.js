import React, { useState, useEffect } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import Title from "../../components/Title/Title";
import "./contact-us.css";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { captchGeneration, captchValidation } from "../../utils/captch";
import apiClient from "../../utils/http-common";
import { useMutation } from "@tanstack/react-query";
import { FiRefreshCcw } from "react-icons/fi";
import { Link } from "react-router-dom";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
  });
  const [phoneValue, setphoneValue] = useState();
  useEffect(() => {
    captchGeneration();
  }, []);

  useEffect(() => {
    setFormData({ ...formData, contactNo: phoneValue });
  }, [phoneValue]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = captchValidation();
    console.log(valid);
    if (valid) {
      alert("true");
      console.log(formData);
      postContact();
    } else {
      captchGeneration();
      document.querySelector(".que2").value = "";
    }
  };

  const { isLoading: isPostContact, mutate: postContact } = useMutation(
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
      <PageBanner
        mainTitle="Contact Us"
        firstText="Home"
        firstLink="/"
        secondText="Contact Us"
        // thirdText="Mobile Application Development"
      />

      {/* <section id="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 main-heading">
              <h1>
                Get in <span>touch</span>
              </h1>
            </div>
            <div className="col-lg-12">
              <div className="main-heading-content">
                <p>
                  Want to find out how RK WebTechnology can solve problems
                  specific to your business? Fill out the form and we'll be in
                  touch within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="sect-pad-tb contact-us pt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 text-right mb-3">
              {/* <nav aria-label="breadcrumb">
                <ol className="breadcrumb d-inline-flex">
                  <li className="breadcrumb-item">
                    <a
                      to="https://www.hyperlinkinfosystem.com/"
                      className="c-blue"
                    >
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav> */}
            </div>
            <div className="col-12 col-md-12 col-lg-12 text-center">
              <div className="row h-100 justify-content-between">
                <div className="col-12 col-md-12 col-lg-12">
                  <Title normalText="Contact" spanText="Us" />
                  <h4>Let’s bring your idea into reality</h4>
                  <p className="desc mb-0">
                    Get in touch with us for custom software development, Web &
                    Mobile app development and hire dedicated resources to bring
                    your product to reality within your timeline and budget.
                    Let’s collaborate to innovate a prestigious product.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12 get-qoute-sect align-self-center mt-4">
              <div className="card-box mt-0 bg-white p-4 p-md-5 p-lg-5 w-50 m-auto">
                <form
                  action="https://www.hyperlinkinfosystem.com/inquiry/post"
                  id="inquiry"
                  name="inquiry"
                  enctype="multipart/form-data"
                  method="post"
                  accept-charset="utf-8"
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="CaptchaOneFrm" value="2" />
                  <input type="hidden" name="CaptchaTwoFrm" value="0" />
                  <input
                    type="hidden"
                    name="TotalCaptchaForm"
                    value="54e08571125137de7213fe9b802b535013d0a79cffc82866fc168bc2d15836b9d50305af6706ab0658f0747971e4f04ee239034a52e190783bd1a810db85808aer4WT+GhGdFWXb1idfu+bJUv9RQZCv0c9j4psIeghD8="
                  />
                  <input type="hidden" id="country_name" name="country_name" />
                  <input type="hidden" name="ContactForm" value="ContactForm" />
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="input-group mb-3 mb-md-4 mb-lg-3">
                        <div className="input-group-prepend d-flex align-items-center">
                          <BsFillPersonFill className="form-icons" />
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          required
                          placeholder="Your Full Name*"
                          aria-label="Your Full Name"
                          name="name"
                          data-msg-required="Please enter your name."
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        {" "}
                        <span className="name-error"> </span>{" "}
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="input-group mb-3 mb-md-4 mb-lg-3">
                        <div className="input-group-prepend d-flex align-items-center">
                          <MdEmail className="form-icons" />
                        </div>
                        <input
                          type="text"
                          name="email"
                          required
                          minlength="4"
                          className="form-control"
                          id="email"
                          placeholder="Your Email*"
                          aria-label="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        {" "}
                        <span className="email-error"> </span>{" "}
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="input-group mb-3 mb-md-4 mb-lg-3 d-flex">
                        <PhoneInput
                          name="contactNo"
                          value={phoneValue}
                          onChange={setphoneValue}
                          required
                          // maxlength="20"
                        />
                      </div>
                      <div>
                        {" "}
                        <span className="phone-error"> </span>{" "}
                      </div>
                    </div>
                    {/* <div className="col-12 col-md-6 col-lg-6">
                      <div className="input-group mb-3 mb-md-4 mb-lg-3">
                        <div className="input-group-prepend d-flex align-items-center">
                          <FaLocationDot className="form-icons" />
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="location"
                          placeholder="Your address / location"
                          aria-label="Your Address / Location"
                          name="location"
                          value=""
                        />
                      </div>
                    </div> */}
                    {/* <div className="col-12 col-md-12 col-lg-4">
                      <div className="input-group mb-3 mb-md-4 mb-lg-3">
                        <div className="input-group-prepend d-flex align-items-center">
                          <BsSkype className="form-icons" />
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="skype-id"
                          placeholder="Skype"
                          aria-label="Skype"
                          name="im_skype"
                          minlength="4"
                          value=""
                        />
                      </div>
                    </div> */}

                    {/* <div className="col-12 col-md-12 col-lg-12">
                      <div className="input-group mb-3 mb-md-4 mb-lg-3">
                        <input
                          type="file"
                          id="files_doc"
                          className="form-control"
                          name="files_doc"
                        />
                        <small>(Max Size 20MB)</small>
                      </div>
                      <span className="files_doc-error"></span>
                    </div> */}
                    {/* <div className="col-12 col-md-12 col-lg-12">
                      <div className="mb-3 mb-md-4 mb-lg-3">
                        <label for="budget" className="price-label">
                          {" "}
                          Project Budget :
                          <span
                            className="text-red numbers"
                            id="ex6CurrentSliderValLabel"
                          >
                            $ 100
                          </span>{" "}
                        </label>
                        <input
                          type="hidden"
                          name="budget"
                          id="budget"
                          value="100"
                        />
                      </div>
                    </div> */}
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="input-group mb-3 mb-md-4 mb-lg-3">
                        <div className="input-group-prepend align-items-start pt-2">
                          <AiFillMessage className="form-icons" />
                        </div>
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Your Message*"
                          rows="4"
                          name="message"
                          minlength="10"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div>
                        {" "}
                        <span className="message-error"> </span>{" "}
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="input-group mb-3 mb-md-4 mb-lg-3">
                        <div className="d-block w-100">Please enter sum:</div>
                        <div className="input-group-prepend d-flex align-items-center">
                          <span className="lead f-w-600 align-self-center">
                            <span className="que1">2</span>&nbsp;+&nbsp;
                            <span className="que2">0</span>
                            &nbsp;=&nbsp;
                          </span>
                          <input
                            name="captcha"
                            maxlength="2"
                            className="form-control p-r-0 ans"
                            onkeypress="if (!window.__cfRLUnblockHandlers) return false; return isNumberKey(event);"
                            id="captchacode"
                            placeholder="Write Answer..."
                            required
                            aria-required="true"
                            type="text"
                            data-cf-modified-ad3f27ce04a39dcfd4423b04-=""
                          />
                          <FiRefreshCcw
                            className="refresh-icon ml-2"
                            onClick={() => captchGeneration()}
                          />
                        </div>
                        <div>
                          {" "}
                          <span className="captchacode-error"> </span>{" "}
                        </div>
                      </div>
                      <span className="cnt-bottom-title">
                        We sign NDA for all our projects.
                      </span>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 text-right mt-3">
                      <div className="d-inline-flex">
                        <div className="slider-left-right-btn d-flex">
                          <input
                            className="text-center contact-btn btn"
                            type="submit"
                            value="Send"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="sect-pad-tb comp-logos">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="comp-logos-swip swiper-container w-100 h-100">
                <div className="swiper-wrapper text-center">
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/npci-hlis.png"
                      alt="npci"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/google-hlis.png"
                      alt="google"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/disney-hlis.png"
                      alt="disney"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/bbc-hlis.png"
                      alt="bbc"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/tata-motors-hlis.png"
                      alt="tata power"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/astral-hlis.png"
                      alt="astral"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/kantar-media-hlis.png"
                      alt="kantar media"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/zydus-logo.png"
                      alt="zydus"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/emaar-hlis.png"
                      alt="emaar"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/art-of-living-hlis.png"
                      alt="art of living"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/sbs-discovery-media-hlis.png"
                      alt="sbs discovery media"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/ceat.png"
                      alt="ceat"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/arunachal-pradesh.png"
                      alt="arunachal pradesh"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/hitachi.png"
                      alt="hitachi"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/dhl.png"
                      alt="dhl"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/viacom-media-hlis.png"
                      alt="viacom media"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="sect-pad-tb locateus-sect">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <Title normalText="Contact" spanText="Us" />
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="content-box text-center position-relative mumbai-office h-100 p-4 p-md-4 p-xl-5 d-flex flex-column justify-content-between">
                <div>
                  <div className="card-box p-3 bg-white d-inline-block">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/mumbai.svg"
                      alt="mumbai Office"
                    />
                  </div>
                  <h3 className="title mt-5 mb-3 d-flex w-100 justify-content-center">
                    <img
                      className="mr-2 align-self-center"
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/ind-flag.svg"
                      alt="india"
                    />{" "}
                    Rajkot Office
                  </h3>
                  <p className="desc mb-4">
                    331, Nakshtra VIII, Sadhu Vasvani Rd, opposite Ikon Complex,
                    near Sun City, Hari Nagar, Rajkot, Gujarat 360005.
                  </p>
                </div>
                <Link to="tel:+918758737527">+91 87587 37527</Link>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-0 mt-md-0 mt-lg-5 mt-xl-5 d-flex flex-column justify-content-end">
              <div className="content-box text-center position-relative email-box pt-5 pt-md-3 pt-xl-5 px-5 px-md-3 px-lg-4">
                <div>
                  <div className="card-box p-3 bg-white d-inline-flex align-items-center">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/email-icon.svg"
                      alt="email"
                    />
                  </div>
                  <h3 className="title mt-5 mb-3">Email Us</h3>
                  <p className="desc mb-5">
                    <Link to="mailto:info@rkwebtechnology.com">
                      info@rkwebtechnology.com
                    </Link>
                  </p>
                </div>
                <img
                  className="img-fluid"
                  src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/email-img.png"
                  alt="email img"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-0 mt-md-5 mt-lg-5 mt-xl-5 align-self-end">
              <div className="content-box text-center position-relative skype-box pt-5 pt-md-3 pt-xl-0 px-5 px-md-3 px-lg-4 mt-0 mt-md-0 mt-lg-5 mt-xl-5 d-flex flex-column justify-content-between">
                <div>
                  <div className="card-box p-3 bg-white d-inline-flex align-items-center">
                    <img
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/skype-icon.svg"
                      width="70"
                      alt="skype"
                    />
                  </div>
                  <h3 className="title mt-5 mb-3">Skype</h3>
                  <p className="desc mb-4">
                    <Link to="skype:live:rohit.patel_20?chat">
                      rohit.patel_20
                    </Link>
                  </p>
                </div>
                <img
                  className="img-fluid px-4 px-md-3 px-lg-5"
                  src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/skype.png"
                  alt="skype"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="sect-pad-tb d-none">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3 mb-sm-3 mb-md-0">
              <div className="p-3 bg-light-gray">
                <div style={{ width: "100%" }}>
                  <iframe
                    width="100%"
                    height="340"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=One%20World%20Trade%20Center,%20285%20Fulton%20Street%20suite%208500,%20New%20York,%20NY%2010007,%20United%20States+(USA%20office)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3 mb-sm-3 mb-md-0">
              <div className="p-3 bg-light-gray">
                <div style={{ width: "100%" }}>
                  <iframe
                    width="100%"
                    height="340"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Level%2030,%20The%20Leadenhall%20Building,%20122%20Leadenhall%20Street,%20London%20EC3V%204AB+(Hyperlink%20InfoSystem)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3 mb-sm-3 mb-md-0">
              <div className="p-3 bg-light-gray">
                <div style={{ width: "100%" }}>
                  <iframe
                    width="100%"
                    height="340"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Block%20C,%20106/B%20Ganesh%20Meredian,%20Near%20Sola%20Bridge,%20Opp%20Gujarat%20High%20Court,%20380061%20Ahmedabad+(Hyperlink%20InfoSystem)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3 mb-sm-3 mb-md-0">
              <div className="p-3 bg-light-gray">
                <div style={{ width: "100%" }}>
                  <iframe
                    width="100%"
                    height="340"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Level%208,%20Vibgyor%20Towers,%20G%20Block,%20C62%20Bandra%20Kurla%20Complex,%20Mumbai%20400%20098,%20India+(Hyperlink%20InfoSystem)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="sect-pad-tb media-coverage">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-5 mb-sm-5 mb-md-0">
              <h4 className="mb-4 h3 text-center">
                <b>Media Coverage</b>
              </h4>
              <div className="row no-gutters">
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 border-right border-bottom text-center">
                  <div className="p-3">
                    <img
                      className="img-fluid"
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/forbes-logo.svg"
                      alt="forbes"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 border-right border-bottom text-center">
                  <div className="p-3">
                    <img
                      className="img-fluid"
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/cnbc-logo.svg"
                      alt="cnbc"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 border-bottom text-center">
                  <div className="p-3">
                    <img
                      className="img-fluid"
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/marketwatch-logo.svg"
                      alt="marketwatch"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 border-right text-center">
                  <div className="p-3">
                    <img
                      className="img-fluid"
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/the-street-logo.svg"
                      alt="the street"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 border-right text-center">
                  <div className="p-3">
                    <img
                      className="img-fluid"
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/yahoo-finance-logo.svg"
                      alt="yahoo finance"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center">
                  <div className="p-3">
                    <img
                      className="img-fluid"
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/entrepreneur-logo.svg"
                      alt="entrepreneur"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h4 className="mb-4 h3 text-center">
                <b>Our Esteemed Clients</b>
              </h4>
              <div className="row no-gutters">
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 border-right border-bottom text-center">
                  <div className="p-3">
                    <img
                      className="img-fluid"
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/cartoon-network-logo.svg"
                      alt="cartoon network"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 border-right border-bottom text-center">
                  <div className="p-3">
                    <img
                      className="img-fluid"
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/google-m-logo.svg"
                      alt="google"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 border-bottom text-center">
                  <div className="p-3">
                    <img
                      className="img-fluid"
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/disney-m-logo.svg"
                      alt="disney"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 border-right text-center">
                  <div className="p-3">
                    <img
                      className="img-fluid"
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/viacom-logo.svg"
                      alt="viacom"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 border-right  text-center">
                  <div className="p-3">
                    <img
                      className="img-fluid"
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/sbs-discovery-logo.svg"
                      alt="sbs discovery"
                    />
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center">
                  <div className="p-3">
                    <img
                      className="img-fluid"
                      src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/papa-johns-logo.svg"
                      alt="papa johns"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section id="our_presence">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading">
              <h1>OUR PRESENCE</h1>
            </div>
          </div>
        </div>
        <div className="row m-l-0 m-r-0">
          <iframe
            title="RK WebTechnology"
            async
            defer
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.548767960589!2d70.75677141438283!3d22.2950764853263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb6758a0e9b5%3A0xd0342f86a93d2019!2sRK+WebTechnology!5e0!3m2!1sen!2sin!4v1556886077511!5m2!1sen!2sin"
            width="100%"
            height="550px"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen
          ></iframe>
        </div>
      </section> */}
    </>
  );
};

export default ContactUs;
