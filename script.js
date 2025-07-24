document.addEventListener("DOMContentLoaded", () => {
  console.log("오늘 뭐 볼까? 랜딩 페이지 로드 완료!");

  const ctaButton = document.querySelector(".main-cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", (event) => {
      event.preventDefault(); // 기본 링크 이동 방지
      alert(
        "서비스 페이지로 이동합니다! (30초 설문을 통해 취향 맞춤 추천을 받아보세요!)"
      );
      // 실제 서비스 페이지나 설문 페이지로 이동하려면 window.location.href = '서비스_페이지_URL';
      console.log("시작하기 버튼이 클릭되었습니다.");
    });
  }
});
