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
