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
  
