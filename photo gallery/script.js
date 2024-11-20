document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter_buttons button');
    const cards = document.querySelectorAll('.card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-name');
            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-name') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
