const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    console.log(window.innerHeight);
    const triggerBottom = window.innerHeight;

    boxes.forEach( box => {
        const boxCenter = box.getBoundingClientRect().top + 
        box.getBoundingClientRect().height/3;

        if( boxCenter < triggerBottom ){
            box.classList.add('show');
        } else{
            box.classList.remove('show');
        }

    })

}