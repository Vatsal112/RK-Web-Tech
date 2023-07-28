function scrollFunction() {
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
let sliderBG = document.getElementsByClassName("bg-img-slider")[0];
let review1 = document.getElementsByClassName("review1")[0];
let review2 = document.getElementsByClassName("review2")[0];
let review3 = document.getElementsByClassName("review3")[0];
let review4 = document.getElementsByClassName("review4")[0];
let review5 = document.getElementsByClassName("review5")[0];
let review6 = document.getElementsByClassName("review6")[0];
let aboutPage1 = document.getElementsByClassName("about1")[0];
let aboutPage2 = document.getElementsByClassName("about2")[0];
let aboutPage3 = document.getElementsByClassName("about3")[0];
let aboutPage4 = document.getElementsByClassName("about4")[0];
let aboutPage5 = document.getElementsByClassName("about5")[0];
let aboutPage6 = document.getElementsByClassName("about6")[0];
let navLink = document.getElementsByClassName("dropdown-toggle")[0];
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
    $(sliderBG).css(
      "background-image",
      "url(images/home_slider/slider_bg_mobile.webp)"
    );
    $(review1).attr("src", "images/reviews/review1-mobile.webp");
    $(review2).attr("src", "images/reviews/review2-mobile.webp");
    $(review3).attr("src", "images/reviews/review3-mobile.webp");
    $(review4).attr("src", "images/reviews/review4-mobile.webp");
    $(review5).attr("src", "images/reviews/review5-mobile.webp");
    $(review6).attr("src", "images/reviews/review6-mobile.webp");

    $(aboutPage1).attr("src", "images/brochure/page1-mobile.webp");
    $(aboutPage2).attr("src", "images/brochure/page2-mobile.webp");
    $(aboutPage3).attr("src", "images/brochure/page3-mobile.webp");
    $(aboutPage4).attr("src", "images/brochure/page4-mobile.webp");
    $(aboutPage5).attr("src", "images/brochure/page5-mobile.webp");
    $(aboutPage6).attr("src", "images/brochure/page6-mobile.webp");

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
    $(review1).attr("src", "images/reviews/review1.webp");
    $(review2).attr("src", "images/reviews/review2.webp");
    $(review3).attr("src", "images/reviews/review3.webp");
    $(review4).attr("src", "images/reviews/review4.webp");
    $(review5).attr("src", "images/reviews/review5.webp");
    $(review6).attr("src", "images/reviews/review6.webp");
    $(aboutPage1).attr("src", "images/brochure/page1.webp");
    $(aboutPage2).attr("src", "images/brochure/page2.webp");
    $(aboutPage3).attr("src", "images/brochure/page3.webp");
    $(aboutPage4).attr("src", "images/brochure/page4.webp");
    $(aboutPage5).attr("src", "images/brochure/page5.webp");
    $(aboutPage6).attr("src", "images/brochure/page6.webp");

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
      $(review1).attr("src", "images/reviews/review1-mobile.webp");
      $(review2).attr("src", "images/reviews/review2-mobile.webp");
      $(review3).attr("src", "images/reviews/review3-mobile.webp");
      $(review4).attr("src", "images/reviews/review4-mobile.webp");
      $(review5).attr("src", "images/reviews/review5-mobile.webp");
      $(review6).attr("src", "images/reviews/review6-mobile.webp");
      //about-us
      $(aboutPage1).attr("src", "images/brochure/page1-mobile.webp");
      $(aboutPage2).attr("src", "images/brochure/page2-mobile.webp");
      $(aboutPage3).attr("src", "images/brochure/page3-mobile.webp");
      $(aboutPage4).attr("src", "images/brochure/page4-mobile.webp");
      $(aboutPage5).attr("src", "images/brochure/page5-mobile.webp");
      $(aboutPage6).attr("src", "images/brochure/page6-mobile.webp");

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
      $(review1).attr("src", "images/reviews/review1.webp");
      $(review2).attr("src", "images/reviews/review2.webp");
      $(review3).attr("src", "images/reviews/review3.webp");
      $(review4).attr("src", "images/reviews/review4.webp");
      $(review5).attr("src", "images/reviews/review5.webp");
      $(review6).attr("src", "images/reviews/review6.webp");
      //about-us
      $(aboutPage1).attr("src", "images/brochure/page1.webp");
      $(aboutPage2).attr("src", "images/brochure/page2.webp");
      $(aboutPage3).attr("src", "images/brochure/page3.webp");
      $(aboutPage4).attr("src", "images/brochure/page4.webp");
      $(aboutPage5).attr("src", "images/brochure/page5.webp");
      $(aboutPage6).attr("src", "images/brochure/page6.webp");

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
