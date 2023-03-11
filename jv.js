var slideIndex = 1;
showSlides(slideIndex);

// Fungsi untuk menambah atau mengurangi slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Fungsi untuk menampilkan slide saat ini
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}