function callModal() {
    let modalTrigger = document.querySelector('.btn'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close');
        
    modalTrigger.onclick = () => {
        modal.classList.add('active');
    }

    modal.onclick = e => {
        if (e.target === modal || e.target === modalClose) {
            modal.classList.remove('active');
        }
    }
}

callModal();

/* хотел вместо onclick использовать addEventListener, но он не работал в explorer */
