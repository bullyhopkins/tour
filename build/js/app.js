"use strict";

$(document).ready(function () {});
$(document).ready(function () {
  //lang
  $(".lang__link").click(function () {
    var clicked = $(this).html();
    $('.lang__current').html(clicked);
  });
  $('.lang').click(function () {
    $('.lang__wrap').slideToggle();
  }); //show more

  $('.tour-more').click(function () {
    $('.hidden-tours').slideDown();
  }); //tabs
  // $(function() {
  // 	$("ul.tabs__caption").on("click", "li:not(.active)", function() {
  // 		$(this)
  // 		.addClass("active")
  // 		.siblings()
  // 		.removeClass("active")
  // 		.closest("div.tabs")
  // 		.find("div.tabs__content")
  // 		.removeClass("active")
  // 		.eq($(this).index())
  // 		.addClass("active");
  // 	});
  // });

  $(function () {
    $("ul.js-tab-btn").on("click", "li:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.js-tab-content").removeClass("active").eq($(this).index()).addClass("active");
    });
  }); //map-btns

  $('.map-btn_open').click(function () {
    $(this).hide();
    $('.map-btn_hide').show();
    $('.hotel').show();
    $('.map-wrap').addClass('active');
  });
  $('.map-btn_hide').click(function () {
    $(this).hide();
    $('.map-btn_open').show();
    $('.hotel').hide();
    $('.map-wrap').removeClass('active');
  }); //user-lk

  $('.user').click(function () {
    $('.user__wrap').slideToggle();
  });
  $('.user__link').click(function () {
    $('.user__link').removeClass('active');
    $(this).addClass('active');
  }); // smooth scroll

  $('.scroll-link').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  }); //accordion

  $(document).ready(function () {
    $(".tabsFaq__content-wrap > span").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".tabsFaq__content-text").slideUp(200);
        $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
      } else {
        $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
        $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
        $(".tabsFaq__content-wrap > span").removeClass("active");
        $(this).addClass("active");
        $(".tabsFaq__content-text").slideUp(200);
        $(this).siblings(".tabsFaq__content-text").slideDown(200);
      }
    });
  }); //calendar

  $('.calendar__year-btn').click(function () {
    $(this).parent().parent().find('.calendar__table.hidden').slideToggle();
    $(this).toggleClass('active');
  }); //plus - minus 

  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  }); // mainForm inputs

  $('.js-quantity-input').focus(function () {
    $('.number').addClass('active');
  });
  $('.js-tourists-input').focus(function () {
    $('.tourists').addClass('active');
  }); //toursForm

  $('.toursForm__foodSelect').click(function () {
    $('.toursForm__foodWrap').toggleClass('active');
  }); // datepicker

  $("#datepicker-hereNew").datepicker({
    minDate: new Date()
  }); //sliders

  $('.carousel-partner').owlCarousel({
    items: 5,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 600,
    responsive: {
      768: {
        mouseDrag: true,
        touchDrag: true
      }
    }
  });
  $('.carousel-clients').owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 600,
    responsive: {
      768: {
        mouseDrag: true,
        touchDrag: true
      }
    }
  });
  $('.carousel-agents').owlCarousel({
    center: true,
    items: 4,
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 600
  });
  $('.pay-slider').owlCarousel({
    items: 2,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 600
  });
  $('.card-slider').owlCarousel({
    items: 6,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 600
  }); //first slide

  var rangeSlider = $(".pay-slider");
  checkClasses();
  rangeSlider.on('translated.owl.carousel', function (event) {
    checkClasses();
  });

  function checkClasses() {
    var total = $('.pay-slider .owl-stage .owl-item.active').length;
    $('.pay-slider .owl-stage .owl-item').removeClass('firstActiveItem');
    $('.pay-slider .owl-stage .owl-item.active').each(function (index) {
      if (index === 0) {
        $(this).addClass('firstActiveItem');
      }
    });
  }

  var owl_1 = $('#owl-1');
  var owl_2 = $('#owl-2');
  owl_1.owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    items: 1,
    dots: false,
    autoplay: true
  });
  owl_2.owlCarousel({
    margin: 15,
    nav: false,
    items: 3,
    dots: false
  });
  owl_2.find(".item").click(function () {
    var slide_index = owl_2.find(".item").index(this);
    owl_1.trigger('to.owl.carousel', [slide_index, 300]);
  });
  $('.customNextBtn').click(function () {
    owl_1.trigger('next.owl.carousel', 500);
  });
  $('.customPreviousBtn').click(function () {
    owl_1.trigger('prev.owl.carousel', 500);
  });
});