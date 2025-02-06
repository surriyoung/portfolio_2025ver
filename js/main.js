const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

$(document).ready(function () {
  let $scrollTopBtn = $(".scroll-top");

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $("header").removeClass("on");
    } else {
      $("header").addClass("on");
    }
    if ($(this).scrollTop() > 200) {
      $scrollTopBtn.fadeIn();
    } else {
      $scrollTopBtn.fadeOut();
    }
  });
  $scrollTopBtn.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });

  function updateHeaderClass() {
    if (
      $(window).width() < $(window).height() ||
      window.matchMedia("(max-width: 1024px)").matches
    ) {
      $("header").addClass("static");
    } else {
      $("header").removeClass("static");
    }
  }

  updateHeaderClass();
  $(window).resize(updateHeaderClass);

  // 탭콘텐츠
  $(".project_category>li>a").click(function (e) {
    // 탭누르면 상단으로가는거 막기:function뒤에 e넣어주고 e.preventDefault() 삽입
    e.preventDefault();
    $(".project_category>li>a").removeClass("on");
    $(this).addClass("on");
    let tabId = $(this).attr("href");
    $(".project_wrap").removeClass("on");
    $(tabId).addClass("on");
  });
  $(".page_btn_wrap .page_btn").click(function (e) {
    // 탭누르면 상단으로가는거 막기:function뒤에 e넣어주고 e.preventDefault() 삽입
    e.preventDefault();
    $(".page_btn_wrap .page_btn").removeClass("on");
    $(this).addClass("on");
    let tabId = $(this).attr("href");
    $(".project .project_wrapper .project_wrap.on .work_page").removeClass(
      "on"
    );
    $(tabId).addClass("on");
  });
  // imageChange();
});

var swiper1 = new Swiper(".first-swiper-container", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0, // 3초 딜레이
    disableOnInteraction: false,
    reverseDirection: false,
  },
  speed: 5000, // 슬라이드 전환 속도
  effect: "slide",
});

var swiper2 = new Swiper(".second-swiper-container", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0, // 3초 딜레이
    disableOnInteraction: false,
    reverseDirection: false,
  },
  speed: 5000,
  effect: "slide",
});

var swiper3 = new Swiper(".sud-swiper-container", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0, // 3초 딜레이
    disableOnInteraction: false,
    reverseDirection: false,
  },
  speed: 5000,
  effect: "slide",
});
