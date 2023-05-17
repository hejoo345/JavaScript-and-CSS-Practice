const imgArr = [
  {
    title: "대국민 로또 추첨 공개 생방송 참관인(방청객) 모집",
    src: "https://img.imbc.com/s2018m/s2018m_1/s2018m_1_1/s2018m_1_11/__icsFiles/afieldfile/2023/05/15/lotto_apply.jpg",
  },
  {
    title: "띵동! 저 돌아왔어요! 로그인만 하면 선물을 드려요! 이벤트 참여하기",
    src: "https://img.imbc.com/s2018m/s2018m_1/s2018m_1_1/s2018m_1_11/__icsFiles/afieldfile/2023/01/31/event_welcome.jpg",
  },
  {
    title: "[혓바닥 종합격투기 세치혀] 화요일 밤 10시",
    src: "https://img.imbc.com/s2018m/s2018m_1/s2018m_1_1/s2018m_1_11/__icsFiles/afieldfile/2022/11/25/19.jpg",
  },
];

/* slide */
imgArr.forEach((data, idx) => {
  const li = document.createElement("li");
  li.setAttribute("class", "slide-item");
  const img = document.createElement("img");
  img.setAttribute("src", data.src);
  li.appendChild(img);

  document.querySelector(".slide-list").appendChild(li);

  const dot = document.createElement("li");
  dot.setAttribute("class", "dot");
  dot.setAttribute("data-dot", idx);
  document.querySelector(".dots").appendChild(dot);
});

const slideWrap = document.querySelector(".slide-wrap");
const slider = document.querySelector(".slide-list");
const slides = document.querySelectorAll(".slide-item");

let slideIndex = 0;

const totalSlide = slides.length;
const slideWidth = slideWrap.clientWidth;
slides.forEach(item => {
  item.style.width = slideWidth + "px";
});
slider.style.width = totalSlide * slideWidth + "px";

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
prevBtn.addEventListener("click", e => {
  plusSlide(-1);
});
nextBtn.addEventListener("click", e => {
  plusSlide(1);
});

const plusSlide = n => {
  slideIndex += n;
  showSlide(slideIndex);
};

const showSlide = index => {
  if (index == totalSlide) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = totalSlide - 1;
  }
  slider.style.left = -(slideIndex * slideWidth) + "px";
};

const onDotClick = e => {
  const idx = e.target.getAttribute("data-dot");
  slideIndex = idx;
  showSlide(idx);
};
const dots = document.querySelectorAll(".dot");
dots.forEach(dot => {
  dot.addEventListener("click", onDotClick);
});

/* tab menu */

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", onTabClick);
});
const imgs = document.querySelectorAll(".cont-wrap img");

function onTabClick(e) {
  const setTab = e.target.getAttribute("data-tab");

  tabs.forEach(tab => {
    tab.classList.remove("active");
  });
  imgs.forEach(img => {
    img.classList.remove("active");
  });

  e.target.classList.add("active");
  document.querySelector(`#${setTab}`).classList.add("active");
}
