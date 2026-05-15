import Lenis from 'lenis';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  document.documentElement.classList.add('lenis-active');

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;
    const anchor = target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const el = document.querySelector(href);
    if (!el) return;
    event.preventDefault();
    lenis.scrollTo(el as HTMLElement, { offset: -16 });
  });
}
