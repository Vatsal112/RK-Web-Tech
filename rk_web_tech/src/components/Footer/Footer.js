import React from "react";
import "./footer.css";
import logo_header from "../../assets/images/logo_header.png";
import { Link } from "react-router-dom";
import FooterGetQuote from "../FooterGetQuote/FooterGetQuote";

const Footer = () => {
  return (
    <>
      <footer className="postion-relative">
        <div className="container position-relative">
          <FooterGetQuote />
          <div className="row footer_bg justify-content-between">
            <div className="col-sm-12 col-md-6 col-lg-4 pr-20">
              <img
                src={logo_header}
                alt="RK WebTechnology"
                title="RK WebTechnology"
              />
              <p className="mt-3">
                RK WebTechnology is the leading Software Development Company in
                Rajkot, India. We are elite in Website Development, Mobile
                Application Development, Database Management Security and
                Support, UI/UX Design, and Digital Marketing.
              </p>
              <div className="other-links mt-2">
                <Link to="/privacy-policy" className="text-white">
                  <i className="fas fa-angle-double-right mr-1" />
                  Privacy Policy
                </Link>
                <Link to="/brochure" className="ml-2 text-white">
                  <i className="fas fa-angle-double-right mr-1" />
                  Brochure
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 pl-30">
              <h5>What we offer</h5>
              <div className="quick_links">
                <ul>
                  <li>
                    <a rel="noopener" href="ui-ux-design.php">
                      <i className="fas fa-angle-double-right"></i>UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a rel="noopener" href="website-development.php">
                      <i className="fas fa-angle-double-right"></i>Website
                      Development
                    </a>
                  </li>
                  <li>
                    <a rel="noopener" href="mobile-application-development.php">
                      <i className="fas fa-angle-double-right"></i>Mobile
                      Application Development
                    </a>
                  </li>
                  <li>
                    <a rel="noopener" href="database-management.php">
                      <i className="fas fa-angle-double-right"></i>Database
                      Management
                    </a>
                  </li>
                  <li>
                    <a rel="noopener" href="digital-marketing.php">
                      <i className="fas fa-angle-double-right"></i>Digital
                      Marketing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 pl-45">
              <h5>How to reach?</h5>
              {/* <!-- <div className="address_icon">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>413, Anmol Complex,</p> 
                    <p>Opp. Raj Palace, Sadhu Vasvani</p> 
                    <p>Road, Rajkot, Gujarat - 360005</p>
                </div> -->
                <!-- <div className="address_icon">
                    <i className="fas fa-mobile-alt"></i>
                    <p>+91 94083 93081</p>
                </div> --> */}

              <div className="address_icon">
                <i className="fas fa-envelope"></i>
                <p className="ml-4">info@rkwebtechnology.com</p>
              </div>
            </div>
          </div>
          <div className="row gy-4  flex-wrap mt-3 mb-5 align-items-center">
            <div className="col-6 col-md-auto mr-md-4 pr-md-4 footer-review-all pipe-dark">
              <a
                href="https://www.google.com/search?q=bacancytechnology&oq=bacancytechnology&aqs=chrome..69i57j69i60l3j0l2.7015j1j4&sourceid=chrome&ie=UTF-8#lrd=0x395e9b596be1e50d:0x9b14edd4c5fa8634,1,,,"
                target="_blank"
                rel="nofollow"
              >
                <div className="d-flex align-items-center">
                  <picture>
                    <source
                      srcset="https://www.bacancytechnology.com/main-boot-5/images/star.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="https://www.bacancytechnology.com/main-boot-5/images/star.png"
                      type="image/png"
                    />
                    <img
                      data-src="https://www.bacancytechnology.com/main-boot-5/images/xstar.png.pagespeed.ic.Dy5EPNpEO0.webp"
                      src="https://www.bacancytechnology.com/main-boot-5/images/xstar.png.pagespeed.ic.Dy5EPNpEO0.webp"
                      alt="Google"
                      title="Google"
                      className="lazy  align-top"
                    />
                  </picture>
                  <span className="text-white font-bold ml-2">4.6</span>
                </div>
                <picture>
                  <source
                    srcset="https://www.bacancytechnology.com/main-boot-5/images/google-2.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="https://www.bacancytechnology.com/main-boot-5/images/google-2.png"
                    type="image/png"
                  />
                  <img
                    data-src="https://www.bacancytechnology.com/main-boot-5/images/xgoogle-2.png.pagespeed.ic.qQi5DPZI_v.webp"
                    src="https://www.bacancytechnology.com/main-boot-5/images/xgoogle-2.png.pagespeed.ic.qQi5DPZI_v.webp"
                    alt="Google"
                    title="Google"
                    className="lazy img-item d-block mt-2"
                  />
                </picture>
              </a>
            </div>
            {/* <div className="col-6 col-md-auto mr-md-4 pr-md-4 footer-review-all pipe-dark">
              <a
                href="https://www.glassdoor.co.in/Reviews/Bacancy-Reviews-E755927.htm"
                target="_blank"
                rel="nofollow"
              >
                <div className="d-flex align-items-center">
                  <picture>
                    <source
                      srcset="https://www.bacancytechnology.com/main-boot-5/images/star.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="https://www.bacancytechnology.com/main-boot-5/images/star.png"
                      type="image/png"
                    />
                    <img
                      data-src="https://www.bacancytechnology.com/main-boot-5/images/xstar.png.pagespeed.ic.Dy5EPNpEO0.webp"
                      src="https://www.bacancytechnology.com/main-boot-5/images/xstar.png.pagespeed.ic.Dy5EPNpEO0.webp"
                      alt="Google"
                      title="Google"
                      className="lazy  align-top"
                    />
                  </picture>
                  <span className="text-white font-bold ml-2">4.5</span>
                </div>
                <picture>
                  <source
                    srcset="https://www.bacancytechnology.com/main-boot-5/images/glassdoor.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="https://www.bacancytechnology.com/main-boot-5/images/glassdoor.png"
                    type="image/png"
                  />
                  <img
                    data-src="https://www.bacancytechnology.com/main-boot-5/images/xglassdoor.png.pagespeed.ic.QuaaY7L9Ys.webp"
                    src="https://www.bacancytechnology.com/main-boot-5/images/xglassdoor.png.pagespeed.ic.QuaaY7L9Ys.webp"
                    alt="glassdoor"
                    title="glassdoor"
                    className="lazy img-item d-block mt-2"
                  />
                </picture>
              </a>
            </div> */}
            <div className="col-6 col-md-auto mr-md-4 pr-md-4 footer-review-all pipe-dark">
              <a
                href="https://clutch.co/profile/bacancy"
                target="_blank"
                rel="nofollow"
              >
                <div className="d-flex align-items-center">
                  <picture>
                    <source
                      srcset="https://www.bacancytechnology.com/main-boot-5/images/star.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="https://www.bacancytechnology.com/main-boot-5/images/star.png"
                      type="image/png"
                    />
                    <img
                      data-src="https://www.bacancytechnology.com/main-boot-5/images/xstar.png.pagespeed.ic.Dy5EPNpEO0.webp"
                      src="https://www.bacancytechnology.com/main-boot-5/images/xstar.png.pagespeed.ic.Dy5EPNpEO0.webp"
                      alt="Google"
                      title="Google"
                      className="lazy  align-top"
                    />
                  </picture>
                  <span className="text-white font-bold ml-2">4.8</span>
                </div>
                <picture>
                  <source
                    srcset="https://www.bacancytechnology.com/main-boot-5/images/clutch.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="https://www.bacancytechnology.com/main-boot-5/images/clutch.png"
                    type="image/png"
                  />
                  <img
                    data-src="https://www.bacancytechnology.com/main-boot-5/images/xclutch.png.pagespeed.ic.4gGQfckDS0.webp"
                    src="https://www.bacancytechnology.com/main-boot-5/images/xclutch.png.pagespeed.ic.4gGQfckDS0.webp"
                    alt="clutch"
                    title="clutch"
                    className="lazy img-item d-block mt-2"
                  />
                </picture>
              </a>
            </div>
            {/* <div className="col-6 col-md-auto mr-md-4 pr-md-4 footer-review-all pipe-dark">
              <a
                href="https://www.goodfirms.co/company/bacancy-technology"
                target="_blank"
                rel="nofollow"
              >
                <div className="d-flex align-items-center">
                  <picture>
                    <source
                      srcset="https://www.bacancytechnology.com/main-boot-5/images/star.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="https://www.bacancytechnology.com/main-boot-5/images/star.png"
                      type="image/png"
                    />
                    <img
                      data-src="https://www.bacancytechnology.com/main-boot-5/images/xstar.png.pagespeed.ic.Dy5EPNpEO0.webp"
                      src="https://www.bacancytechnology.com/main-boot-5/images/xstar.png.pagespeed.ic.Dy5EPNpEO0.webp"
                      alt="Google"
                      title="Google"
                      className="lazy  align-top"
                    />
                  </picture>
                  <span className="text-white font-bold ml-2">4.5</span>
                </div>
                <picture>
                  <source
                    srcset="https://www.bacancytechnology.com/main-boot-5/images/goodfirms.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="https://www.bacancytechnology.com/main-boot-5/images/goodfirms.png"
                    type="image/png"
                  />
                  <img
                    data-src="https://www.bacancytechnology.com/main-boot-5/images/xgoodfirms.png.pagespeed.ic.-13GjcQeC6.webp"
                    src="https://www.bacancytechnology.com/main-boot-5/images/xgoodfirms.png.pagespeed.ic.-13GjcQeC6.webp"
                    alt="goodfirms"
                    title="goodfirms"
                    className="lazy img-item d-block mt-2"
                  />
                </picture>
              </a>
            </div> */}
            {/* <div className="col-6 col-md-auto footer-review-all">
              <picture>
                <source
                  srcset="https://www.bacancytechnology.com/main-boot-5/images/iso.webp"
                  type="image/webp"
                />
                <source
                  srcset="https://www.bacancytechnology.com/main-boot-5/images/iso.png"
                  type="image/png"
                />
                <img
                  data-src="https://www.bacancytechnology.com/main-boot-5/images/xiso.png.pagespeed.ic.Awzkom9x3s.webp"
                  src="https://www.bacancytechnology.com/main-boot-5/images/xiso.png.pagespeed.ic.Awzkom9x3s.webp"
                  alt="iso"
                  title="iso"
                  className="lazy img-item d-block mt-2"
                />
              </picture>
            </div> */}
          </div>
          <div className="row border-top">
            <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
              <div className="copyright">
                <p>
                  Copyright © 2018 - 2021 <span>RK WebTechnology</span> All
                  Right Reserved.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 align-self-center content-center">
              <div className="footer-social-icons">
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://www.facebook.com/rkwebtechnology/"
                      target="_blank"
                      title="Facebook"
                      rel="noopener"
                      className="social-icon"
                    >
                      {" "}
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/rk-webtechnology/"
                      target="_blank"
                      title="Linkedin"
                      rel="noopener"
                      className="social-icon"
                    >
                      {" "}
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/rwebtechnology"
                      target="_blank"
                      title="Twitter"
                      rel="noopener"
                      className="social-icon"
                    >
                      {" "}
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a
                      href="skype:live:rohit.patel_20?chat"
                      target="_blank"
                      title="Skype"
                      rel="noopener"
                      className="social-icon"
                    >
                      {" "}
                      <i className="fab fa-skype"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/rk_webtechnology"
                      target="_blank"
                      title="Behance"
                      rel="noopener"
                      className="social-icon"
                    >
                      {" "}
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <?php if($url != 'contact-us.php' && $url != 'inquiry.php'){ ?> */}
        <div className="ask_support animate__animated animate__fadeInUp hide">
          <div className="row">
            <div className="support_header">
              <p>
                Hi 👋! Please fill out the form below for any help required!.
              </p>
            </div>
            <div className="col-md-12">
              <form name="contactForm" method="post" role="form" id="contactUS">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your Name *"
                      />
                      <div className="error" id="nameErr"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email *"
                      />
                      <div className="error" id="emailErr"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject *"
                      />
                      <div className="error" id="subjectErr"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      placeholder="Your Message *"
                      rows="3"
                    ></textarea>
                    <div className="error" id="messageErr"></div>
                  </div>
                  <div className="col-md-12 mt-3 mb-2">
                    <div className="g-recaptcha" id="generate_captcha"></div>
                    <input type="hidden" name="_ip" id="_ip" />
                    <input type="hidden" name="_recaptcha" id="_recaptcha" />
                    <input
                      type="hidden"
                      name="_validate"
                      id="_validate"
                      value="false"
                    />
                    <div className="error" id="captchaErr"></div>
                  </div>
                  <div className="col-md-12 mt-2">
                    <button
                      type="button"
                      name="submit"
                      id="submit"
                      className="btn submit_btn"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
