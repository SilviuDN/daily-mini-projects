const toggledButtons = document.querySelectorAll('.faq-toggle');

toggledButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active');
    })
})