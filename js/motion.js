// Motion premium con GSAP + ScrollTrigger. Si GSAP no carga, hace fallback visible.
(function () {
  function revealAllFallback() {
    document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in"));
  }

  function run() {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const noMotion = location.search.includes("nomotion");
    if (reduced || noMotion || !window.gsap || !window.ScrollTrigger) { revealAllFallback(); return; }
    const { gsap } = window;
    gsap.registerPlugin(window.ScrollTrigger);

    // Reveals genéricos: fade + rise
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el, { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: .9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%" } });
    });

    // Entrada del hero
    if (document.querySelector(".hero-center")) {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-center h1", { yPercent: 12, autoAlpha: 0, duration: 1 })
        .from(".hero-center .lead", { y: 26, autoAlpha: 0, duration: .9 }, "-=.6")
        .from(".hero-center .scroll-hint", { autoAlpha: 0, duration: .8 }, "-=.4");
    }

    // Calculadora: escala + fade al entrar
    const calc = document.querySelector(".calc-section .calc-card");
    if (calc) {
      gsap.fromTo(calc, { scale: .86, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".calc-section", start: "top 78%" } });
    }

    // Revelado de palabras por scroll (scrub) en frases marcadas
    document.querySelectorAll("[data-scrub-words]").forEach((p) => {
      const words = p.textContent.trim().split(/\s+/);
      p.innerHTML = words.map((w) => `<span class="w" style="opacity:.18">${w}</span>`).join(" ");
      gsap.to(p.querySelectorAll(".w"), {
        opacity: 1, stagger: .06, ease: "none",
        scrollTrigger: { trigger: p, start: "top 82%", end: "bottom 62%", scrub: true },
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
