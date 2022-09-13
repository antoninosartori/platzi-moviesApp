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
            //const hashMediaType = movie.media_type;
            //location.hash = `${hashMediaType}=${movie.id}`;
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

function createSeries(series, container){
    container.innerHTML = '';

    series.forEach(serie => {
        const tvContainer = document.createElement('article');
        tvContainer.classList.add('tv-container');
        tvContainer.addEventListener('click', () => {
            //const hashMediaType = serie.media_type;
            //location.hash = `${hashMediaType}=${serie.id}`;
            location.hash = `tv=${serie.id}`;
        });
        const tvImg = document.createElement('img');
        tvImg.classList.add('tvImg');
        tvImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + serie.poster_path);
        tvImg.setAttribute('alt', serie.title);

        tvContainer.appendChild(tvImg);
        container.appendChild(tvContainer);
    });
}

function createMultimedia(media, container){
    container.innerHTML = '';
    media.forEach(multimedia => {
        const media_type = multimedia.media_type;

        const mediaContainer = document.createElement('article');
        mediaContainer.classList.add(`${media_type}-container`);
        mediaContainer.addEventListener('click', () => {
            location.hash = `${media_type}=${multimedia.id} `
        });
        const mediaImg = document.createElement('img');
        mediaImg.classList.add(`${media_type}Img`);
        mediaImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + multimedia.poster_path);
        mediaImg.setAttribute('alt', multimedia.title);

        mediaContainer.appendChild(mediaImg);
        container.appendChild(mediaContainer);
    });
}

