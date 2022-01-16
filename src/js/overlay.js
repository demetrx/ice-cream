(() => {
    const refs = {
      openOverlayBtn: document.querySelector('.product-list__button'),
      closeOverlayBtn: document.querySelector('.overlay__close'),
      overlay: document.querySelector('.overlay'),
    };
  
    refs.openOverlayBtn.addEventListener('click', toggleOverlay);
    refs.closeOverlayBtn.addEventListener('click', toggleOverlay);
  
    function toggleOverlay() {
      refs.overlay.classList.toggle('overlay--shown');
    }
  })();
