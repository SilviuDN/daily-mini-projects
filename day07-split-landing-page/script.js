const playstationSide = document.querySelector('.left');
const xBoxSide = document.querySelector('.right');
const container = document.querySelector('.container');

playstationSide.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
})

playstationSide.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
})

xBoxSide.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
})

xBoxSide.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
})

