// 최신작 콘텐츠 데이터 (예시)
const newReleases = [
  {
    title: "환생불가 이세계 스킬",
    genre: "판타지, 액션",
    summary:
      "검과 마법이 난무하는 이세계에서 평범한 용병의 비범한 성장기를 다룬다.",
    poster:
      "https://via.placeholder.com/300x180/FF0000/FFFFFF?text=New+Movie+1",
  },
  {
    title: "도시의 그림자",
    genre: "스릴러, 느와르",
    summary: "어둠 속에서 벌어지는 음모와 한 형사의 끈질긴 추적.",
    poster:
      "https://via.placeholder.com/300x180/00FF00/000000?text=New+Movie+2",
  },
  {
    title: "별들의 속삭임",
    genre: "SF, 로맨스",
    summary: "우주를 배경으로 펼쳐지는 운명적인 사랑 이야기.",
    poster:
      "https://via.placeholder.com/300x180/0000FF/FFFFFF?text=New+Movie+3",
  },
  {
    title: "시간을 걷는 소녀",
    genre: "드라마, 판타지",
    summary:
      "시간 여행 능력을 가진 소녀가 과거의 실수를 바로잡기 위해 고군분투한다.",
    poster:
      "https://via.placeholder.com/300x180/FFFF00/000000?text=New+Movie+4",
  },
  {
    title: "심연의 부름",
    genre: "공포, 미스터리",
    summary: "어둠 속에 숨겨진 고대 저주와 이에 맞서는 고고학 팀의 이야기.",
    poster:
      "https://via.placeholder.com/300x180/FF00FF/FFFFFF?text=New+Movie+5",
  },
  {
    title: "기억의 조각",
    genre: "드라마, 범죄",
    summary:
      "기억을 잃은 남자가 자신의 과거를 찾아가며 거대한 진실과 마주한다.",
    poster:
      "https://via.placeholder.com/300x180/00FFFF/000000?text=New+Movie+6",
  },
];

// 사용자를 위한 추천 콘텐츠 (예시) - 기존 OTT 랭킹과 동일한 카드형
const userRecommendations = [
  {
    title: "영웅들의 귀환",
    poster: "https://via.placeholder.com/180x250/8B0000/FFFFFF?text=UserRec+1",
  },
  {
    title: "달빛 아래 춤을",
    poster: "https://via.placeholder.com/180x250/4B0082/FFFFFF?text=UserRec+2",
  },
  {
    title: "미래 도시의 밤",
    poster: "https://via.placeholder.com/180x250/2E8B57/FFFFFF?text=UserRec+3",
  },
  {
    title: "잃어버린 목소리",
    poster: "https://via.placeholder.com/180x250/FF4500/FFFFFF?text=UserRec+4",
  },
  {
    title: "황금 사과",
    poster: "https://via.placeholder.com/180x250/FFD700/000000?text=UserRec+5",
  },
  {
    title: "비밀의 정원",
    poster: "https://via.placeholder.com/180x250/1E90FF/FFFFFF?text=UserRec+6",
  },
  {
    title: "잊혀진 왕국",
    poster: "https://via.placeholder.com/180x250/DA70D6/FFFFFF?text=UserRec+7",
  },
  {
    title: "고독한 탐정",
    poster: "https://via.placeholder.com/180x250/808080/FFFFFF?text=UserRec+8",
  },
  {
    title: "폭풍의 바다",
    poster: "https://via.placeholder.com/180x250/4682B4/FFFFFF?text=UserRec+9",
  },
  {
    title: "별똥별 이야기",
    poster: "https://via.placeholder.com/180x250/9370DB/FFFFFF?text=UserRec+10",
  },
];

