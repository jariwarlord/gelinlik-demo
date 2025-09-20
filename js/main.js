// =======================
// Hero Slideshow + Parallax
// =======================
const hero = document.querySelector('.hero');
const images = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg'
];

let index = 0;

// İlk arka plan
hero.style.backgroundImage = `url(${images[index]})`;

// Slideshow
setInterval(() => {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = `url(${images[index]})`;
}, 5000);

// Parallax (sadece masaüstü için)
window.addEventListener('scroll', () => {
  if (window.innerWidth > 768) {
    const scroll = window.scrollY;
    hero.style.backgroundPositionY = -(scroll * 0.3) + 'px';
  }
});


// =======================
// Hamburger Menü
// =======================
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active'); // animasyon için istersen
  });
}


// =======================
// Lightbox
// =======================
const lightboxLinks = document.querySelectorAll('.lightbox');

if (lightboxLinks.length > 0) {
  const overlay = document.createElement('div');
  overlay.classList.add('lightbox-overlay');
  document.body.appendChild(overlay);

  const overlayImg = document.createElement('img');
  overlay.appendChild(overlayImg);

  // Çarpı butonu
  const closeBtn = document.createElement('span');
  closeBtn.classList.add('lightbox-close');
  closeBtn.innerHTML = '&times;';
  overlay.appendChild(closeBtn);

  // Lightbox açma
  lightboxLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      overlayImg.src = link.href;
      overlay.classList.add('active');
    });
  });

  // Lightbox kapatma
  const closeLightbox = () => overlay.classList.remove('active');
  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeLightbox(); // boş alana tıklandığında da kapansın
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}
(function () {
    const form = document.getElementById("whatsappForm");
    const WA_NUMBER = "905441726244"; // <-- başında 0 yok, ülke koduyla (TR: 90)

    const encode = (str) => encodeURIComponent(str).replace(/%20/g, "%20");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !phone || !message) {
        alert("Lütfen tüm alanları doldurun.");
        return;
      }

      // Mesaj şablonu (satır sonları için %0A)
      const text =
        `Merhaba, randevu almak istiyorum.%0A` +
        `Ad Soyad: ${encode(name)}%0A` +
        `Telefon: ${encode(phone)}%0A` +
        `Mesaj: ${encode(message)}`;

      // wa.me (mobil/masaüstü uyumlu)
      const url = `https://wa.me/${WA_NUMBER}?text=${text}`;

      // Yeni sekmede açmayı dener; engellenirse aynı sekmede yönlendirir
      const win = window.open(url, "_blank");
      if (!win) window.location.href = url;
    });
  })();