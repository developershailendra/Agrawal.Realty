document.body.classList.add("loading");

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  window.setTimeout(() => {
    preloader?.classList.add("is-hidden");
    document.body.classList.remove("loading");
  }, 650);
});

const revealItems = document.querySelectorAll(
  ".property-card, .business-card, .service-grid article, .gallery-project, .detail-panel, .update-panel"
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const header = document.querySelector(".site-header");

window.addEventListener(
  "scroll",
  () => {
    const progress = Math.min(window.scrollY / 500, 1);
    header?.style.setProperty("background", `rgba(8, 10, 9, ${0.64 + progress * 0.24})`);
  },
  { passive: true }
);
