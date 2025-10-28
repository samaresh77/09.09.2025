(() => {
  const triggers = [...document.querySelectorAll('.lightbox-trigger')];
  const lb = document.querySelector('.lightbox');
  if (!lb || !triggers.length) return;

  const lbImg = lb.querySelector('.lightbox-image');
  const lbCaption = lb.querySelector('.lightbox-caption');
  const btnClose = lb.querySelector('.lightbox-close');
  const btnPrev = lb.querySelector('.lightbox-prev');
  const btnNext = lb.querySelector('.lightbox-next');
  const backdrop = lb.querySelector('.lightbox-backdrop');
  const focusables = [btnClose, btnPrev, btnNext];

  let currentIndex = 0;
  let lastActive = null;

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  function open(index) {
    currentIndex = index;
    lastActive = document.activeElement;
    update();
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.querySelector('main')?.setAttribute('inert', '');
    btnClose.focus();
    document.addEventListener('keydown', onKey);
  }

  function close() {
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey);
    document.querySelector('main')?.removeAttribute('inert');
    if (lastActive) lastActive.focus();
  }

  function onKey(e) {
    if (e.key === 'Escape') return close();
    if (e.key === 'ArrowRight') return next();
    if (e.key === 'ArrowLeft') return prev();
    if (e.key === 'Home') { currentIndex = 0; return update(); }
    if (e.key === 'End') { currentIndex = triggers.length - 1; return update(); }
    if (e.key === 'Tab') {
      const dir = e.shiftKey ? -1 : 1;
      const i = (focusables.indexOf(document.activeElement) + dir + focusables.length) % focusables.length;
      focusables[i].focus();
      e.preventDefault();
    }
  }

  function update() {
    const link = triggers[currentIndex];
    const href = link.getAttribute('href');
    const fig = link.closest('figure');
    const caption = fig?.querySelector('figcaption')?.textContent?.trim() || 'Photo';
    lbImg.src = href;
    lbImg.alt = caption;
    lbCaption.textContent = caption;
    // Preload neighbors
    const nextIdx = (currentIndex + 1) % triggers.length;
    const prevIdx = (currentIndex - 1 + triggers.length) % triggers.length;
    [nextIdx, prevIdx].forEach(i => {
      const img = new Image();
      img.src = triggers[i].getAttribute('href');
    });
  }

  function next() {
    currentIndex = (currentIndex + 1) % triggers.length;
    update();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + triggers.length) % triggers.length;
    update();
  }

  // Open on click
  triggers.forEach(t => {
    t.addEventListener('click', e => {
      e.preventDefault();
      const idx = Number(t.dataset.index);
      if (!Number.isNaN(idx)) open(idx);
    });
  });

  // Close & navigate
  [btnClose, backdrop].forEach(el => el.addEventListener('click', close));
  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);

  // Touch gestures
  lb.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  lb.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    const dx = touchEndX - touchStartX;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  }, { passive: true });

})();