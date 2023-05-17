/* slide */
let slideIndex = 0;
showSlide(slideIndex);

function plusSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}
function selectSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}
function showSlide(index) {
  const slides = document.querySelectorAll(".slide-item");
  const dots = document.querySelectorAll(".dot");
  console.log(slides);
  console.log(dots);
  if (index < 0) {
    // 첫번째에서 < 누르면 맨 뒤로 이동
    slideIndex = slides.length - 1;
  }
  if (index >= slides.length) {
    // 맨뒤에서 > 누르면 맨 앞으로 이동
    slideIndex = 0;
  }

  console.log(slideIndex);
  slides.forEach(item => {
    item.classList.remove("active");
  });
  dots.forEach(dot => {
    dot.classList.remove("active");
  });
  slides[slideIndex].classList.add("active");
  document.querySelector(`#item${slideIndex}`).classList.add("active");
}

// /* tab menu */
// const tabs = Array.from(document.querySelectorAll(".tab-link"));
// const tabContents = document.querySelectorAll(".tab-cont");
// const tabs2 = document.querySelectorAll(".tab-link");
// // console.log(tabs);

// tabs2.forEach(tab => {
//   tab.addEventListener("click", onTabClick);
// });

// function onTabClick(e) {
//   // console.log(e.target.getAttribute("data-tab"));
//   tabs2.forEach(tab => {
//     tab.classList.remove("active");
//   });
//   tabContents.forEach(tab => {
//     tab.classList.remove("active");
//   });

//   e.target.classList.add("active");
//   const cont = document.querySelector(`#${e.target.getAttribute("data-tab")}`);
//   cont.classList.add("active");
// }

const tabs = document.querySelectorAll(".tab-link");
const contents = document.querySelectorAll(".tab-cont");

const onTabClick = e => {
  const selTab = e.target.getAttribute("data-tab");
  console.log(selTab);
  tabs.forEach(tab => {
    tab.classList.remove("active");
  });
  contents.forEach(cont => {
    cont.classList.remove("active");
  });
  e.target.classList.add("active");
  document.querySelector(`#${selTab}`).classList.add("active");
};

tabs.forEach(tab => {
  tab.addEventListener("click", onTabClick);
});
