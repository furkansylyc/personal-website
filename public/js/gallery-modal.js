window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.gallery img').forEach(function(img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      const modalBg = document.createElement('div');
      modalBg.className = 'gallery-modal-bg';
      const modalImg = document.createElement('img');
      modalImg.className = 'gallery-modal-img';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      const closeBtn = document.createElement('button');
      closeBtn.className = 'gallery-modal-close';
      closeBtn.innerHTML = '&times;';
      closeBtn.onclick = function() { document.body.removeChild(modalBg); };
      modalBg.onclick = function(e) {
        if (e.target === modalBg) document.body.removeChild(modalBg);
      };
      modalBg.appendChild(modalImg);
      modalBg.appendChild(closeBtn);
      document.body.appendChild(modalBg);
    });
  });
}); 