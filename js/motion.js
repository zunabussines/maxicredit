// Reveals suaves con GSAP + ScrollTrigger. Fallback visible si no carga o si el
// usuario prefiere menos movimiento.
(function () {
  function revealAll() {
    document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in"));
  }

  function run() {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const noMotion = location.search.includes("nomotion");
    if (reduced || noMotion || !window.gsap || !window.ScrollTrigger) { revealAll(); return; }
    const { gsap } = window;
    gsap.registerPlugin(window.ScrollTrigger);
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el, { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: .8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" } });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
