
(function() {
  function createSlider(gallery) {
    const images = Array.from(gallery.querySelectorAll('img'));
    if (images.length <= 1) return;

    // Slider container
    const slider = document.createElement('div');
    slider.className = 'gallery-slider';
    slider.tabIndex = 0;

    // Slide wrapper
    const slidesWrapper = document.createElement('div');
    slidesWrapper.className = 'gallery-slides';
    slidesWrapper.style.width = images.length * 100 + '%';
    slidesWrapper.style.display = 'flex';
    slidesWrapper.style.transition = 'transform 0.5s cubic-bezier(.4,0,.2,1)';

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
    images.forEach((img) => {
      const slide = document.createElement('div');
      slide.className = 'gallery-slide';
      slide.style.flex = '0 0 100%';
      slide.style.display = 'flex';
      slide.style.justifyContent = 'center';
      slide.style.alignItems = 'center';
      slide.appendChild(img);
      slidesWrapper.appendChild(slide);
    });

    slider.appendChild(prevBtn);
    slider.appendChild(slidesWrapper);
    slider.appendChild(nextBtn);
    gallery.parentNode.replaceChild(slider, gallery);

    let current = 0;
    function showSlide(idx) {
      if (idx < 0) idx = images.length - 1;
      if (idx >= images.length) idx = 0;
      slidesWrapper.style.transform = `translateX(-${idx * (100 / images.length)}%)`;
      current = idx;
    }
    function prev() {
      showSlide(current - 1);
    }
    function next() {
      showSlide(current + 1);
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
    showSlide(0);
  }
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.gallery').forEach(createSlider);
  });
})(); 