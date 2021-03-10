const jokeText = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJokeAsync);
generateJokeAsync();

// jokeBtn.addEventListener('click', generateJokeFetch);
// generateJokeFetch();

//********************* ASYNC & AWAIT ***********************/

async function generateJokeAsync(){
    const config = {
        headers:{
            Accept: 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    const joke = data.joke;
    console.log(data);
    jokeText.textContent = data.joke;    
}



//********************* FETCH ***********************/

function generateJokeFetch(){
    const config = {
        headers:{
            Accept: 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', config)
    .then( res => res.json())
    .then( data => {
        console.log(data);
        jokeText.textContent = data.joke;
    });


    // fetch('https://icanhazdadjoke.com/', {
    //     headers: {
    //         Accept: 'application/json'
    //     }
    // }).then( res => {
    //     console.log(res);
    // })    
}