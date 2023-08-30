const swiperHero = new Swiper(".hero-slider-background", {
  spaceBetween: 30,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 8000,
  },
  on: {
    slideChange: function () {
      swiperInfo.slideTo(this.activeIndex);
    }
  }
});


const swiperInfo = new Swiper(".info-swiper", {
  effect: "fade",
});

const paymentImages = document.querySelectorAll('.payment-img');

function toggleActiveClass() {
  const randomIndex = Math.floor(Math.random() * paymentImages.length);

  paymentImages.forEach(image => {
    image.classList.remove('active');
  });

  paymentImages[randomIndex].classList.add('active');
}

setInterval(toggleActiveClass, 2000);
