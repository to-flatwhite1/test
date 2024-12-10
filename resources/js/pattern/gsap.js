gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro",
    pin: true,
    start: "top 0",
    end: "+=500",
    scrub: 1,
    // markers: true,
  },
});

//윈도우가 스크롤 됐을 때
window.addEventListener(
  "scroll",
  _.throttle(function () {
    const scrolled = window.scrollY; /* 스크롤 값 */
    console.log(`스크롤 값 : ${scrolled}`);

    //만약 y축 스크롤 값이 80보다 크다면
    if (scrolled > 80) {
      gsap.to(".inner", {
        y: -100,
        duration: 1,
      });
      gsap.to("#to-top", {
        x: -70,
        duration: 0.3,
      });
    } else {
      gsap.to(".inner", {
        y: 0,
        duration: 1,
      });
      gsap.to("#to-top", {
        x: 0,
        duration: 0.3,
      });
    }
  })
);
