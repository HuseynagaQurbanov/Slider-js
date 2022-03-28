var slider = document.querySelector(".slider");
var nextBtn = slider.querySelector(".next-btn");
var prevBtn = slider.querySelector(".prev-btn");

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();

  slideToPrev();
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  slideToNext();
});

function slideToPrev() {
  let activeItem = slider.querySelector(".inner .item.active");
  activeItem.classList.remove("active");

  if (activeItem.previousElementSibling == null) {
    slider.querySelector('.inner .item:last-child').classList.add('active')
  } else {
    activeItem.previousElementSibling.classList.add("active");
  }
}

function slideToNext() {
  let activeItem = slider.querySelector(".inner .item.active");
  activeItem.classList.remove("active");

  if (activeItem.nextElementSibling == null) {
    slider.querySelector('.inner .item:first-child').classList.add('active')
  } else {
    activeItem.nextElementSibling.classList.add("active");
  }
}
