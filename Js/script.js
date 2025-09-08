// Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Animasi hamburger jadi X
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});

/* Produk Kami Slide Gambar */
// Inisialisasi Swiper thumbnails
var thumbsSwiper = new Swiper(".produk-thumbs", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});

// Inisialisasi Swiper utama
var mainSwiper = new Swiper(".produk-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbsSwiper,
  },
});

// Ganti deskripsi produk saat slide berubah
mainSwiper.on('slideChange', function () {
  let index = mainSwiper.realIndex; // FIX pakai realIndex
  document.querySelectorAll('.produk-info').forEach((info, i) => {
    info.classList.toggle('active', i === index);
  });
});


// Testimoni Slider
const swiperTestimoni = new Swiper(".testimoni-swiper", {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
