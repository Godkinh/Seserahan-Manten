"use strict";

// Data produk
var produkData = [{
  title: "Seserahan",
  subtitle: "Natural Glamour",
  desc: "Penggunaan tray coklat natural dengan perpaduan bunga artificial nuansa merah dan emas, menjadikan seserahan tema natural glamour ini lebih cantik dan mewah menjadi pilihan calon pengantin."
}, {
  title: "Seserahan Beauty",
  subtitle: "Modern Elegant",
  desc: "Paket seserahan dengan sentuhan modern elegan, menggunakan warna lembut dipadukan dengan dekorasi elegan."
}, {
  title: "Seserahan Premium",
  subtitle: "Luxury Style",
  desc: "Pilihan seserahan eksklusif dengan hiasan mewah, sesuai untuk calon pengantin yang ingin tampilan lebih istimewa."
}, {
  title: "Seserahan Collection",
  subtitle: "Special Edition",
  desc: "Koleksi seserahan terbaru dengan desain unik dan inovatif, memberikan sentuhan modern pada tradisi seserahan yang elegan."
}]; // Swiper thumbnail

var thumbSwiper = new Swiper(".produk-thumbs", {
  spaceBetween: 10,
  slidesPerView: 3,
  watchSlidesProgress: true
}); // Swiper utama

var mainSwiper = new Swiper(".produk-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: thumbSwiper
  },
  on: {
    slideChange: function slideChange() {
      updateDetail(this.activeIndex);
    }
  }
}); // Fungsi update detail produk

// Make mainSwiper globally available
window.mainSwiper = mainSwiper;

function updateDetail(index) {
  var detail = produkData[index];
  document.getElementById("produk-title").textContent = detail.title;
  document.getElementById("produk-subtitle").textContent = detail.subtitle;
  document.getElementById("produk-desc").textContent = detail.desc;
} // Set default awal


updateDetail(0);
//# sourceMappingURL=product.dev.js.map
