const lightboxLinks = document.querySelectorAll<HTMLAnchorElement>('.lightbox');

if (lightboxLinks.length > 0) {
  const overlay = document.createElement('div');
  overlay.classList.add('lightbox-overlay');
  document.body.appendChild(overlay);

  const overlayImg = document.createElement('img');
  overlay.appendChild(overlayImg);

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('lightbox-close');
  closeBtn.innerHTML = '&times;';
  overlay.appendChild(closeBtn);

  lightboxLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      overlayImg.src = link.href;
      overlay.classList.add('active');
    });
  });

  const closeLightbox = () => overlay.classList.remove('active');
  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}
