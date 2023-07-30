import React from "react";

const UiUxDesign = () => {
  return (
    <>
      {/* <!-- Start Page Banner --> */}
      <PageBanner
        mainTitle="UI/UX Design"
        firstText="Home"
        firstLink="/"
        secondText="UI/UX Design"
        // thirdText="Mobile Application Development"
      />
      {/* <!-- End Page Banner -->

<!-- Start UI/UX Design --> */}
      <section>
        <div id="ui_ux_design">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 heading">
                <h1>
                  UI/UX <span>Design</span>
                </h1>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="ui_ux_design_content">
                  <label class="text-left">
                    <q>Good design is a Good business.</q> -{" "}
                    <strong>Thomas Watson Jr.</strong>
                  </label>
                  <p>
                    At RK Webtechnology we shape your imagination and bring life
                    to your thoughts, ideas and dreams by creating adorable and
                    innovative designs.
                  </p>
                  <p>
                    We believe that, first impression is the last impression for
                    any business in digital world.
                  </p>
                  <p>
                    Our creative and skilled designers would love to be all ears
                    to listen and get exactly that picture you want, and design
                    it from scratch for you by producing a stunning result.
                  </p>
                  <p>
                    We here at RK Webtechnology ensure that our clients'
                    business leaves remarkable impression to their destined
                    audience through elegant designs.
                  </p>
                  <p>
                    Customer Satisfaction is our main goal and we try our best
                    to fulfill that promise!
                  </p>
                  <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 services_step">
                      <h6>Services we offer in UI/UX Designing: </h6>
                      <ul>
                        <li>UI/UX Design</li>
                        <li>Wireframe</li>
                        <li>User Flow / Sitemap</li>
                        <li>Website Design</li>
                        <li>Mobile Application Design (iOS, Android)</li>
                        <li>Branding Design</li>
                        <li>Logo Design</li>
                      </ul>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 services_step">
                      <h6>Our Designing Tools: </h6>
                      <ul>
                        <li>Figma</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe illustrator</li>
                        <li>Adobe After Effects</li>
                      </ul>
                    </div>
                  </div>
                  <div class="ux_what_do">
                    <h6>What do we do?</h6>
                    <i class="fas fa-check"></i>
                    <p>
                      UX: User research and usability tests; Navigation map,
                      information architecture, wireframes and prototype
                    </p>
                    <i class="fas fa-check"></i>
                    <p>
                      Graphic: Logo design, visual identity and graphic
                      materials (business card, flyer, menus, etc.)
                    </p>
                    <i class="fas fa-check"></i>
                    <p>
                      Web banners: animation of advertising banners for the web
                    </p>
                    <i class="fas fa-check"></i>
                    <p>Website design, blog and landing page design</p>
                    <i class="fas fa-check"></i>
                    <p>Social media: creating artwork for posts etc.</p>
                    <i class="fas fa-check"></i>
                    <p>
                      Video and animation: simple video editing, logo animations
                      etc.
                    </p>
                  </div>
                  <p>
                    <a href="inquiry.php" title="UI/UX Design">
                      Hire Our Web Designers Now!
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="ui_ux_services">
              <div class="row justify-content-center">
                <div class="col-sm-12 col-md-6 col-lg-4">
                  <div class="services_box">
                    <img
                      class="img-fluid"
                      src="images/ui-ux-design/graphics-design.png"
                      alt="UI/UX Design"
                      title="Graphics Designs"
                    />
                    <h5>Graphics Design</h5>
                    <p>
                      We are into remarkable and best in class Graphics Design
                      services that provide best satisfaction to our clients.
                    </p>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                  <div class="services_box">
                    <img
                      class="img-fluid"
                      src="images/ui-ux-design/webdesign.png"
                      alt="Website Design"
                      title="Website Design"
                    />
                    <h5>Website Design</h5>
                    <p>
                      We are a Website Design Company from around 5 years and
                      have earned demonstrated reputation from our clients.
                    </p>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                  <div class="services_box">
                    <img
                      class="img-fluid"
                      src="images/ui-ux-design/mobile_app.png"
                      alt="Mobile Application Design"
                      title="Mobile Application Design"
                    />
                    <h5>Mobile Application Design</h5>
                    <p>
                      We earned respects in Mobile Application Design from our
                      happily satisfied clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="project_box">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="project_box_content">
                  <h1>Want to start a project?</h1>
                  <div class="text-center">
                    <button
                      type="button"
                      class="btn btn_view_port"
                      onclick="window.location.href='portfolio.php?#design'"
                    >
                      View Portfolio
                    </button>
                    <button
                      type="button"
                      class="btn btn_request"
                      onclick="window.location.href='inquiry.php'"
                    >
                      Request a Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End UI/UX Design --> */}
    </>
  );
};

export default UiUxDesign;
{
  /* <link rel="stylesheet" href="css/ui-ux-design.css">


<?php require('footer.php'); ?> */
}
