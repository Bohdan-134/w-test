// ------ swiper ------ //

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
    },
  },
});

const swiperInfo = new Swiper(".info-swiper", {
  effect: "fade",
});


// ------ animation img ------ //
const paymentImages = document.querySelectorAll(".payment-img");

let intervalId;

function toggleActiveClass() {
  const randomIndex = Math.floor(Math.random() * paymentImages.length);

  paymentImages.forEach((image) => {
    image.classList.remove("active");
  });

  paymentImages[randomIndex].classList.add("active");
}

function startToggleInterval() {
  intervalId = setInterval(toggleActiveClass, 2000);
}

function stopToggleInterval() {
  clearInterval(intervalId);
}

// ------ delate block size window ------ //
function removeLogoBlock() {
  const logoWrapper = document.querySelector(".email .logo-wrapper");
  if (logoWrapper) {
    logoWrapper.remove();
  }
}

function removePaymentImgBlocks() {
  const paymentImgBlocks = document.querySelectorAll(
    ".payment .container .payment-img-block"
  );
  paymentImgBlocks.forEach((block) => {
    block.remove();
  });
}

function createPaymentImgBlock() {
  const paymentImgBlock = document.createElement("div");
  paymentImgBlock.classList.add("payment-img");
  paymentImgBlock.innerHTML =
    '<img src="../img/payment-systems.png" alt="img">';

  const paymentContainer = document.querySelector(".payment .container");
  if (paymentContainer) {
    paymentContainer.appendChild(paymentImgBlock);
  }
}

