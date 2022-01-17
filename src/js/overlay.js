(() => {
    const refs = {
      openOverlayBtn: document.querySelector('.product__switch--a'),
      closeOverlayBtn: document.querySelector('.product__close--a'),
      overlay: document.querySelector('.overlay--a'),
    };
  
    refs.openOverlayBtn.addEventListener('click', toggleOverlay);
    refs.closeOverlayBtn.addEventListener('click', toggleOverlay);
  
    function toggleOverlay() {
      refs.overlay.classList.toggle('is-hidden');
    }
})();
  (() => {
    const refs = {
      openOverlayBtn: document.querySelector('.product__switch--b'),
      closeOverlayBtn: document.querySelector('.product__close--b'),
      overlay: document.querySelector('.overlay--b'),
    };
  
    refs.openOverlayBtn.addEventListener('click', toggleOverlay);
    refs.closeOverlayBtn.addEventListener('click', toggleOverlay);
  
    function toggleOverlay() {
      refs.overlay.classList.toggle('is-hidden');
    }
})();
  (() => {
    const refs = {
      openOverlayBtn: document.querySelector('.product__switch--c'),
      closeOverlayBtn: document.querySelector('.product__close--c'),
      overlay: document.querySelector('.overlay--c'),
    };
  
    refs.openOverlayBtn.addEventListener('click', toggleOverlay);
    refs.closeOverlayBtn.addEventListener('click', toggleOverlay);
  
    function toggleOverlay() {
      refs.overlay.classList.toggle('is-hidden');
    }
  })();
