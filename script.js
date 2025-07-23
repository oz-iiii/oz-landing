const swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  slidesPerView: 1.1,
  centeredSlides: true,
  spaceBetween: 16 /* 원래 16 */,
  loop: true,
  grabCursor: true,
});
/*수정*/
// 모든 카드 슬라이드 영역에 드래그 스크롤 기능 적용
const cardScrolls = document.querySelectorAll(".card-scroll");

cardScrolls.forEach((scrollArea) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  scrollArea.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollArea.classList.add("active");
    startX = e.pageX - scrollArea.offsetLeft;
    scrollLeft = scrollArea.scrollLeft;
  });

  scrollArea.addEventListener("mouseleave", () => {
    isDown = false;
    scrollArea.classList.remove("active");
  });

  scrollArea.addEventListener("mouseup", () => {
    isDown = false;
    scrollArea.classList.remove("active");
  });

  scrollArea.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollArea.offsetLeft;
    const walk = (x - startX) * 1.5; // 이동 속도 조절
    scrollArea.scrollLeft = scrollLeft - walk;
  });

  // 모바일 터치 대응
  let touchStartX = 0;
  let touchScrollLeft = 0;

  scrollArea.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = scrollArea.scrollLeft;
  });

  scrollArea.addEventListener("touchmove", (e) => {
    const touchX = e.touches[0].pageX;
    const walk = (touchX - touchStartX) * -1;
    scrollArea.scrollLeft = touchScrollLeft + walk;
  });
});
// 강제로 첫 번째 카드로 스크롤 초기화 (화면 리사이즈 시)
window.addEventListener("resize", () => {
  document.querySelectorAll(".card-scroll").forEach((scrollEl) => {
    scrollEl.scrollTo({ left: 0, behavior: "smooth" });
  });
});
