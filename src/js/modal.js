(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      openModalBtnTablet: document.querySelector('[data-modal-open-tablet]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtnTablet.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('backdrop--is-hidden');
    }
})();

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-about-open]'),
      closeModalBtn: document.querySelector('[data-modal-about-close]'),
      modal: document.querySelector('[data-modal-about]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('backdrop--is-hidden');
    }
})();

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-locations-open]'),
      openModalBtnB: document.querySelector('[data-modal-locations-open-b]'),
      closeModalBtn: document.querySelector('[data-modal-locations-close]'),
      modal: document.querySelector('[data-modal-locations]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtnB.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('backdrop--is-hidden');
    }
})();
  