function createLogoBlock() {
  const logoBlock = document.createElement("a");
  logoBlock.href = "#";
  logoBlock.classList.add("logo-wrapper");
  logoBlock.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="102" height="26" viewBox="0 0 102 26" fill="none"><path d="M0 0.276594H5.0133V20.883H16.9761V25.7234H0V0.276594Z" fill="white"/><path d="M19.8844 13.0346C19.8844 11.2828 20.2186 9.62323 20.887 8.05585C21.5555 6.48847 22.4775 5.10549 23.653 3.90691C24.8516 2.68528 26.2345 1.72872 27.8019 1.03723C29.3693 0.345744 31.0519 0 32.8498 0C34.6246 0 36.2957 0.345744 37.8631 1.03723C39.4305 1.72872 40.8134 2.68528 42.012 3.90691C43.2337 5.10549 44.1787 6.48847 44.8471 8.05585C45.5386 9.62323 45.8844 11.2828 45.8844 13.0346C45.8844 14.8324 45.5386 16.5151 44.8471 18.0824C44.1787 19.6498 43.2337 21.0328 42.012 22.2314C40.8134 23.4069 39.4305 24.3289 37.8631 24.9973C36.2957 25.6658 34.6246 26 32.8498 26C31.0519 26 29.3693 25.6658 27.8019 24.9973C26.2345 24.3289 24.8516 23.4069 23.653 22.2314C22.4775 21.0328 21.5555 19.6498 20.887 18.0824C20.2186 16.5151 19.8844 14.8324 19.8844 13.0346ZM25.0705 13.0346C25.0705 14.164 25.2665 15.2243 25.6583 16.2154C26.0732 17.1835 26.6379 18.0479 27.3525 18.8085C28.09 19.5461 28.9314 20.1223 29.8764 20.5372C30.8445 20.9521 31.8932 21.1596 33.0227 21.1596C34.106 21.1596 35.1087 20.9521 36.0306 20.5372C36.9757 20.1223 37.7939 19.5461 38.4854 18.8085C39.1769 18.0479 39.7186 17.1835 40.1104 16.2154C40.5023 15.2243 40.6982 14.164 40.6982 13.0346C40.6982 11.8821 40.4908 10.8103 40.0759 9.81915C39.684 8.82801 39.1308 7.96365 38.4163 7.22606C37.7248 6.46543 36.9065 5.87766 35.9615 5.46277C35.0165 5.04787 33.9908 4.84042 32.8844 4.84042C31.778 4.84042 30.7523 5.04787 29.8072 5.46277C28.8622 5.87766 28.0324 6.46543 27.3179 7.22606C26.6033 7.96365 26.0501 8.82801 25.6583 9.81915C25.2665 10.8103 25.0705 11.8821 25.0705 13.0346Z" fill="white"/><path d="M71.5235 23.1649C71.2239 23.4876 70.7513 23.8218 70.1059 24.1676C69.4606 24.4902 68.7114 24.7899 67.8586 25.0665C67.0288 25.3431 66.176 25.5621 65.3001 25.7234C64.4242 25.9078 63.5944 26 62.8107 26C60.7363 26 58.8692 25.7004 57.2097 25.1011C55.5501 24.4787 54.1325 23.6259 52.957 22.5426C51.7815 21.4362 50.8825 20.1339 50.2602 18.6356C49.6379 17.1374 49.3267 15.5009 49.3267 13.7261C49.3267 11.398 49.6724 9.38121 50.3639 7.67553C51.0785 5.94681 52.035 4.51773 53.2336 3.3883C54.4552 2.23582 55.8497 1.38298 57.4171 0.829787C59.0075 0.276596 60.6671 0 62.3958 0C64.0324 0 65.5306 0.184397 66.8905 0.553191C68.2505 0.898935 69.4029 1.33688 70.348 1.86702L68.723 6.53457C68.3081 6.30408 67.7549 6.07358 67.0634 5.84308C66.3719 5.61259 65.6689 5.42819 64.9543 5.28989C64.2398 5.12854 63.6059 5.04787 63.0528 5.04787C61.6698 5.04787 60.4481 5.22074 59.3879 5.56649C58.3276 5.91223 57.4286 6.43085 56.6911 7.12234C55.9765 7.81383 55.4348 8.67819 55.0661 9.71542C54.6973 10.7296 54.5129 11.9167 54.5129 13.2766C54.5129 14.4752 54.7203 15.5585 55.1352 16.5266C55.5501 17.4716 56.1263 18.2784 56.8639 18.9468C57.6246 19.6152 58.512 20.1223 59.5262 20.4681C60.5634 20.8138 61.7044 20.9867 62.949 20.9867C63.6636 20.9867 64.3205 20.9406 64.9198 20.8484C65.5191 20.7332 66.0262 20.5603 66.441 20.3298V17.2527H62.0501V12.4122H71.5235V23.1649Z" fill="white"/><path d="M75.6627 13.0346C75.6627 11.2828 75.9969 9.62323 76.6654 8.05585C77.3338 6.48847 78.2558 5.10549 79.4313 3.90691C80.6299 2.68528 82.0129 1.72872 83.5803 1.03723C85.1476 0.345744 86.8303 0 88.6281 0C90.403 0 92.0741 0.345744 93.6414 1.03723C95.2088 1.72872 96.5918 2.68528 97.7904 3.90691C99.012 5.10549 99.957 6.48847 100.625 8.05585C101.317 9.62323 101.663 11.2828 101.663 13.0346C101.663 14.8324 101.317 16.5151 100.625 18.0824C99.957 19.6498 99.012 21.0328 97.7904 22.2314C96.5918 23.4069 95.2088 24.3289 93.6414 24.9973C92.0741 25.6658 90.403 26 88.6281 26C86.8303 26 85.1476 25.6658 83.5803 24.9973C82.0129 24.3289 80.6299 23.4069 79.4313 22.2314C78.2558 21.0328 77.3338 19.6498 76.6654 18.0824C75.9969 16.5151 75.6627 14.8324 75.6627 13.0346ZM80.8489 13.0346C80.8489 14.164 81.0448 15.2243 81.4366 16.2154C81.8515 17.1835 82.4163 18.0479 83.1308 18.8085C83.8684 19.5461 84.7097 20.1223 85.6547 20.5372C86.6228 20.9521 87.6716 21.1596 88.801 21.1596C89.8843 21.1596 90.887 20.9521 91.809 20.5372C92.754 20.1223 93.5723 19.5461 94.2638 18.8085C94.9553 18.0479 95.4969 17.1835 95.8888 16.2154C96.2806 15.2243 96.4765 14.164 96.4765 13.0346C96.4765 11.8821 96.2691 10.8103 95.8542 9.81915C95.4624 8.82801 94.9092 7.96365 94.1946 7.22606C93.5031 6.46543 92.6849 5.87766 91.7398 5.46277C90.7948 5.04787 89.7691 4.84042 88.6627 4.84042C87.5563 4.84042 86.5306 5.04787 85.5856 5.46277C84.6405 5.87766 83.8108 6.46543 83.0962 7.22606C82.3817 7.96365 81.8285 8.82801 81.4366 9.81915C81.0448 10.8103 80.8489 11.8821 80.8489 13.0346Z" fill="white"/></svg>';

  const paymentContainer = document.querySelector(".payment .container");
  if (paymentContainer) {
    paymentContainer.appendChild(logoBlock);
  }
}

function checkScreenSize() {
  if (window.innerWidth <= 1050) {
    removeLogoBlock();
    removePaymentImgBlocks();
    createPaymentImgBlock();
    createLogoBlock();
    stopToggleInterval();
  } else {
    startToggleInterval();
  }
}

checkScreenSize();

window.addEventListener("resize", checkScreenSize);

// ------ modal ------ //

/* const buttons = document.querySelectorAll('.btn');

function toggleActiveModalClass() {
  document.body.classList.toggle('active-modal');
}

buttons.forEach(button => {
  button.addEventListener('click', toggleActiveModalClass);
});
 */

const buttons = document.querySelectorAll('.btn');
let clickTimeout;

function toggleActiveModalClass() {
  document.body.classList.toggle('active-modal');
}

function clickOutsideModal(event) {
  const modalMessage = document.querySelector('.modal-message');

  if (modalMessage && !modalMessage.contains(event.target)) {
    document.body.classList.remove('active-modal');
    document.removeEventListener('click', clickOutsideModal);
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    clearTimeout(clickTimeout);
    document.body.classList.add('active-modal');
    clickTimeout = setTimeout(() => {
      document.addEventListener('click', clickOutsideModal);
    }, 500); // 500 milliseconds (0.5 seconds)
  });
});