// OTT별 인기 콘텐츠 데이터 (예시)
const ottRankings = {
  netflix: [
    {
      title: "오징어 게임",
      poster:
        "https://via.placeholder.com/180x250/E50914/FFFFFF?text=Netflix+1",
    },
    {
      title: "더 글로리",
      poster:
        "https://via.placeholder.com/180x250/E50914/FFFFFF?text=Netflix+2",
    },
    {
      title: "기묘한 이야기",
      poster:
        "https://via.placeholder.com/180x250/E50914/FFFFFF?text=Netflix+3",
    },
    {
      title: "지옥",
      poster:
        "https://via.placeholder.com/180x250/E50914/FFFFFF?text=Netflix+4",
    },
    {
      title: "택배기사",
      poster:
        "https://via.placeholder.com/180x250/E50914/FFFFFF?text=Netflix+5",
    },
    {
      title: "지금 우리 학교는",
      poster:
        "https://via.placeholder.com/180x250/E50914/FFFFFF?text=Netflix+6",
    },
    {
      title: "소년 심판",
      poster:
        "https://via.placeholder.com/180x250/E50914/FFFFFF?text=Netflix+7",
    },
    {
      title: "D.P.",
      poster:
        "https://via.placeholder.com/180x250/E50914/FFFFFF?text=Netflix+8",
    },
    {
      title: "수리남",
      poster:
        "https://via.placeholder.com/180x250/E50914/FFFFFF?text=Netflix+9",
    },
    {
      title: "킹덤",
      poster:
        "https://via.placeholder.com/180x250/E50914/FFFFFF?text=Netflix+10",
    },
  ],
  disney: [
    {
      title: "무빙",
      poster: "https://via.placeholder.com/180x250/21356F/FFFFFF?text=Disney+1",
    },
    {
      title: "로키 시즌2",
      poster: "https://via.placeholder.com/180x250/21356F/FFFFFF?text=Disney+2",
    },
    {
      title: "만달로리안",
      poster: "https://via.placeholder.com/180x250/21356F/FFFFFF?text=Disney+3",
    },
    {
      title: "아바타",
      poster: "https://via.placeholder.com/180x250/21356F/FFFFFF?text=Disney+4",
    },
    {
      title: "블랙 팬서",
      poster: "https://via.placeholder.com/180x250/21356F/FFFFFF?text=Disney+5",
    },
    {
      title: "인사이드 아웃",
      poster: "https://via.placeholder.com/180x250/21356F/FFFFFF?text=Disney+6",
    },
    {
      title: "소울",
      poster: "https://via.placeholder.com/180x250/21356F/FFFFFF?text=Disney+7",
    },
    {
      title: "겨울왕국 2",
      poster: "https://via.placeholder.com/180x250/21356F/FFFFFF?text=Disney+8",
    },
    {
      title: "아이언맨",
      poster: "https://via.placeholder.com/180x250/21356F/FFFFFF?text=Disney+9",
    },
    {
      title: "토이스토리",
      poster:
        "https://via.placeholder.com/180x250/21356F/FFFFFF?text=Disney+10",
    },
  ],
  wavve: [
    {
      title: "약한영웅 Class 1",
      poster: "https://via.placeholder.com/180x250/20B2AA/FFFFFF?text=Wavve+1",
    },
    {
      title: "모범택시 2",
      poster: "https://via.placeholder.com/180x250/20B2AA/FFFFFF?text=Wavve+2",
    },
    {
      title: "피의 게임 2",
      poster: "https://via.placeholder.com/180x250/20B2AA/FFFFFF?text=Wavve+3",
    },
    {
      title: "런닝맨",
      poster: "https://via.placeholder.com/180x250/20B2AA/FFFFFF?text=Wavve+4",
    },
    {
      title: "꼬리에 꼬리를 무는 그날 이야기",
      poster: "https://via.placeholder.com/180x250/20B2AA/FFFFFF?text=Wavve+5",
    },
    {
      title: "나 혼자 산다",
      poster: "https://via.placeholder.com/180x250/20B2AA/FFFFFF?text=Wavve+6",
    },
    {
      title: "골 때리는 그녀들",
      poster: "https://via.placeholder.com/180x250/20B2AA/FFFFFF?text=Wavve+7",
    },
    {
      title: "궁금한 이야기 Y",
      poster: "https://via.placeholder.com/180x250/20B2AA/FFFFFF?text=Wavve+8",
    },
    {
      title: "SNL 코리아",
      poster: "https://via.placeholder.com/180x250/20B2AA/FFFFFF?text=Wavve+9",
    },
    {
      title: "환승연애 2",
      poster: "https://via.placeholder.com/180x250/20B2AA/FFFFFF?text=Wavve+10",
    },
  ],
  coupang: [
    {
      title: "소년시대",
      poster:
        "https://via.placeholder.com/180x250/FF8C00/FFFFFF?text=Coupang+1",
    },
    {
      title: "SNL 코리아 시즌 4",
      poster:
        "https://via.placeholder.com/180x250/FF8C00/FFFFFF?text=Coupang+2",
    },
    {
      title: "어느 날",
      poster:
        "https://via.placeholder.com/180x250/FF8C00/FFFFFF?text=Coupang+3",
    },
    {
      title: "안나",
      poster:
        "https://via.placeholder.com/180x250/FF8C00/FFFFFF?text=Coupang+4",
    },
    {
      title: "미드나잇 유니버시티",
      poster:
        "https://via.placeholder.com/180x250/FF8C00/FFFFFF?text=Coupang+5",
    },
    {
      title: "심야괴담회",
      poster:
        "https://via.placeholder.com/180x250/FF8C00/FFFFFF?text=Coupang+6",
    },
    {
      title: "다이아몬드 에이스",
      poster:
        "https://via.placeholder.com/180x250/FF8C00/FFFFFF?text=Coupang+7",
    },
    {
      title: "복학생: 학점은 A지만 사랑은 F입니다",
      poster:
        "https://via.placeholder.com/180x250/FF8C00/FFFFFF?text=Coupang+8",
    },
    {
      title: "비밀은 없어",
      poster:
        "https://via.placeholder.com/180x250/FF8C00/FFFFFF?text=Coupang+9",
    },
    {
      title: "로켓단",
      poster:
        "https://via.placeholder.com/180x250/FF8C00/FFFFFF?text=Coupang+10",
    },
  ],
  tving: [
    // 티빙 데이터 추가
    {
      title: "아씨두리안",
      poster: "https://via.placeholder.com/180x250/FF69B4/FFFFFF?text=TVING+1",
    }, // 분홍색 계열
    {
      title: "술꾼도시여자들",
      poster: "https://via.placeholder.com/180x250/FF69B4/FFFFFF?text=TVING+2",
    },
    {
      title: "환승연애 3",
      poster: "https://via.placeholder.com/180x250/FF69B4/FFFFFF?text=TVING+3",
    },
    {
      title: "크라임씬 리턴즈",
      poster: "https://via.placeholder.com/180x250/FF69B4/FFFFFF?text=TVING+4",
    },
    {
      title: "여고추리반 3",
      poster: "https://via.placeholder.com/180x250/FF69B4/FFFFFF?text=TVING+5",
    },
    {
      title: "내가 죽기 일주일 전",
      poster: "https://via.placeholder.com/180x250/FF69B4/FFFFFF?text=TVING+6",
    },
    {
      title: "더 타임즈",
      poster: "https://via.placeholder.com/180x250/FF69B4/FFFFFF?text=TVING+7",
    },
    {
      title: "하트시그널 4",
      poster: "https://via.placeholder.com/180x250/FF69B4/FFFFFF?text=TVING+8",
    },
    {
      title: "운수 오진 날",
      poster: "https://via.placeholder.com/180x250/FF69B4/FFFFFF?text=TVING+9",
    },
    {
      title: "나는 솔로",
      poster: "https://via.placeholder.com/180x250/FF69B4/FFFFFF?text=TVING+10",
    },
  ],
};

