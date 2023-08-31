import React, { useEffect, useState, useRef } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import "./inquiry.css";
import { FiRefreshCcw } from "react-icons/fi";
import { captchGeneration, captchValidation } from "../../utils/captch";
import { BiSolidLockAlt, BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../../utils/http-common";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import Title from "../../components/Title/Title";
import { Store } from "react-notifications-component";

const fetchData = () => {
  const data = apiClient.get("/inquiry/get-header");
  console.log(data);
  return data;
};
const Inquiry = () => {
  useDynamicTitle("Get Your Free Quote, Inquiry | RK WebTechnology");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    document: "",
    documentName: "",
    budget: "",
    projectDetails: "",
  });
  const [selectedFile, setSelectedFile] = useState("");
  useEffect(() => {
    captchGeneration();
  }, []);

  const dataForInquiryHeader = useQuery({
    queryKey: ["inquiryHeaderMain"],
    queryFn: fetchData,
  });
  const HeaderData = dataForInquiryHeader?.data?.data?.data[0];
  console.log(dataForInquiryHeader);
  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormData({
        ...formData,
        document: reader.result,
        documentName: file.name,
      });
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = captchValidation();
    if (valid) {
      postInquiry();
      document.querySelector(".ans").value = "";
    } else {
      captchGeneration();
      document.querySelector(".ans").value = "";
    }

    // handleReset();
  };
  const { isLoading: isPostInquiry, mutate: postInquiry } = useMutation(
    async () => {
      return await apiClient.post(`/inquiry`, formData);
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
          insert: "center",
          container: "center",
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
          document: "",
          documentName: "",
          budget: "",
          projectDetails: "",
        });
      },
      onError: (err) => {
        console.log(err);
        setFormData({
          name: "",
          email: "",
          document: "",
          documentName: "",
          budget: "",
          projectDetails: "",
        });
      },
    }
  );
  // const inputFile = useRef(null);
  // const handleReset = () => {
  //   if (inputFile.current) {
  //     inputFile.current.value = "";
  //     inputFile.current.type = "text";
  //     inputFile.current.type = "file";
  //   }
  // };

  return (
    <>
      {/* <!-- Start Page Banner --> */}
      <PageBanner
        mainTitle={HeaderData?.title}
        firstText="Home"
        firstLink="/"
        secondText="Inquiry"
        description={HeaderData?.description}
        // thirdText="Mobile Application Development"
      />
      <div className="inquiry-form">
        <Title normalText="Let's Discuss" spanText="your ides" />
        <div className="title d-flex align-items-center justify-content-between mb-2">
          <p className="d-flex align-items-center">
            <BiSolidLockAlt />
            <span className="ml-2">All projects are secured by NDA</span>
          </p>
          <p className="d-flex align-items-center">
            <BiCheck />
            <span className="ml-2">100% Secure. Zero Spam.</span>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  aria-describedby="name"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  aria-describedby="email"
                  placeholder="Your Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label className="form-label">Document</label>
                <input
                  className="form-control"
                  value={formData.documentName}
                  disabled
                />
                <label
                  className="btn position-absolute choose-btn"
                  htmlFor="formFile"
                >
                  Choose File
                </label>
                <input
                  className="form-control d-none align-item-center p-2 position-relative"
                  type="file"
                  id="formFile"
                  required
                  name="document"
                  onChange={(e) => {
                    getBase64(e.target.files[0]);
                  }}
                />
                {/* <label
              className="text-file bg-white form-control d-flex align-items-center"
              htmlFor="formFile"
            >
              Choose file
            </label> */}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="name">Budget</label>
                <select
                  className="custom-select"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="$5000">&#60; {`$5000`}</option>
                  <option value="5000 - $10000">$5000 - $10000</option>
                  <option value="10000 - $25000">$10000 - $25000</option>
                  <option value="$25000 - $50000">$25000 - $50000</option>
                  <option value="$50000">&#62; $50000</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="project">Brief about the project</label>
            <textarea
              type="text"
              className="form-control"
              id="project"
              required
              aria-describedby="project"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Please brief your requirements or idea to us. The more you share information, the better we can guide and assist you."
              style={{ height: "5rem" }}
            />
          </div>
          {/* <div className="col-12 col-md-12 col-lg-12"> */}
          <div className="input-group mb-3 mb-md-4 mb-lg-3">
            <div className="d-block w-100 headingCaptcha">
              Please enter sum:
            </div>
            <div className="input-group-prepend mt-2 d-flex align-items-center">
              <span className="lead f-w-600 align-self-center">
                <span className="que1"></span>&nbsp;+&nbsp;
                <span className="que2"></span>
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
              <span className="captchacode-error"> </span>{" "}
            </div>
          </div>
          {/* </div> */}
          <input type="submit" value="Submit" className="btn form-btn" />
        </form>
      </div>
      <section className="section-padding rules">
        <div className="container">
          <Title
            normalText="At RK WebTechnology, We Have Made it Easy for Clients to"
            spanText="Reach Us and Get Their Solutions Weaved"
          />
          <div className="row align-items-center">
            <div className="col-lg-6 section-paragraph">
              <ul className="style-check mb-2">
                <li>
                  <h2 className="h4 font-bold font-weight-bold">
                    Put Forward Your Requirement
                  </h2>
                </li>
              </ul>
              <p className="mb-4">
                Drop your inquiry in the form given on the right side of this
                page. And within 24 hours, one of our business development
                executive will reach you for further communication.
              </p>
              <ul className="style-check mb-2">
                <li>
                  <h2 className="h4 font-bold font-weight-bold">
                    Sign Non-Disclosure Agreement
                  </h2>
                </li>
              </ul>
              <p className="mb-4">
                With the help of an NDA, we make you feel secure. Your idea will
                be yours. Signing an NDA assures you the privacy of your idea
                and project.
              </p>
              <ul className="style-check mb-2">
                <li>
                  <h2 className="h4 font-bold font-weight-bold">
                    Analyzing Your Requirement
                  </h2>
                </li>
              </ul>
              <p className="mb-4">
                Once you have signed the NDA, we will analyze the requirements
                put forward by you. Our team of scrum masters will read and
                analyze the same, and will get back to you within few hours.
              </p>
              <ul className="style-check mb-2">
                <li>
                  <h2 className="h4 font-bold font-weight-bold">
                    Estimated Budget
                  </h2>
                </li>
              </ul>
              <p>
                Once our team of scrum masters and business development managers
                are done with analyzing the project and compilation of necessary
                resources required for the project, we will get back to you with
                Estimated Budget/Cost and Estimated Time Required for completion
                of project successfully.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="section-title-and-desc  section-paragraph text-center p-0 m-0">
                <div className="section-title-block p-0">
                  <h2 className="section-title-text">On-Call Support</h2>
                </div>
              </div>
              <ul className="text-18 text-center">
                <li className="mx-3 my-1 mb-4">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-2 text-right">
                      <picture>
                        <source
                          srcset="https://www.bacancytechnology.com/main-boot-5/images/india-flag-1-1.webp"
                          type="image/webp"
                        />
                        <source
                          srcset="https://www.bacancytechnology.com/main-boot-5/images/india-flag-1-1.png?v-1"
                          type="image/jpeg"
                        />
                        <img
                          src="https://www.bacancytechnology.com/main-boot-5/images/xindia-flag-1-1.png,qv-1.pagespeed.ic.r3OKVxDyMA.webp"
                          alt="RK WebTechnology India Phone"
                          title="RK WebTechnology India Phone"
                          className="mr-3"
                          data-pagespeed-url-hash="1738994515"
                          onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                        />
                      </picture>{" "}
                    </div>
                    <div className="col-lg-6 text-left">
                      <Link to="tel:+918758737527" className="h4">
                        +91 87587 37527
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>

              <ul className="text-18 text-center">
                <li className="mx-3 my-1 mb-4">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-3 text-right">
                      <picture>
                        <source
                          srcset="https://www.bacancytechnology.com/main-boot-5/images/skype-1-1.webp"
                          type="image/webp"
                        />
                        <source
                          srcset="https://www.bacancytechnology.com/main-boot-5/images/skype-1-1.png?v-1"
                          type="image/jpeg"
                        />
                        <img
                          src="https://www.bacancytechnology.com/main-boot-5/images/xskype-1-1.png,qv-1.pagespeed.ic.IBOTS-cKHn.webp"
                          alt="RK WebTechnology Skype"
                          title="RK WebTechnology Skype"
                          className="mr-3"
                          data-pagespeed-url-hash="3328667245"
                          onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                        />
                      </picture>{" "}
                    </div>
                    <div className="col-lg-7 text-left">
                      <span className="font-bold h4">Skype : </span>{" "}
                      <Link href="skype:rohit.patel_20" className="h4">
                        rohit.patel_20
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="mx-3 my-1 mb-4">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-3 text-right">
                      <picture>
                        <source
                          srcset="https://www.bacancytechnology.com/main-boot-5/images/gmail-1-1.webp"
                          type="image/webp"
                        />
                        <source
                          srcset="https://www.bacancytechnology.com/main-boot-5/images/gmail-1-1.png?v-1"
                          type="image/jpeg"
                        />
                        <img
                          src="https://www.bacancytechnology.com/main-boot-5/images/xgmail-1-1.png,qv-1.pagespeed.ic.VPtiobG6zO.webp"
                          alt="RK WebTechnology Sales Mail"
                          title="RK WebTechnology Sales Mail"
                          className="mr-3"
                          data-pagespeed-url-hash="3069245745"
                          onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                        />
                      </picture>{" "}
                    </div>
                    <div className="col-lg-7 text-left">
                      <span className="font-bold h4">Sales : </span>
                      <span className="h4">
                        <Link
                          href="mailto:info@rkwebtechnology.com"
                          className="mail-id"
                        >
                          info@rkwebtechnology.com
                        </Link>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inquiry;
