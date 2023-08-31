import React, { useState } from "react";
import "./header.css";
import logo_header from "../../assets/images/logo_header.png";
import logo_mobile from "../../assets/images/logo_icon.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const handleCompanyDropDown = () => {
    setCompanyDropdown(!companyDropdown);
  };
  const handleServiceDropDown = () => {
    setServiceDropdown(!serviceDropdown);
  };
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {/* <div id="loader-wrapper" className="loader-wrapper">
        <div className="load_img">
          <img
            src={loader_gif}
            alt="RK WebTechnology"
            title="RK WebTechnology"
          />
        </div>
      </div> */}

      <header>
        <div id="navigation">
          <nav className="navbar navbar-expand-xl sticky">
            <div className="container">
              <Link className="logo navbar-brand" to="/">
                <div className="header_logo">
                  <img
                    src={logo_header}
                    alt="RK WebTechnology"
                    title="RK WebTechnology"
                    className="img-fluid"
                  />
                </div>
                <div className="logo_icon">
                  <img
                    src={logo_mobile}
                    alt="RK WebTechnology"
                    title="RK WebTechnology"
                    className="img-fluid"
                  />
                </div>
              </Link>
              <div className="hide_estimation estimation">
                <Link to="/inquiry">Inquiry</Link>
              </div>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={handleScroll}>
                      Home
                    </Link>
                  </li>
                  <li
                    className={`nav-item dropdown ${
                      companyDropdown ? "show" : ""
                    }`}
                  >
                    <Link
                      className={`nav-link dropdown-toggle coll ${
                        companyDropdown ? "mixitup-control-active" : ""
                      }`}
                      // href="#"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={handleCompanyDropDown}
                    >
                      Company<i className="fas fa-angle-down"></i>
                    </Link>
                    <ul
                      className={`dropdown-menu left_56 ${
                        companyDropdown ? "show" : ""
                      }`}
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item"
                          to="/about-us"
                          onClick={handleScroll}
                        >
                          About
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item"
                          to="/blog"
                          onClick={handleScroll}
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`nav-item dropdown ${
                      serviceDropdown ? "show" : ""
                    }`}
                  >
                    <Link
                      className={`nav-link dropdown-toggle ${
                        serviceDropdown ? "mixitup-control-active" : ""
                      }`}
                      // href="#"
                      id="dropdownMenuButton1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      crossOrigin="anonymous"
                      onClick={handleServiceDropDown}
                    >
                      Services<i className="fas fa-angle-down"></i>
                    </Link>
                    <ul
                      className={`dropdown-menu left_56 ${
                        serviceDropdown ? "show" : ""
                      }`}
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item"
                          to="/services/custom-software-development"
                          onClick={handleScroll}
                        >
                          Custom Software Development
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item"
                          to="/services/web-application-development"
                          onClick={handleScroll}
                        >
                          Web Application Development
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item"
                          to="/services/mobile-application-development"
                          onClick={handleScroll}
                        >
                          Mobile Application Development
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item"
                          to="/services/IT-consulting"
                          onClick={handleScroll}
                        >
                          IT Consulting
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item"
                          to="/services/sap-services"
                        >
                          SAP Services
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/hire-developer"
                      onClick={handleScroll}
                    >
                      Hire Developers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/portfolio"
                      onClick={handleScroll}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/contact-us"
                      onClick={handleScroll}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="show_estimation estimation">
                <Link to="/inquiry" onClick={handleScroll}>
                  Inquiry
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
{
  /* // <?php require('metaHelper.php') ?>
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta http-equiv="content-Type" content="text/html; charset=utf-8"/>
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <meta name="category" content="Software Development Company, IT Service & Support"/>
//     <meta name="abstract" content="Web and Mobile Application Development Company in Rajkot India" />
//     <meta name="Author" content="RK Web Technology" />
//     <meta name='language' content='English' />
//     <meta name="copyright" content="RK WebTechnology" />
//     <meta name="Owner" content="RK WebTechnology" />
//     <meta name="classification" content="Web and Mobile Application Development" />
//     <meta name="distribution" content="India"/>
//     <meta name="rating" content="General"/>
//     <meta name="subject" content="<?php echo $subject; ?>"/>
//     <meta name="author" content="Rohit Kalavadiya">
//     <meta name="description" content="<?php echo $description; ?>" />
//     <meta name="keywords" content="<?php echo $keywords; ?>" />
//     <link rel="canonical" to="https://www.rkwebtechnology.com/<?php echo $url; ?>" />
//     <meta property="og:title" content="<?php echo $title; ?>" />
//     <meta property="og:description" content="<?php echo $description; ?>" />
//     <meta property="og:locale" content="en_IN" />
//     <meta property="og:type" content="website" />
//     <meta property="og:image:width" content="300" />
//     <meta property="og:image:height" content="150" />
//     <meta property="og:image" content="images/new-logo-e1479128545784.png" />
//     <meta property="og:url" content="https://www.rkwebtechnology.com/<?php echo $url; ?>" />
//     <meta property="og:site_name" content="RK WebTechnology" />
//     <meta property="og:email" content="info@rkwebtechnology.com"/>
//     <meta property="og:phone_number" content="9408393081" />
//     <meta property="og:latitude" content="22.295077" />
//     <meta property="og:longitude" content="70.758960" />
//     <meta property="og:street-address" content="413, Anmol Complex,Opp. Raj Place , Sadhu vasvani road, Rajkot , Gujarat - 360005, India." />
//     <meta property="og:locality" content="Rajkot" />
//     <meta property="og:region" content="Gujarat" />
//     <meta property="og:postal-code" content="360005" />
//     <meta property="og:country-name" content="India" />
//     <meta property="twitter:card" content="summary" />
//     <meta property="twitter:title" content="<?php echo $title;?>" />
//     <meta property="twitter:site" content="@rwebtechnology" />
//     <meta property="twitter:description" content="<?php echo $description; ?>" />
//     <meta property="twitter:image" content="images/new-logo-e1479128545784.png"/>
//     <meta name="twitter:image:alt" content="RKWebTechnology" />
//     <meta property="twitter:creator" content="@rwebtechnology"/>
//     <title> <?php echo $title; ?></title>
//     <!-- CSS -->
//     <!-- Montserrat Preload -->
//     <!-- <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2" as="font" crossorigin="anonymous"> -->
//     <!-- <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_bZF3gnD_g.woff2" as="font" crossorigin="anonymous"> -->
//     <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_ZpC3gnD_g.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2" as="font" crossorigin="anonymous">
//     <!-- <link rel="preload" to="./css/montserrat/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2" as="font" crossorigin="anonymous"> -->
//     <!-- <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_ZpC3gTD_u50.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_ZpC3g3D_u50.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_ZpC3gbD_u50.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_ZpC3gfD_u50.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_bZF3gTD_u50.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_bZF3g3D_u50.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_bZF3gbD_u50.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_bZF3gfD_u50.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_dJE3gTD_u50.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_dJE3g3D_u50.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_dJE3gbD_u50.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/montserrat/JTURjIg1_i6t8kCHKm45_dJE3gfD_u50.woff2" as="font" crossorigin="anonymous"> -->
//     <!-- Font Awesome Preload -->
//     <link rel="preload" to="./css/font-awesome/fa-brands-400.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/font-awesome/fa-brands-400.svg" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/font-awesome/fa-solid-900.svg" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/font-awesome/fa-solid-900.woff2" as="font" crossorigin="anonymous">
//     <!-- <link rel="preload" to="./css/font-awesome/fa-brands-400.eot" crossorigin="anonymous">
//     <link rel="preload" to="./css/font-awesome/fa-brands-400.eot?#iefix" crossorigin="anonymous"> -->
//     <!-- <link rel="preload" to="./css/font-awesome/fa-brands-400.woff" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/font-awesome/fa-brands-400.ttf" as="font" crossorigin="anonymous"> -->
//     <!-- <link rel="preload" to="./css/font-awesome/fa-solid-900.eot" crossorigin="anonymous">
//     <link rel="preload" to="./css/font-awesome/fa-solid-900.eot?#iefix" crossorigin="anonymous">
//     <link rel="preload" to="./css/font-awesome/fa-solid-900.woff" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/font-awesome/fa-solid-900.ttf" as="font" crossorigin="anonymous"> -->
//     <!-- Open Sans Preload -->
//     <link rel="preload" to="./css/open-sans/mem8YaGs126MiZpBA-UFVZ0b.woff2" as="font" crossorigin="anonymous">
//     <!-- <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2" as="font" crossorigin="anonymous"> -->
//     <!-- <link rel="preload" to="./css/open-sans/mem8YaGs126MiZpBA-UFWJ0bbck.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem8YaGs126MiZpBA-UFUZ0bbck.woff2" as="font" crossorigin="anonymous"> -->
//     <!-- <link rel="preload" to="./css/open-sans/mem8YaGs126MiZpBA-UFWZ0bbck.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem8YaGs126MiZpBA-UFVp0bbck.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem8YaGs126MiZpBA-UFWp0bbck.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem8YaGs126MiZpBA-UFW50bbck.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UNirkOX-hpOqc.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UNirkOVuhpOqc.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UNirkOXuhpOqc.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UNirkOUehpOqc.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UNirkOXehpOqc.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UNirkOXOhpOqc.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UNirkOUuhp.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UN7rgOX-hpOqc.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UN7rgOVuhpOqc.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UN7rgOXuhpOqc.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UN7rgOUehpOqc.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UN7rgOXehpOqc.woff2" as="font" crossorigin="anonymous">
//     <link rel="preload" to="./css/open-sans/mem5YaGs126MiZpBA-UN7rgOXOhpOqc.woff2" as="font" crossorigin="anonymous"> -->
//     <link rel="stylesheet" to="css/animate.min.css" defer>
//     <link rel="stylesheet" to="css/header.css" defer>
//     <link rel="stylesheet" to="css/font-awesome/all.min.css?display=swap" defer>
//     <link rel="stylesheet" to="css/open-sans/open-sans.css?display=optional" defer>
//     <link rel="stylesheet" to="css/montserrat/montserrat.css?display=optional" defer>
//     <link rel="stylesheet" to="css/bootstrap.min.css" defer>
//     <!-- Favicon Icon -->
//     <link rel="shortcut icon" to="images/favicon.png">
//     <!-- JS -->
//     <script rel="preload" as="sript" src="js/jquery.min.js"></script>
//     <!-- Global site tag (gtag.js) - Google Analytics -->
//     <link rel="preconnect" src="https://www.googletagmanager.com/gtag/js?id=UA-166796776-1"></link>
//     <script>
//         window.dataLayer = window.dataLayer || [];
//         function gtag(){dataLayer.push(arguments);}
//         gtag('js', new Date());

//         gtag('config', 'UA-166796776-1');
//     </script>
//     <!-- PWA Settings -->
//     <link rel="manifest" to="manifest.json">
//     <meta name="theme-color" content="#002a54">
//     <!-- Add to home screen for Safari on iOS -->
//     <meta name="apple-mobile-web-app-capable" content="yes">
//     <meta name="apple-mobile-web-app-status-bar-style" content="black">
//     <meta name="apple-mobile-web-app-title" content="complete-guide">
//     <link rel="apple-touch-icon" to="./images/icons/app-icon-192x192.png">
//     <!-- Add to home screen for Windows -->
//     <meta name="msapplication-TileImage" content="./images/icons/app-icon-144x144.png">
//     <meta name="msapplication-TileColor" content="#002a54">
// </head> */
}
