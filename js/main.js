function callModal() {
    let modalTrigger = document.querySelector('.btn'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close');
        
    modalTrigger.onclick = function() {
        modal.classList.add('active')
    };

    modal.onclick = function(e)  {
        if (e.target === modal) {
            modal.classList.remove('active')
        } else if (e.target === modalClose) {
            modal.classList.remove('active')
        }
    };
}

callModal()

/* хотел вместо onclick использовать addEventListener, но он не работал в explorer */
