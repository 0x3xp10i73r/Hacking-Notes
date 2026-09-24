(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");

  if (reducedMotion.matches || !finePointer.matches) {
    return;
  }

  const glow = document.createElement("div");
  glow.className = "kb-cursor-glow";
  glow.setAttribute("aria-hidden", "true");
  document.body.appendChild(glow);
  const pageZoom = Number.parseFloat(getComputedStyle(document.body).zoom) || 1;

  let frame = 0;
  let x = -100;
  let y = -100;

  document.addEventListener("pointermove", (event) => {
    x = event.clientX;
    y = event.clientY;

    if (!frame) {
      frame = requestAnimationFrame(() => {
        glow.style.left = `${x / pageZoom}px`;
        glow.style.top = `${y / pageZoom}px`;
        frame = 0;
      });
    }
  }, { passive: true });

  document.addEventListener("pointerdown", (event) => {
    const ripple = document.createElement("span");
    ripple.className = "kb-click-ripple";
    ripple.setAttribute("aria-hidden", "true");
    ripple.style.left = `${event.clientX / pageZoom}px`;
    ripple.style.top = `${event.clientY / pageZoom}px`;
    document.body.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  }, { passive: true });
})();