function createCategories(categories, container, multi){
//function createCategories(categories, container){
    container.innerHTML = "";

    categories.forEach(category => {
        const categoryItem = document.createElement('h4'); //crea el h4
        categoryItem.classList.add('category-item'); //le aegrega la clase
        categoryItem.setAttribute('id', 'id' + category.id); //le agrega un ID
        const categoryTitle = document.createTextNode(category.name); //crea el nombre de la categoria
        categoryItem.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}-${multi}`;
        });

        categoryItem.appendChild(categoryTitle); //mete el texto adentro del h4
        categoryItem.setAttribute('id', 'id' + category.id);
        container.appendChild(categoryItem); //mete el item de la categoria en el contenedor

    });
}

function createMovieImages(moviePosters, container){
    container.innerHTML = "";
    moviePosters.forEach(movie => {
        const movieImageUrL = 'https://image.tmdb.org/t/p/w500/' + movie.file_path;
        const movieImage = document.createElement('img');
        movieImage.setAttribute('src', movieImageUrL);
        movieImage.classList.add('movieImages-Item');
        container.appendChild(movieImage);
        
    });
}

function createSerieImages(tvPosters, container){
    container.innerHTML = "";
    tvPosters.forEach(serie => {
        const tvImageUrl = 'https://image.tmdb.org/t/p/w500/' + serie.file_path;
        const tvImage = document.createElement('img');
        tvImage.setAttribute('src', tvImageUrl);
        tvImage.classList.add('tvImages-Item');
        container.appendChild(tvImage);
    });
}

function createEpisodes(episodes, seasonName){
    genericTitle.textContent = seasonName;
    console.log(episodes);
    episodes.forEach(episode =>{
        alert('no')
    });

}

//llamados a la api
async function getTrendsPreview(){
    const {data} = await api('trending/movie/day');
    const movies  = data.results;

    createMovies(movies, trendScrollContainerPreview);
    //createMultimedia(movies, trendScrollContainerPreview);
}

async function getTopSeriesPreview(){
    const { data } = await api('trending/tv/day');
    const series = data.results;

    createSeries(series, trendTvScrollContainerPreview);
}

async function getTopSeries(){
    const {data} = await api('trending/tv/day');
    const series = data.results;
    
    createSeries(series, genericResults);
}

async function getCategoriesPreview(multi, container){
    const {data} = await api(`genre/${multi}/list`);
//    const {data} = await api(`genre/movie/list`);
    const categories = data.genres;
//    createCategories(categories, categoriesList);
    createCategories(categories, container, multi);
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

async function getSeriesByCategory(id){
    const {data} = await api(`discover/tv`, {
        params:{
            with_genres: id,
        },
    });
    const series  = data.results;

    createSeries(series, genericResults);
}

async function getMoviesBySearch(query){
    const {data} = await api('search/multi', {
        params:{
            query,
        },
    });
    const media = data.results;
    
    createMultimedia(media, genericResults);
}

async function getTrends(){
    const {data} = await api('trending/movie/day');
    const movies  = data.results;

    createMovies(movies, genericResults);
}

async function getMovieById(id){
    //const [subString,_] = location.hash.split('=');//obtengo lo que esta en el hash que seria #movie=123 separandolo con el signo igual
    //mediaType = subString.substring(1); //le saco el primer caracter que era el #
    //const {data: movie } = await api(`${mediaType}/${id}`);
    const {data: movie } = await api('movie/' + id);
    const movieImgUrl = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
    movieViewImg.style.background = `url(${movieImgUrl})`;
    movieViewImg.classList.add('movieView-img');
    genericTitle.textContent = movie.title;
    movieViewDescription.textContent = movie.overview;
    movieViewScore.textContent = movie.vote_average;


    createCategories(movie.genres, movieViewCategoriesContainer);
    getSimilarMoviesById(id);
    getMovieImagesById(id);
};

async function getSerieById(id){
    const {data: serie } = await api('tv/' + id);
    const tvImgUrl = 'https://image.tmdb.org/t/p/w500/' + serie.poster_path;
    tvViewImg.style.background = `url(${tvImgUrl})`;
    tvViewImg.classList.add('tvView-img');
    genericTitle.textContent = serie.name;
    tvViewDescription.textContent = serie.overview;
    tvViewScore.textContent = serie.vote_average;
    //temporadas
    const seasons = serie.seasons;
    
    createCategories(serie.genres, tvViewCategoriesContainer)
    getSerieImagesById(id);
    getSimilarSeriesById(id);
    getSeasonsSerie(seasons, id);
}

async function getSimilarMoviesById(id){
    const {data: movie } = await api(`movie/${id}/similar`);
    const similarMovies = movie.results;
    createMovies(similarMovies, movieRecommendationsScroll);
};

async function getSimilarSeriesById(id){
    const {data: serie } = await api(`tv/${id}/similar`);
    const similarSeries = serie.results;

    createSeries(similarSeries, tvRecommendationsScroll);
};

async function getMovieImagesById(id){
    const {data: movie } = await api(`movie/${id}/images`);
    const moviePosters = movie.backdrops;

    createMovieImages(moviePosters, movieViewScrollImages);
}

async function getSerieImagesById(id){
    const { data: serie} = await api(`tv/${id}/images`);
    const seriePosters = serie.backdrops;

    createSerieImages(seriePosters, tvViewScrollImages);
}

async function getSeasonsSerie(seasons, id){
    seasonContainer.innerHTML = '';
    seasonsMainContainer.classList.add('inactive');    
    seasons.forEach(season => {
        const seasonTitle = document.createElement('h4');
        seasonTitle.classList.add('seasonTitle');
        seasonTitle.textContent = season.name;
        seasonTitle.setAttribute('id', season.id);
        seasonContainer.appendChild(seasonTitle);
        seasonsMainContainer.appendChild(seasonContainer);

        seasonTitle.addEventListener('click', ()=> {
            location.hash = `season=${season.season_number}-tv=${id}-episodes`;
            createEpisodesByNumber(season, id,season.name);
            
        });
    });
}

async function createEpisodesByNumber(season, id, seasonName){
    tvSeasonEpisodesContainer.innerHTML = '';
    genericTitle.textContent = seasonName;
    for (let i = 1; i <= season.episode_count; i++) {
        const {data: episodes} = await api(`/tv/${id}/season/${season.season_number}/episode/${i}`);
        console.log(episodes);
        //crear episodios
        //contenedores de los episodios
        const episodeContainer = document.createElement('article');
        episodeContainer.classList.add('episode-container');
        const episodeHeader = document.createElement('div');
        episodeHeader.classList.add('episode-header');
        const episodeBody = document.createElement('div');
        episodeBody.classList.add('episode-body');
        //episodio parte superior (header)
        const episodeNumber = document.createElement('span');
        episodeNumber.textContent = episodes.episode_number;
        episodeNumber.classList.add('episode-number');
        const episodeName = document.createElement('h3');
        episodeName.textContent = episodes.name;
        episodeName.classList.add('episode-name');
        //episodio parte inferior (body)
        const episodeImg = document.createElement('img');
        episodeImg.classList.add('episode-img');
        episodeImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + episodes.still_path);
        //episodeImg.setAttribute('alt', episodes.name);
        const episodeDescription = document.createElement('p');
        episodeDescription.classList.add('episode-description');
        episodeDescription.textContent = episodes.overview;
        //episodios appends
        episodeHeader.appendChild(episodeNumber);
        episodeHeader.appendChild(episodeName);
        episodeBody.appendChild(episodeImg);
        episodeBody.appendChild(episodeDescription);
        episodeContainer.appendChild(episodeHeader);
        episodeContainer.appendChild(episodeBody);
        tvSeasonEpisodesContainer.appendChild(episodeContainer);
        
    }
}

async function getMoviesPremiere(){
    const {data} = await api('discover/movie', {
        params:{
            sort_by: `revenue.desc`,
        },
    });
    const movies = data.results;

    createMovies(movies, moviesPageScrollContainer);
}

async function getMoviesMostCount(){
    const {data} = await api('discover/movie', {
        params:{
            sort_by: `vote_count.desc`,
        },
    });
    const movies = data.results;

    createMovies(movies, moviesPageLastReleasesMoviesScrollContainer);
}

async function getSeriesMostCount(){
    const {data} = await api('discover/tv', {
        params:{
            sort_by: `vote_count.desc`,
        },
    });
    const series = data.results;

    createSeries(series, seriesPageLastReleasesSeriesScrollContainer);
}

async function getSeriesPremiere(){
    const {data} = await api('discover/tv', {
        params:{
            sort_by: `first_air_date.asc`,
        },
    });
    const series = data.results;

    createSeries(series, seriesPageScrollContainer);
}

async function getSeriesCategories(){
    const { data: categories } = await api('genre/tv/list');
    const tvCategories = categories.genres;
    createCategories(tvCategories, tvCategoriesList);
}



