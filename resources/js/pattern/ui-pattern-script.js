// Lenis 초기화
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

const raf = (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};
requestAnimationFrame(raf);

// 이미지 초기 설정
const images = document.querySelectorAll(".img_area img"); // querySelectorAll로 모든 이미지 가져와서 변수에 저장
gsap.set(images, { zIndex: 0, opacity: 0 }); // 모든 이미지의 z-index값과 opacity를 0으로 설정
gsap.set(images[0], { opacity: 1, zIndex: 1 }); // 첫 번째 이미지만 보이게 설정

// GSAP ScrollTrigger 설정
gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".img_area",
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".txt_container",
    scrub: true,
    pin: true,
    pinSpacing: false,
    onEnter: () => {
      gsap.to(images[0], { opacity: 1, zIndex: 1, duration: 0.7 }); // 페이지 로드 시 첫 번째 이미지 보이기
    },
  },
});

// 각 텍스트 항목에 대한 ScrollTrigger 생성
gsap.utils.toArray(".txt_container li").forEach((li, index) => {
  ScrollTrigger.create({
    trigger: li,
    start: "top 80%",
    end: "bottom top",
    onEnter: () => {
      gsap.to(images[index], { opacity: 1, zIndex: 1, duration: 0.7 });
    },
    onLeaveBack: () => {
      gsap.to(images[index], { opacity: 0, zIndex: 0, duration: 0.7 });
    },
    markers: true,
  });
});
