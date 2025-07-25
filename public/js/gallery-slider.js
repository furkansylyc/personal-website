// Basit vanilla JS galeri slider
(function() {
  function createSlider(gallery) {
    const images = Array.from(gallery.querySelectorAll('img'));
    if (images.length <= 1) return; // Tek görsel varsa slider gerekmez

    // Slider container
    const slider = document.createElement('div');
    slider.className = 'gallery-slider';
    slider.tabIndex = 0;

    // Slide wrapper
    const slidesWrapper = document.createElement('div');
    slidesWrapper.className = 'gallery-slides';

    // Ok butonları
    const prevBtn = document.createElement('button');
    prevBtn.className = 'gallery-arrow gallery-arrow-left';
    prevBtn.innerHTML = '&#8592;';
    prevBtn.setAttribute('aria-label', 'Önceki fotoğraf');
    const nextBtn = document.createElement('button');
    nextBtn.className = 'gallery-arrow gallery-arrow-right';
    nextBtn.innerHTML = '&#8594;';
    nextBtn.setAttribute('aria-label', 'Sonraki fotoğraf');

    // Slide'ları ekle
    images.forEach((img, i) => {
      const slide = document.createElement('div');
      slide.className = 'gallery-slide';
      if (i === 0) slide.classList.add('active');
      slide.appendChild(img);
      slidesWrapper.appendChild(slide);
    });

    slider.appendChild(prevBtn);
    slider.appendChild(slidesWrapper);
    slider.appendChild(nextBtn);
    gallery.parentNode.replaceChild(slider, gallery);

    let current = 0;
    const slides = Array.from(slidesWrapper.children);
    function showSlide(idx) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
      });
      current = idx;
    }
    function prev() {
      showSlide((current - 1 + slides.length) % slides.length);
    }
    function next() {
      showSlide((current + 1) % slides.length);
    }
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
    // Klavye desteği
    slider.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    });
    // Swipe desteği
    let startX = null;
    slidesWrapper.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });
    slidesWrapper.addEventListener('touchend', e => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 40) prev();
      else if (dx < -40) next();
      startX = null;
    });
  }
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.gallery').forEach(createSlider);
  });
})(); 