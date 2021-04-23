const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3b7b47468981b21cf4d8bb9f452592e8&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3b7b47468981b21cf4d8bb9f452592e8&query=';

const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
    // console.log(data.results);
}

function showMovies(movies){
    main.innerHTML = '';

    movies.forEach( (movie) => {
        const { title, backdrop_path, vote_average, overview} = movie;
        console.log( `title: ${title}, backdrop_path: ${backdrop_path}, vote_average: ${vote_average}, overview: ${overview}`)
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + backdrop_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>                
            </div>

            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>  
        `
        main.appendChild(movieEl);
    })

    

}

function getClassByRate(vote){
    if(vote >= 8){
        return 'green';
    }else if(vote >= 5){
        return 'orange';
    }else{
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); //so it does not actually submit the page

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== ''){
        // console.log(SEARCH_API + searchTerm)
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    }else{
        window.location.reload; 
        //just reload the page if we submit with null search
    }

})