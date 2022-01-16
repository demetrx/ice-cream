(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-mobile-menu-open]'),
      closeModalBtn: document.querySelector('[data-mobile-menu-close]'),
      modal: document.querySelector('[data-mobile-menu]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('mobile-menu--shown');
    }
})();
  
const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset; 

            if (document.querySelector('[data-mobile-menu]').classList.contains('mobile-menu--shown')) {
                document.querySelector('[data-mobile-menu]').classList.remove('mobile-menu--shown');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}