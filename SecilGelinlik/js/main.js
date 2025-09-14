const images = [
  'https://images.unsplash.com/photo-1632920660141-9bae0a4fa20a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGRyZXNzJTIwMTIwMHg4MDB8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1746730921458-13e3fb521d10?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlZGRpbmclMjBkcmVzcyUyMDEyMDB4ODAwfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1728210232879-e100c63ea7ff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmclMjBkcmVzcyUyMDEyMDB4ODAwfGVufDB8fDB8fHww'
];

let index = 0;
const hero = document.querySelector('.hero');
setInterval(() => {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = `url(${images[index]})`;
}, 5000);

// Basit parallax efekt
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  hero.style.backgroundPositionY = -(scroll * 0.3) + 'px';
});
window.addEventListener('scroll', () => {
  if(window.innerWidth > 768){
    const scroll = window.scrollY;
    hero.style.backgroundPositionY = -(scroll * 0.3) + 'px';
  }
});
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
// Lightbox
const lightboxLinks = document.querySelectorAll('.lightbox');
const overlay = document.createElement('div');
overlay.classList.add('lightbox-overlay');
document.body.appendChild(overlay);

const overlayImg = document.createElement('img');
overlay.appendChild(overlayImg);

// Çarpı butonu
const closeBtn = document.createElement('span');
closeBtn.classList.add('lightbox-close');
closeBtn.innerHTML = '&times;'; // X sembolü
overlay.appendChild(closeBtn);

lightboxLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    overlayImg.src = link.href;
    overlay.classList.add('active');
  });
});

// Overlay kapatma
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") overlay.classList.remove("active");
  });