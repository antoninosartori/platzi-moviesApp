const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

//funciones constructoras
function createMovies (movies, container){
    container.innerHTML = '';
    
    movies.forEach(movie => {
        const movieContainer = document.createElement('article'); //crear el contenedor de la pelicula
        movieContainer.classList.add('movie-container'); //le agrega la clase
        movieContainer.addEventListener('click', ()=>{//click para ingresar a la pelcula
            location.hash = 'movie=' + movie.id;
        });
        const movieImg = document.createElement('img'); //crear la img de la pelicula/serie
        movieImg.classList.add('movieImg'); //le agrega la clase
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + movie.poster_path); //le agrega el source
        movieImg.setAttribute('alt', movie.title); //le agrega el source

        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
    });
}

function createCategories(categories, container){
    container.innerHTML = "";

    categories.forEach(category => {
        const categoryItem = document.createElement('h4'); //crea el h4
        categoryItem.classList.add('category-item'); //le aegrega la clase
        categoryItem.setAttribute('id', 'id' + category.id); //le agrega un ID
        const categoryTitle = document.createTextNode(category.name); //crea el nombre de la categoria
        categoryItem.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`;
        });

        categoryItem.appendChild(categoryTitle); //mete el texto adentro del h4
        categoryItem.setAttribute('id', 'id' + category.id);
        container.appendChild(categoryItem); //mete el item de la categoria en el contenedor
    });
}

//llamados a la api
async function getTrendsPreview(){
    const {data} = await api('trending/movie/day');
    const movies  = data.results;

    createMovies(movies, trendScrollContainerPreview);
}

async function getCategoriesPreview(){
    const {data} = await api('genre/movie/list');
    const categories = data.genres;
    
    createCategories(categories, categoriesList);
}

async function getMoviesByCategory(id){
    const {data} = await api('discover/movie', {
        params:{
            with_genres: id,
        },
    });
    const movies  = data.results;

    createMovies(movies, genericResults);
}

async function getMoviesBySearch(query){
    const {data} = await api('search/multi', {
        params:{
            query,
        },
    });
    const movies  = data.results;

    createMovies(movies, genericResults);
}

async function getTrends(){
    const {data} = await api('trending/movie/day');
    const movies  = data.results;

    createMovies(movies, genericResults);
}

async function getMovieById(id){
    const {data: movie } = await api('movie/' + id);

    const movieImgUrl = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
    movieViewImg.style.background = `url(${movieImgUrl})`;
    movieViewImg.classList.add('movieView-img');
    genericTitle.textContent = movie.title;
    movieViewDescription.textContent = movie.overview;
    movieViewScore.textContent = movie.vote_average;


    createCategories(movie.genres, movieViewCategoriesContainer);
    getSimilarMoviesById(id);
}

async function getSimilarMoviesById(id){
    const {data: movie } = await api(`movie/${id}/similar`);
    const similarMovies = movie.results;

    createMovies(similarMovies, movieRecommendationsScroll);
};