// --- 헬퍼 함수: 현재 transformX 값 가져오기 ---
function getTranslateX(element) {
  const transform = getComputedStyle(element).transform;
  if (transform === "none") return 0; // transform 속성이 없으면 0 반환
  const matrix = transform.match(/matrix.*\((.+)\)/);
  if (matrix && matrix[1]) {
    const values = matrix[1].split(", ");
    return parseFloat(values[4]); // matrix(a,b,c,d,tx,ty)에서 tx (translateX) 값 반환
  }
  return 0;
}

// --- 헬퍼 함수: 자식 아이템의 너비 (margin 포함) 계산 ---
function getChildItemFullWidth(parentElement) {
  // carousel-track에는 .carousel-item, ranking-carousel에는 .content-card가 자식으로 있음
  const firstItem =
    parentElement.querySelector(".carousel-item") ||
    parentElement.querySelector(".content-card");
  if (firstItem) {
    const itemComputedStyle = getComputedStyle(firstItem);
    const width = parseFloat(itemComputedStyle.width); // item의 실제 너비
    const marginRight = parseFloat(itemComputedStyle.marginRight); // item의 오른쪽 마진
    return width + marginRight; // 전체 아이템 간격
  }
  return 0; // 자식 아이템이 없으면 0 반환
}

// --- 드래그 기능을 추가하는 함수 ---
function makeDraggable(trackElement) {
  let isDragging = false; // 이 특정 슬라이더가 드래그 중인지 여부
  let startPointerX = 0; // 드래그 시작 시 포인터(마우스/터치)의 X 좌표
  let startTrackTranslateX = 0; // 드래그 시작 시 슬라이더 트랙의 translateX 값
  let currentDragTranslateX = 0; // 현재 드래그 중인 슬라이더 트랙의 translateX 값

  // mousedown (터치) 이벤트 핸들러
  const onPointerDown = (e) => {
    // 입력 필드나 버튼 위에서는 드래그 시작 방지
    if (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON") {
      return;
    }

    isDragging = true;
    trackElement.classList.add("active"); // CSS에서 커서 변경용
    trackElement.style.transition = "none"; // 드래그 중에는 전환 효과 비활성화

    startPointerX = e.pageX || e.touches[0].pageX; // 마우스와 터치 이벤트 처리
    startTrackTranslateX = getTranslateX(trackElement);
    currentDragTranslateX = startTrackTranslateX; // 현재 위치로 초기화

    // 기본 드래그 동작 (이미지 드래그, 텍스트 선택 등) 방지
    e.preventDefault();
  };

  // mousemove (터치 이동) 이벤트 핸들러
  const onPointerMove = (e) => {
    if (!isDragging) return; // 드래그 중이 아니면 무시

    const currentX = e.pageX || e.touches[0].pageX; // 현재 포인터 X 좌표
    const dragDistance = currentX - startPointerX; // 드래그 거리

    let newTranslateX = startTrackTranslateX + dragDistance; // 새 translateX 값 계산

    // 경계 조건 설정: 슬라이더가 컨테이너 밖으로 나가지 않도록
    const containerWidth = trackElement.parentElement.clientWidth;
    const trackWidth = trackElement.scrollWidth;

    // 트랙이 컨테이너보다 작으면 (모든 아이템이 다 보이면) 드래그 금지
    if (trackWidth <= containerWidth) {
      newTranslateX = 0;
    } else {
      const maxTranslateX = 0; // 가장 왼쪽으로 이동했을 때 (0px)
      const minTranslateX = -(trackWidth - containerWidth); // 가장 오른쪽으로 이동했을 때 (음수)

      // 경계 넘어서 드래그 시 둔화 효과 (옵션)
      if (newTranslateX > maxTranslateX) {
        newTranslateX = maxTranslateX + (newTranslateX - maxTranslateX) * 0.2; // 0.2는 둔화 강도
      } else if (newTranslateX < minTranslateX) {
        newTranslateX = minTranslateX + (newTranslateX - minTranslateX) * 0.2;
      }
    }

    currentDragTranslateX = newTranslateX;
    trackElement.style.transform = `translateX(${currentDragTranslateX}px)`; // 즉시 반영
  };

  // mouseup (터치 종료) 이벤트 핸들러
  const onPointerUp = () => {
    if (!isDragging) return; // 드래그 중이 아니면 무시
    isDragging = false;
    trackElement.classList.remove("active");
    trackElement.style.transition = "transform 0.5s ease-in-out"; // 전환 효과 다시 활성화

    // 드래그가 끝난 후 가장 가까운 아이템 위치로 스냅 (정렬)
    const itemFullWidth = getChildItemFullWidth(trackElement);
    if (itemFullWidth > 0) {
      // 현재 위치에서 가장 가까운 아이템의 인덱스 계산
      const nearestIndex = Math.round(
        Math.abs(currentDragTranslateX) / itemFullWidth
      );
      let snapPosition = -nearestIndex * itemFullWidth;

      // 경계 다시 확인하여 스냅 위치 조정 (둔화 효과 적용 후)
      const containerWidth = trackElement.parentElement.clientWidth;
      const trackWidth = trackElement.scrollWidth;

      if (trackWidth <= containerWidth) {
        snapPosition = 0; // 아이템이 컨테이너 안에 다 들어오면 0으로 고정
      } else {
        const maxSnapTranslateX = 0;
        const minSnapTranslateX = -(trackWidth - containerWidth);

        if (snapPosition > maxSnapTranslateX) snapPosition = maxSnapTranslateX;
        if (snapPosition < minSnapTranslateX) snapPosition = minSnapTranslateX;
      }

      currentDragTranslateX = snapPosition;
      trackElement.style.transform = `translateX(${currentDragTranslateX}px)`; // 정렬 반영
    }
  };

  // 이벤트 리스너 등록
  trackElement.addEventListener("mousedown", onPointerDown);
  trackElement.addEventListener("touchstart", onPointerDown, { passive: true }); // 터치 이벤트는 passive로 설정하여 스크롤 성능 향상

  document.addEventListener("mousemove", onPointerMove);
  document.addEventListener("touchmove", onPointerMove, { passive: true });

  document.addEventListener("mouseup", onPointerUp);
  document.addEventListener("touchend", onPointerUp);
  document.addEventListener("mouseleave", (e) => {
    // 마우스가 창 밖으로 나갔을 때 드래그 종료
    // 마우스가 트랙 요소 위에서 드래그 중이었다면 드래그를 종료
    // relatedTarget이 null이거나 <body> 등을 가리키는 경우에만 onPointerUp 호출
    if (
      isDragging &&
      e.relatedTarget &&
      !trackElement.contains(e.relatedTarget)
    ) {
      onPointerUp();
    } else if (isDragging && !e.relatedTarget) {
      // 마우스가 아예 브라우저 밖으로 나갔을 때
      onPointerUp();
    }
  });
}

