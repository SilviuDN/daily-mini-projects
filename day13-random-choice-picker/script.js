const tagsEl = document.getElementById('tags');
const choices = document.getElementById('choices');

choices.focus();

choices.addEventListener('keyup', e =>{
    tags = createTags(e.target.value);

    if(e.key === 'Enter' ){
        setTimeout( () => {
            e.target.value = '';
        }, 50);

        randomSelect();
    }
})

function createTags(input){
    const tags = input.split(',')
                    .filter(tag => tag.trim() !== '')
                    .map(tag => tag.trim());
    console.log(tags);

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect(){
    const times = 30;

    //simulating roulette - 30 spins
    const interval = setInterval( () => {
        const randomTag = pickRandomTag();   
        
        highlightTag(randomTag);

        setTimeout( () => {
            unHighlightTag(randomTag);
        }, 100)
    }, 100)

    setTimeout( () => {
        clearInterval(interval);

    //setting WinningChoice
        const randomWinningTag = pickRandomTag();
        highlightTag(randomWinningTag);




    }, times * 100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    randomIdx = Math.floor( Math.random() * tags.length); 
    console.log(randomIdx);
    return tags[randomIdx];    
}

function highlightTag(tag){
    tag.classList.add('highlight');
}

function unHighlightTag(tag){
    tag.classList.remove('highlight');
}
