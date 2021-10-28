var siteUrl = "https://www.alexcoven.com/";
var a_anchors = new Array();
a_anchors.push("ckf-painting");
a_anchors.push("sidepocket");
a_anchors.push("livewild");
a_anchors.push("reph");
a_anchors.push("logos");
a_anchors.push("assorted");
var projectUrl = "";
var project_title;
var fullPageInit = false;
var workPage = false;

function initFullPage() {
  $("body, html").removeClass("freeze");
  $(".view-case-study").addClass("projects-load");
  $(".pagination").addClass("visible");
  $(".logo-menu svg").toggleClass("hovered");
  setTimeout(function () {
    $(".view-case-study").addClass("clickme");
  }, 2500);

  $("#fullpage").fullpage({
    lazyLoading: false,
    navigation: true,
    navigationPosition: "right",
    css3: true,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 10,
    anchors: a_anchors,
    menu: "#myMenu",
    normalScrollElements:
      ".nav, .open-nav, .project-inner, ul.social, .work-mode, a.logo, .menu-shelf, .tab, #hero, .hero-center-container",
    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);
      projectUrl = loadedSection.data("url");
      project_title = loadedSection.data("title");
      loadedSection.addClass("projects-load");
      loadedSection.find(".full-line").animate({ width: "100%" }, 500);
      loadedSection.animate(
        { "background-position-y": "-20px", "background-size": "120%" },
        1000
      );
      $("#hero").animate({ opacity: "0" }, 1000);
      $("#hero").addClass("destroy");
      if (!$("body").hasClass("work-mode")) {
        $("#project-inner-container").animate({ scrollTop: 0 }, 100);
      }
      $(".ui-info").animate({ opacity: "1" }, 350);
    },
    onLeave: function (index, nextIndex, direction) {
      var leavingSection = $(this);
      leavingSection.removeClass("projects-load");
      leavingSection.find(".full-line").animate({ width: "0%" }, 250);
      leavingSection.animate(
        { "background-position-y": "0px", "background-size": "110%" },
        100
      );
      $(".ui-info").animate({ opacity: "0" }, 0);
    },
  });
  fullPageInit = true;
}

$(document).ready(function () {
  var projects = $("#fullpage");
});