// --- 콘텐츠 렌더링 함수 ---
// 최신작 콘텐츠 렌더링
function renderNewReleases() {
  const track = document.getElementById("newReleasesTrack");
  newReleases.forEach((item) => {
    const div = document.createElement("div");
    div.className = "carousel-item";
    div.innerHTML = `
            <img src="${item.poster}" alt="${item.title} 포스터">
            <h4>${item.title}</h4>
            <p>${item.summary}</p>
        `;
    track.appendChild(div);
  });
  makeDraggable(track); // 최신작 슬라이더에 드래그 기능 적용
}

// 사용자를 위한 추천 콘텐츠 렌더링
function renderUserRecommendations() {
  const track = document.getElementById("userRecsRanking");
  userRecommendations.forEach((content) => {
    const div = document.createElement("div");
    div.className = "content-card"; // OTT 랭킹과 동일한 카드형 사용
    div.innerHTML = `
            <img src="${content.poster}" alt="${content.title} 포스터">
            <h4>${content.title}</h4>
        `;
    track.appendChild(div);
  });
  makeDraggable(track); // 추천 슬라이더에도 드래그 기능 적용
}

// OTT별 인기 콘텐츠 렌더링
function renderOttRankings() {
  for (const platform in ottRankings) {
    const carousel = document.getElementById(`${platform}Ranking`);
    if (carousel) {
      ottRankings[platform].forEach((content) => {
        const div = document.createElement("div");
        div.className = "content-card";
        div.innerHTML = `
                    <img src="${content.poster}" alt="${content.title} 포스터">
                    <h4>${content.title}</h4>
                `;
        carousel.appendChild(div);
      });
      makeDraggable(carousel); // 각 OTT별 슬라이더에 드래그 기능 적용
    }
  }
}

// --- 로그인 모달 기능 관련 코드가 삭제되었습니다 ---

// --- 페이지 로드 시 실행 ---
document.addEventListener("DOMContentLoaded", () => {
  renderNewReleases();
  renderUserRecommendations(); // 사용자를 위한 추천 렌더링 함수 호출
  renderOttRankings();
});
