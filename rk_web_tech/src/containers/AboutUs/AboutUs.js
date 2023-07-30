import React, { useEffect } from "react";
import "./about-us.css";
import Title from "../../components/Title/Title";
import development_img_1 from "../../assets/images/discover-icon.png";
import development_img_2 from "../../assets/images/design-icon.png";
import development_img_4 from "../../assets/images/deliver-icon.png";
import development_img_3 from "../../assets/images/build-icon.png";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Helmet } from "react-helmet";
import { useScript } from "../../hooks/useScript";
import { owlCodeDevelopment } from "../../utils/particleCode";
import PageBanner from "../../components/PageBanner/PageBanner";
import useDynamicTitle from "../../hooks/useDynamicTitle";

const AboutUs = () => {
  useDynamicTitle("About Us | RK WebTechnology");
  useScript(owlCodeDevelopment());
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
          integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
          integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>
      <PageBanner
        mainTitle="About Us"
        firstText="Home"
        firstLink="/"
        secondText="Company"
        thirdText="About Us"
      />
      <section id="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 main-heading">
              <h1>
                About <span>Us</span>
              </h1>
            </div>
            <div className="col-lg-12">
              <div className="main-heading-content">
                <p>
                  We specialized in turning your concept, ideal, or business
                  objective into a web, mobile and enterprise digital solution.
                  Our staff has the experience in product development, in-depth
                  knowledge of international markets, and unrivalled technical
                  proficiency you need to make excellent goods. Allow us to
                  assist you in selecting the ideal course of action to offer
                  the ideal answer. We build, accelerate, and support your
                  business in addition to creating apps.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="what_we_are">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 heading">
                <h1>
                  What <span>We Do</span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p className="mb-3">
                  We are offering professional digital solutions like website
                  design, website development, mobile application design, and
                  mobile application development, other solutions in UI/UX
                  design, custom software development, database management,
                  digital marketing services, and cloud services.
                </p>
                <p>
                  RK WebTechnology team has been through a remarkable journey in
                  developing websites, mobile applications and managing
                  databases as per clients' requirements. We are elite in
                  delivering innovative, steady, and reliable digital solutions
                  with quality and firm business ethics. We aim to contribute in
                  the technological era by delivering enhanced and compelling
                  products with effective productivity schemes. We always follow
                  transparent work process and keep our clients updated with the
                  status of their project. We believe that transparency is the
                  key to success. We are organizing and executing projects
                  through agile methodology. By using agile methodology, we make
                  our clients flexible to get their valuable inputs, throughout
                  development cycle. Our priority lies in making our clients
                  happy and satisfied with our work style. We always accumulate
                  information and consult our clients for their satisfaction at
                  every development milestone. Our active communication with our
                  clients, help us to serve them better.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 our_mission">
                <div className="col-lg-12 heading">
                  <h1>
                    Our <span>Vision</span>
                  </h1>
                </div>
                <label className="text-left">
                  <q>
                    If your business is not on the internet, then your business
                    will be out of business.
                  </q>{" "}
                  - <strong>Bill Gates, Microsoft Founder </strong>
                </label>
                <p>
                  A well-known software development firm in India and Canada, RK
                  WebTechnology assists other businesses in becoming digital
                  firms. It gives you a competitive edge over rivals in the
                  market and improves interaction with your target audience. We
                  are aware that no two consumer landscapes are exactly alike.
                  We provide a phased approach to your business drivers and
                  assist IT teams in coordinating their objectives with the
                  overarching business vision. Our key goal is to consistently
                  improve and take the lead in this cutthroat worldwide
                  industry. Fortunately, we were able to put together a team of
                  experts that can build and shape their cumulative experiences
                  and who all have exceptional talent that can help to improve
                  your company's online profile.
                </p>
              </div>
              <div className="col-sm-12 our_mission">
                <div className="col-lg-12 heading">
                  <h1>
                    Our <span>Mission</span>
                  </h1>
                </div>
                <p>
                  Our mission is to amplify business growth of our customers
                  with creative design, innovative development, and database
                  security with all support. We are here to unleash the
                  opportunity for businesses by forming websites, mobile
                  applications, and managing databases that creates and add
                  valuation with a reliable competitive advantage to customers
                  around the globe for their business augmentation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section id="how_it_works">
          <Title normalText="RK WebTechnology" spanText="DEVELOPMENT PROCESS" />
          <div id="development-process">
            <div className="container">
              <span>Quality & Process</span>
              <h6>
                Simplifying the Web Development <strong>Experience</strong>
              </h6>
              <ul className="development-list row m-auto">
                <li className="col-sm-6 col-md-3">
                  <h2>
                    <img src={development_img_1} alt="" title="" /> Plan
                  </h2>
                  <p>
                    Site Specification, Analyzing Client Requirements, and Site
                    Planning For Smooth Development.
                  </p>
                </li>
                <li className="col-sm-6 col-md-3">
                  <h2>
                    <img src={development_img_2} alt="" title="" /> Design
                  </h2>
                  <p>
                    Creating the visual design and layout of the website for a
                    seamless user experience.
                  </p>
                </li>
                <li className="col-sm-6 col-md-3">
                  <h2>
                    <img src={development_img_3} alt="" title="" /> Build
                  </h2>
                  <p>
                    Implement the plan by bringing all the designs together to
                    develop the final product.
                  </p>
                </li>
                <li className="col-sm-6 col-md-3  ">
                  <h2>
                    <img src={development_img_4} alt="" title="" /> Deliver
                  </h2>
                  <p>
                    Website launch, testing, support, maintenance & optimization
                    with the latest technology.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div id="why_you_should">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 heading">
                <h1>
                  Why You Should <span>Choose</span> Us?
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="development_team">
                  <div className="iconbox">
                    <i className="fas fa-thumbtack mt-2"></i>
                  </div>
                  <div className="iconbox_content">
                    <h3>Website & Mobile Application Development</h3>
                    <p>
                      Our proficient development team is following international
                      coding standard, and implements complex business logic
                      through programming, and pursues quality Website
                      Development and Mobile Application Development procedures
                      to produce desired output on Web and Mobile platforms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="development_team">
                  <div className="iconbox">
                    <i className="fas fa-thumbtack mt-2"></i>
                  </div>
                  <div className="iconbox_content">
                    <h3>UI/UX Design</h3>
                    <p>
                      We shape your imagination from the scratch and give it a
                      contemporary, dazzling, and cordial look in the form of
                      website/mobile application. Our skilled designers would
                      love to catch your ideas and design them through elegance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="development_team">
                  <div className="iconbox">
                    <i className="fas fa-thumbtack mt-2"></i>
                  </div>
                  <div className="iconbox_content">
                    <h3>Custom Software Development</h3>
                    <p>
                      Get product personalization, security and scalability at
                      its best with custom software development services from RK
                      WebTechnology. Renowned for our J expertise and wide
                      domain experience, we collaborate to deliver futuristic
                      technology solutions that will become industry case
                      studies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="development_team">
                  <div className="iconbox">
                    <i className="fas fa-thumbtack mt-2"></i>
                  </div>
                  <div className="iconbox_content">
                    <h3>Security and Support</h3>
                    <p>
                      Our experienced developers will take care of the security
                      of your database, and our support staff members have a
                      wealth of knowledge handling data servers and websites.
                      They have experience with major brands and are eager to
                      liberate you from database administration problems.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="development_team">
                  <div className="iconbox">
                    <i className="fas fa-thumbtack mt-2"></i>
                  </div>
                  <div className="iconbox_content">
                    <h3>Time Delivery</h3>
                    <p>
                      With effective project management tools we achieve
                      timeliness in our work. Our repetitive client group is the
                      result of our flawless project delivery.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="development_team">
                  <div className="iconbox">
                    <i className="fas fa-thumbtack mt-2"></i>
                  </div>
                  <div className="iconbox_content">
                    <h3>High Efficiency</h3>
                    <p>
                      Our approach "What can we do better and different" makes
                      us more efficient, and help us to continuously improve
                      project development process. We are always keen to learn
                      and adapt new methods according to clients’ requirements.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div id="what_is_good" className="mb-5">
          <div className="row m0 mb-5">
            <div className="col-sm-12 col-md-4 col-lg-6 p-0">
              <div className="what_is_good_bg p-2">
                <h1>WHAT IS GOOD CUSTOMER SERVICE ?</h1>
              </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-6 intrinsic_planning_bg">
              <div className="intrinsic_planning">
                <div className="iconbox">
                  <i className="far fa-heart mt-1"></i>
                </div>
                <div className="iconbox_content">
                  <h3>A Promise for Quality</h3>
                  <div className="iconbox_step">
                    <i className="far fa-hand-point-right"></i>
                    <p>No Hidden Charges, No Fuss.</p>
                  </div>
                  <div className="iconbox_step">
                    <i className="far fa-hand-point-right"></i>
                    <p>
                      We Give Honest Rates And Upfront Estimates, With A Promise
                      For Quality. With Us, You Will Get What You Pay For.
                    </p>
                  </div>
                  <div className="iconbox_step">
                    <i className="far fa-hand-point-right"></i>
                    <p>
                      We believed and followed practice that no project can be
                      marked as accomplished until and unless our client is not
                      satisfied with the final result. Our developers’ team is
                      always ready to walk an extra mile to satisfy our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="intrinsic_planning">
                <div className="iconbox">
                  <i className="far fa-heart mt-1"></i>
                </div>
                <div className="iconbox_content">
                  <h3>Maintaining Transparency</h3>
                  <div className="iconbox_step">
                    <i className="far fa-hand-point-right"></i>
                    <p>We follow agile methodology.</p>
                  </div>
                  <div className="iconbox_step">
                    <i className="far fa-hand-point-right"></i>
                    <p>
                      We include our clients’ active participation in project
                      development evaluation process.
                    </p>
                  </div>
                  <div className="iconbox_step">
                    <i className="far fa-hand-point-right"></i>
                    <p>
                      We keep clients informed and ask their valuable inputs and
                      suggestions for better understanding in change of
                      requirements throughout development cycle, and improve in
                      our process to serve them better with satisfactory output.
                    </p>
                  </div>
                </div>
              </div>
              <div className="intrinsic_planning">
                <div className="iconbox">
                  <i className="far fa-heart mt-1"></i>
                </div>
                <div className="iconbox_content">
                  <h3>Security and Support</h3>
                  <div className="iconbox_step">
                    <i className="far fa-hand-point-right"></i>
                    <p>
                      <q>Information is the oil of the 21st century.</q>
                      <strong>- Peter Sondergaard </strong>
                    </p>
                  </div>
                  <div className="iconbox_step">
                    <i className="far fa-hand-point-right"></i>
                    <p>
                      Security of information/data in business is the biggest
                      concern for any business owner.
                    </p>
                  </div>
                  <div className="iconbox_step">
                    <i className="far fa-hand-point-right"></i>
                    <p>
                      Our certified database security and support specialists
                      are having vast experience in handling data servers and
                      sites. They have been working with big brands and keen to
                      set you free from database management issues.
                    </p>
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

export default AboutUs;
