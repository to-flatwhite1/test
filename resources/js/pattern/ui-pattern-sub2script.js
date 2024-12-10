/* 햄버거 메뉴 보이게 */
$(".subAll-menu").click(function () {
  $("#sub-nav-all").addClass("active");
});
$(".close").click(function () {
  $("#sub-nav-all").removeClass("active");
});

/* 햄버거 메뉴 메인메뉴 클릭시 하단 메뉴 보이게 */
$("#sub-nav-all > .inner > .gnb__depth1 > li ").mouseenter(function () {
  $(this).find(".gnb__depth2").stop().slideDown(200);
});

$("#sub-nav-all > .inner > .gnb__depth1 > li ").mouseleave(function () {
  $(this).find(".gnb__depth2").stop().slideUp(200);
});
/* 검색창 */
$(".subSearch").click(function () {
  $(".modal-search").css({
    top: "0",
  });
});

$(".close").click(function () {
  $(".modal-search").css({
    top: "-300px", // 모달을 숨길 위치로 설정
  });
});

$(".sub_lang__btn").click(function () {
  $(".sub_lang__lst").show();
});

$(".sub_lang__lst li").click(function () {
  $(".sub_lang__lst").hide();
});
$(".sub_lang__lst").mouseleave(function () {
  $(this).hide();
});

document.addEventListener("DOMContentLoaded", function () {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".pin01",
      pin: ".pin01",
      scrub: 0.5,
      start: "top top",
      end: "+=500 ", // 콘텐츠가 끝날 때까지 고정
    },
  });

  tl.to(".bg", { height: "0", duration: 1 });
  tl.to(".typo01", { y: 0, duration: 1, delay: -1 });
  tl.to(".typo02", { y: 0, duration: 1, delay: -1 });
  tl.to(".typo span", { alpha: 0, duration: 1 });
  tl.to(".typo span", { width: 0, duration: 1 });
  tl.to(".typo", { gap: 0, duration: 1, delay: -1 });
  tl.to(".typo", { width: "auto", y: 0, top: "36%", duration: 1 });
  tl.to(".bg02", { top: 0, duration: 1, delay: -1 });
  tl.to(".txt01", { alpha: 1, y: 0, duration: 1 });
  tl.to(".txt01", { alpha: 0, y: -40, duration: 1 });
  tl.to(".txt02", { alpha: 1, y: 0, duration: 1 });
  tl.to(".txt02", { alpha: 0, y: -40, duration: 1 });
  tl.to(".txt03", { alpha: 1, y: 0, duration: 1 });
  tl.to(".images", { alpha: 1, delay: -5 });
  tl.to(".images", { y: "-50%", duration: 6, delay: -4 });
});
