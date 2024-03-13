$(window).scroll(function () {
  var scrolling = $(this).scrollTop();
  var sticky = $(".sticky-top");
  if (scrolling >= 100) {
    $(sticky).addClass("nav-bg");
  } else {
    $(sticky).removeClass("nav-bg");
  }
  if (scrolling >= 50) {
    $(".backtotop").fadeIn(500);
  } else {
    $(".backtotop").fadeOut(500);
  }
});

$(function () {
  $(".chart").easyPieChart({
    size: 120,
    barColor: "#fa573a",
    trackColor: "#2B2B2B",
    scaleLength: 0,
    lineWidth: 5,
    lineCap: "circle",
    animate: 2000,
  });
});
