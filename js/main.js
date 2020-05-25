function callModal() {
    let modalTrigger = document.querySelector('.btn'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close');

    modalTrigger.addEventListener('click', () => {
        modal.classList.add('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        } else if (e.target === modalClose) {
            modal.classList.remove('active');
        };
    });
};

callModal()
