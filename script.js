document.addEventListener("DOMContentLoaded", function () {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
  const mainContent = document.querySelector('.main-content');
  setTimeout(() => {
    mainContent.classList.add('loaded');
  }, 100);
  const headerTitle = document.querySelector('.header h1');
  if (headerTitle) {
    const originalText = headerTitle.textContent.trim();
    headerTitle.textContent = "";
    let i = 0;
    function typeWriter() {
      if (i < originalText.length) {
        headerTitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    setTimeout(typeWriter, 1500);
  }
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const btnCloseModal = document.querySelector('.btn--close-modal');
  const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
  const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };
  btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  
});
