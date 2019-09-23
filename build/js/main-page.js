"use strict";

$(function () {
  var scrollTop = document.scrollTop();

  if (scrollTop >= $(".popular-section").offsset().top) {
    alert(1);
  }
});