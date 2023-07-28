export const particle = () => {
  return `$(document).ready(function() {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .5,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 5,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 40,
                    size_min: .1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#ffffff",
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 6,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "repulse"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0,
        config_demo: {
            hide_card: !1,
            background_color: "#b61924",
            background_image: "",
            background_position: "50% 50%",
            background_repeat: "no-repeat",
            background_size: "cover"
        },
    })})`;
};

export const owlCodeHowItsWorks = () => {
  return `$("#how_it_works .owl-carousel").owlCarousel({
    loop: !0,
    items: 1,
    margin: 15,
    mouseDrag: !1,
    autoplayTimeout: 1e3,
    autoplay: !0,
    smartSpeed: 1e3,
  });`;
};

export const owlCodeReview = () => {
  return `$("#reviews .owl-carousel").owlCarousel({
        loop: !0,
        margin: 10,
        nav: !0,
        navText: [
          "<i class='fas fa-chevron-left'></i>",
          "<i class='fas fa-chevron-right'></i>",
        ],
        autoplay: !1,
        autoplayHoverPause: !0,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });`;
};

export const owlCodeDevelopment = () => {
  return `$("#about-us .owl-carousel").owlCarousel({
        loop: !0,
        margin: 10,
        nav: !0,
        navText: [
          "<i class='fas fa-chevron-left'></i>",
          "<i class='fas fa-chevron-right'></i>",
        ],
        autoplay: !1,
        autoplayHoverPause: !0,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });`;
};

export const swiperSlider = () => {
  return `        $(document).ready(function() {
        var swiper9 = new Swiper(".our-key-features", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    },
    autoplay: {
        delay: 2500,
    }
});
});`;
};

export const swiperSliderPartnership = () => {
  return `$(document).ready(function() {
    var swiper7 = new Swiper(".process-we-follow-mob,.services-we-offer-mob,.partnership-models-mob,.industries-we-serve-mob,.case-studies-mob", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3300,
            disableOnInteraction: false
        },
        pagination: {
            el: ".mob-clutch-swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        }
    });})`;
};

export const swiperSliderTestimonialSAP = () => {
  console.log("swiperSlider");
  return `var swiper = new Swiper('.testi-slider', { loop: true, spaceBetween: 10, autoplay:true, nav:true, speed:3000, autoplay:true, pagination: { el: '.swiper-pagination', clickable: true,}, breakpoints: { 1200: { slidesPerView: 1 }, 992: { slidesPerView: 1 }, 768: { slidesPerView: 1 }, 576: { slidesPerView: 1 }, 320: { slidesPerView: 1 } } })`;
};

