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
