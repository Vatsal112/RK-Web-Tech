import React, { useState, useEffect } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import Title from "../../components/Title/Title";
import "./contact-us.css";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { captchGeneration, captchValidation } from "../../utils/captch";
import apiClient from "../../utils/http-common";
import { useMutation } from "@tanstack/react-query";
import { FiRefreshCcw } from "react-icons/fi";
import { Link } from "react-router-dom";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import { BsTelephoneFill } from "react-icons/bs";
import TitleDescription from "../../components/TitleDescription/TitleDescription";
import { Store } from "react-notifications-component";
import ScrollToTopHandler from "../../utils/ScrollToTopHandler";

const ContactUs = () => {
  useDynamicTitle("Contact Us | RK WebTechnology");
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

    if (valid) {
      postContact();
      document.querySelector(".que2").value = "";
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
        Store.addNotification({
          title: "Wonderful!",
          message: "Data Submitted Successfully",
          type: "success",
          insert: "top-center",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: true,
          },
        });
        setFormData({
          name: "",
          email: "",
          contactNo: "",
          message: "",
        });
      },
      onError: (err) => {
        console.log(err);
        setFormData({
          name: "",
          email: "",
          contactNo: "",
          message: "",
        });
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

      <section className="sect-pad-tb contact-us pt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 text-right mb-3"></div>
            <div className="col-12 col-md-12 col-lg-12 text-center">
              <div className="row h-100 justify-content-between">
                <div className="col-12 col-md-12 col-lg-12">
                  <Title normalText="Contact" spanText="Us" />
                  <h4>Let’s bring your idea into reality</h4>
                  <TitleDescription
                    desc="Get in touch with us for custom software development, Web &
                    Mobile app development and hire dedicated resources to bring
                    your product to reality within your timeline and budget.
                    Let’s collaborate to innovate a prestigious product."
                    classCustom="text-center  m-auto"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12 get-qoute-sect align-self-center mt-4">
              <div className="card-box mt-0 bg-white p-4 p-md-5 p-lg-5 w-50 m-auto">
                <form
                  id="contact-us"
                  name="contact-us"
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
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
                        <div className="input-group-prepend d-flex align-items-center">
                          <BsTelephoneFill className="form-icons" />
                        </div>
                        <input
                          type="text"
                          name="contactNo"
                          required
                          className="form-control"
                          id="contactNo"
                          placeholder="Phone Number*"
                          value={formData.contactNo}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        {" "}
                        <span className="phone-error"> </span>{" "}
                      </div>
                    </div>

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
                    <div className="col-12 col-md-12 col-lg-12 text-left mt-3">
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
    </>
  );
};

export default ContactUs;