export const scriptMain = () => {
  return `function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn")
      ? (document.getElementById("myBtn").style.display = "block")
      : "";
  } else {
    document.getElementById("myBtn")
      ? (document.getElementById("myBtn").style.display = "none")
      : "";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function addScript(filename) {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = filename;
  script.type = "text/javascript";
  script.id = "particles";
  head.append(script);
}

function removeScript(filename) {
  $("#particles").attr("src", "");
}
var sliderBG = document.getElementsByClassName("bg-img-slider")[0];
var navLink = document.getElementsByClassName("dropdown-toggle")[0];
//images/reviews/review3.webp
$(document).ready(function (e) {
  $("#navbarCollapse").scrollspy({ offset: 70 });
  if ($(".sticky").hasClass("stickyadd")) {
    $(".angle").css("color", "#fff");
  } else {
    $(".angle").css("color", "#000");
  }
  $('[data-toggle="tooltip"]').tooltip();
  let element = $(e);
  let width = $(window).width();

  // Include script file
  // width > 992 ? addScript("js/particles.js") : removeScript("js/particles.js");
  window.addEventListener("scroll", scrollFunction, { passive: true });
  //for portfolio details page
  let pImage1 = document.getElementsByClassName("ui_detail")[0];
  let pImage2 = document.getElementsByClassName("web_detail")[0];
  let pImage3 = document.getElementsByClassName("app_detail")[0];
  let p1src = $(pImage1).attr("src");
  let p2src = $(pImage2).attr("src");
  let p3src = $(pImage3).attr("src");
  $(document).on("click", ".navbar-collapse.show", function (t) {
    $(t.target).is("a") && $(this).collapse("hide").fade(500);
  });

  document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == "complete") {
      document.getElementById("interactive");
      // document.getElementById("loader-wrapper").style.visibility = "hidden";
    }
  };
  $(navLink).click(function (e) {
    e.preventDefault();
    if (width > 991) {
      window.location.href = "services.php";
    } else {
      return;
    }
  });

  
  if (width < 768) {
    $(sliderBG).css(
      "background-image",
      "url(images/home_slider/slider_bg_mobile.webp)"
    );
    

    //for portfolio details screen
    let mobSrc1 = p1src ? p1src.split(".")[0] + "-mobile.webp" : "";
    let mobSrc2 = p2src ? p2src.split(".")[0] + "-mobile.webp" : "";
    let mobSrc3 = p3src ? p3src.split(".")[0] + "-mobile.webp" : "";
    $(pImage1).attr("src", mobSrc1);
    $(pImage1).addClass("mob");
    $(pImage2).attr("src", mobSrc2);
    $(pImage2).addClass("mob");
    $(pImage3).attr("src", mobSrc3);
    $(pImage3).addClass("mob");
  } else {
    $(sliderBG).css(
      "background-image",
      "url(images/home_slider/slider_bg.webp)"
    );
    

    //for portfolio details screen
    let webSrc1,
      webSrc2,
      webSrc3 = "";
    webSrc1 = p1src ? p1src.replace("-mobile.webp", ".webp") : "";
    webSrc2 = p2src ? p2src.replace("-mobile.webp", ".webp") : "";
    webSrc3 = p3src ? p3src.replace("-mobile.webp", ".webp") : "";
    $(pImage1).attr("src", webSrc1);
    $(pImage1).removeClass("mob");
    $(pImage2).attr("src", webSrc2);
    $(pImage2).removeClass("mob");
    $(pImage3).attr("src", webSrc3);
    $(pImage3).removeClass("mob");
  }
  $(window).on("scroll", { passive: true }, function () {
    $(window).scrollTop() >= 50
      ? $(".sticky").addClass("stickyadd")
      : $(".sticky").removeClass("stickyadd");
    if ($(".sticky").hasClass("stickyadd")) {
      $(".angle").css("color", "#fff");
    } else {
      $(".angle").css("color", "#000");
    }
  });

  $(window).on("resize", { passive: true }, function () {
    width = $(window).width();
    if (width < 400) {
      $("#generate_captcha").css("maxWidth", "280px !important");
      $("#generate_captcha").css("width", "280px !important");
      $("#generate_captcha").css("overflow", "hidden !important");
      $(".rc-anchor-normal").css("width", "100% !important");
      $(".rc-anchor-normal .rc-anchor-checkbox-label").css(
        "width",
        "100% !important"
      );
      $(".rc-anchor-normal .rc-anchor-content").css("width", "60% !important");
      $(".rc-anchor-normal-footer").css("width", "40% !important");
    }

    if (width < 768) {
      //home
      $(sliderBG).css(
        "background-image",
        "url(images/home_slider/slider_bg_mobile.webp)"
      );
     
      //for portfolio details screen
      let mobSrc1 = p1src ? p1src.split(".")[0] + "-mobile.webp" : "";
      let mobSrc2 = p2src ? p2src.split(".")[0] + "-mobile.webp" : "";
      let mobSrc3 = p3src ? p3src.split(".")[0] + "-mobile.webp" : "";
      $(pImage1).attr("src", mobSrc1);
      $(pImage1).addClass("mob");
      $(pImage2).attr("src", mobSrc2);
      $(pImage2).addClass("mob");
      $(pImage3).attr("src", mobSrc3);
      $(pImage3).addClass("mob");
    } else {
      //home
      $(sliderBG).css(
        "background-image",
        "url(images/home_slider/slider_bg.webp)"
      );
     

      //for portfolio details screen
      let webSrc1,
        webSrc2,
        webSrc3 = "";
      webSrc1 = p1src ? p1src.replace("-mobile.webp", ".webp") : "";
      webSrc2 = p2src ? p2src.replace("-mobile.webp", ".webp") : "";
      webSrc3 = p3src ? p3src.replace("-mobile.webp", ".webp") : "";
      $(pImage1).attr("src", webSrc1);
      $(pImage1).removeClass("mob");
      $(pImage2).attr("src", webSrc2);
      $(pImage2).removeClass("mob");
      $(pImage3).attr("src", webSrc3);
      $(pImage3).removeClass("mob");
    }
    $(navLink).click(function (e) {
      e.preventDefault();
      if (width > 991) {
        window.location.href = "services.php";
      } else {
        return;
      }
    });
  });

  const o = Boolean(
    "localhost" === window.location.hostname ||
      "[::1]" === window.location.hostname ||
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
  window.addEventListener("load", function () {
    "serviceWorker" in navigator &&
      ("https:" === window.location.protocol || o) &&
      navigator.serviceWorker
        .register("sw.js")
        .then(function (o) {
          o.onupdatefound = function () {
            if (navigator.serviceWorker.controller) {
              const n = o.installing;
              n.onstatechange = function () {
                switch (n.state) {
                  case "installed":
                    break;
                  case "redundant":
                    throw new Error(
                      "The installing service worker became redundant."
                    );
                }
              };
            }
          };
        })
        .catch(function (o) {
          console.error("Error during service worker registration:", o);
        });
  });

  $(window).on("resize", { passive: true }, function () {
    width = $(window).width();
  });
});
`;
};
