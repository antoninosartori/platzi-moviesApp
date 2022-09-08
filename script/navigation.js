//eventos de botones para navegar
searchIcon.addEventListener('click', () =>{
    location.hash = '#src';
});

searchIconActive.addEventListener('click', () =>{
    location.hash = '#search=' + searchInput.value;
});

searchIconClose.addEventListener('click', () =>{
    location.hash = '#home';
});

linkCategories.addEventListener('click', () =>{
    location.hash = '#categories';
});

linkMovies.addEventListener('click', () =>{
    location.hash = '#movies';
});

linkTv.addEventListener('click', () =>{
    location.hash = '#tv';
});

backArrow.addEventListener('click', () =>{
    history.back();
});

btnTrendsPreview.addEventListener('click', () => {
    location.hash = '#trends'
});
btnTrendsTvPreview.addEventListener('click', () => {
    location.hash = '#topseries'
});


//eventos para los cambios del location
window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){
    if (location.hash.startsWith('#trends')){
        trendsPage();
    }
    else if (location.hash.startsWith('#topseries')){
        topSeriesPage();
    }
    else if (location.hash.startsWith('#src')){
        srcPage();
    }
    else if(location.hash.startsWith('#search=')){
        searchPage();
    }
    else if(location.hash.startsWith('#categories')){
        categoriesPage();
    }
    else if(location.hash.startsWith('#category=')){
        categoryPage();
    }
    else if(location.hash.startsWith('#movies')){
        moviesPage();
    }
    else if(location.hash.startsWith('#teve')){
        seriesPage();
    }
    else if(location.hash.startsWith('#movie=')){
        moviePage();
    }
    else if(location.hash.startsWith('#tv=')){
        seriePage();
    }
    else if(location.hash.startsWith('#seasons')){
        seasonsPage();
    }
    else {
        homePage();
    }
    //sube el scroll al inicio
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function homePage(){
    // header
    header.classList.remove('header-fixed');
    headerContainer.classList.remove('inactive');
    logo.classList.remove('inactive');
    backArrow.classList.add('inactive');
    linkCategories.classList.remove('inactive');
    linkMovies.classList.remove('inactive');
    linkTv.classList.remove('inactive');
    categoriesTitle.classList.add('inactive');
    moviesTitle.classList.add('inactive');
    tvTitle.classList.add('inactive');
    formSearch.classList.add('inactive');
    searchInput.classList.add('inactive');
    searchIcon.classList.remove('inactive');
    searchIconActive.classList.add('inactive');
    searchIconClose.classList.add('inactive');
    genericTitle.classList.add('inactive');
    // contenedores
    homeContainer.classList.remove('inactive');
    categoriesContainer.classList.add('inactive');
    genericContainer.classList.add('inactive');
    movieViewContainer.classList.add('inactive');
    tvViewContainer.classList.add('inactive');

    getTrendsPreview();
    getTopSeriesPreview();
};

function categoriesPage(){
    // header
    header.classList.add('header-fixed');
    headerContainer.classList.remove('inactive');
    logo.classList.add('inactive');
    backArrow.classList.remove('inactive');
    linkCategories.classList.add('inactive');
    linkMovies.classList.add('inactive');
    linkTv.classList.add('inactive');
    categoriesTitle.classList.remove('inactive');
    moviesTitle.classList.add('inactive');
    tvTitle.classList.add('inactive');
    formSearch.classList.add('inactive');
    searchInput.classList.add('inactive');
    searchIcon.classList.add('inactive');
    searchIconActive.classList.add('inactive');
    searchIconClose.classList.add('inactive');
    genericTitle.classList.add('inactive');
    // contenedores
    homeContainer.classList.add('inactive');
    categoriesContainer.classList.remove('inactive');
    movieViewContainer.classList.add('inactive');
    genericContainer.classList.add('inactive');
    tvViewContainer.classList.add('inactive');

    getCategoriesPreview();
};

function trendsPage(){
    // header
    headerContainer.classList.remove('inactive');
    header.classList.add('header-fixed');
    logo.classList.add('inactive');
    backArrow.classList.remove('inactive');
    linkCategories.classList.add('inactive');
    linkMovies.classList.add('inactive');
    linkTv.classList.add('inactive');
    categoriesTitle.classList.add('inactive');
    moviesTitle.classList.add('inactive');
    tvTitle.classList.add('inactive');
    formSearch.classList.add('inactive');
    searchInput.classList.add('inactive');
    searchIcon.classList.add('inactive');
    searchIconActive.classList.add('inactive');
    searchIconClose.classList.add('inactive');
    genericTitle.classList.remove('inactive');
    // contenedores
    homeContainer.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    movieViewContainer.classList.add('inactive');
    genericContainer.classList.remove('inactive');
    tvViewContainer.classList.add('inactive');

    genericTitle.innerHTML = 'Top Movies'
    getTrends();
};

function topSeriesPage(){
    // header
    headerContainer.classList.remove('inactive');
    header.classList.add('header-fixed');
    logo.classList.add('inactive');
    backArrow.classList.remove('inactive');
    linkCategories.classList.add('inactive');
    linkMovies.classList.add('inactive');
    linkTv.classList.add('inactive');
    categoriesTitle.classList.add('inactive');
    moviesTitle.classList.add('inactive');
    tvTitle.classList.add('inactive');
    formSearch.classList.add('inactive');
    searchInput.classList.add('inactive');
    searchIcon.classList.add('inactive');
    searchIconActive.classList.add('inactive');
    searchIconClose.classList.add('inactive');
    genericTitle.classList.remove('inactive');
    // contenedores
    homeContainer.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    movieViewContainer.classList.add('inactive');
    genericContainer.classList.remove('inactive');
    tvViewContainer.classList.add('inactive');

    genericTitle.innerHTML = 'Top Series'
    getTopSeries();
};

function srcPage(){
    // header
    header.classList.remove('header-fixed');
    headerContainer.classList.remove('inactive');
    logo.classList.add('inactive');
    backArrow.classList.add('inactive');
    linkCategories.classList.add('inactive');
    linkMovies.classList.add('inactive');
    linkTv.classList.add('inactive');
    categoriesTitle.classList.add('inactive');
    moviesTitle.classList.add('inactive');
    tvTitle.classList.add('inactive');
    formSearch.classList.remove('inactive');
    searchInput.classList.remove('inactive');
    searchIcon.classList.add('inactive');
    searchIconActive.classList.remove('inactive');
    searchIconClose.classList.remove('inactive');
    genericTitle.classList.add('inactive');
    // contenedores
    homeContainer.classList.remove('inactive');
    categoriesContainer.classList.add('inactive');
    movieViewContainer.classList.add('inactive');
    tvViewContainer.classList.add('inactive');
    genericContainer.classList.add('inactive');
};

function searchPage(){
    // header
    header.classList.add('header-fixed');
    headerContainer.classList.remove('inactive');
    logo.classList.add('inactive');
    backArrow.classList.add('inactive');
    linkCategories.classList.add('inactive');
    linkMovies.classList.add('inactive');
    linkTv.classList.add('inactive');
    categoriesTitle.classList.add('inactive');
    moviesTitle.classList.add('inactive');
    tvTitle.classList.add('inactive');
    formSearch.classList.remove('inactive');
    searchInput.classList.remove('inactive');
    searchIcon.classList.add('inactive');
    searchIconActive.classList.remove('inactive');
    searchIconClose.classList.remove('inactive');
    genericTitle.classList.add('inactive');
    // contenedores
    homeContainer.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    movieViewContainer.classList.add('inactive');
    genericContainer.classList.remove('inactive');    

    const [_, query] = location.hash.split('=');
    getMoviesBySearch(query);

};

function categoryPage(id){
    // header
    headerContainer.classList.remove('inactive');
    header.classList.add('header-fixed');
    logo.classList.add('inactive');
    backArrow.classList.remove('inactive');
    linkCategories.classList.add('inactive');
    linkMovies.classList.add('inactive');
    linkTv.classList.add('inactive');
    categoriesTitle.classList.add('inactive');
    moviesTitle.classList.add('inactive');
    tvTitle.classList.add('inactive');
    formSearch.classList.add('inactive');
    searchInput.classList.add('inactive');
    searchIcon.classList.add('inactive');
    searchIconActive.classList.add('inactive');
    searchIconClose.classList.add('inactive');
    genericTitle.classList.remove('inactive');
    // contenedores
    homeContainer.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    movieViewContainer.classList.add('inactive');
    genericContainer.classList.remove('inactive');

    const [_, categoryData] = location.hash.split('=');
    const [categoryId, categoryName] = categoryData.split('-');
    
    genericTitle.innerHTML = categoryName;

    getMoviesByCategory(categoryId);
};

function moviesPage(){
    // header
    header.classList.add('header-fixed');
    headerContainer.classList.remove('inactive');
    logo.classList.add('inactive');
    backArrow.classList.remove('inactive');
    linkCategories.classList.add('inactive');
    linkMovies.classList.add('inactive');
    linkTv.classList.add('inactive');
    categoriesTitle.classList.add('inactive');
    moviesTitle.classList.remove('inactive');
    tvTitle.classList.add('inactive');
    formSearch.classList.add('inactive');
    searchInput.classList.add('inactive');
    searchIcon.classList.add('inactive');
    searchIconActive.classList.add('inactive');
    searchIconClose.classList.add('inactive');
    genericTitle.classList.add('inactive');
    // contenedores
    homeContainer.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    movieViewContainer.classList.add('inactive');
    genericContainer.classList.remove('inactive');
};

function seriesPage(){
    // header
    header.classList.add('header-fixed');
    headerContainer.classList.remove('inactive');
    logo.classList.add('inactive');
    backArrow.classList.remove('inactive');
    linkCategories.classList.add('inactive');
    linkMovies.classList.add('inactive');
    linkTv.classList.add('inactive');
    categoriesTitle.classList.add('inactive');
    moviesTitle.classList.add('inactive');
    tvTitle.classList.remove('inactive');
    formSearch.classList.add('inactive');
    searchInput.classList.add('inactive');
    searchIcon.classList.add('inactive');
    searchIconActive.classList.add('inactive');
    searchIconClose.classList.add('inactive');
    genericTitle.classList.add('inactive');
    // contenedores
    homeContainer.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    movieViewContainer.classList.add('inactive');
    genericContainer.classList.remove('inactive');
};

function moviePage(){
    // header
    headerContainer.classList.remove('inactive');
    header.classList.add('header-fixed');
    logo.classList.add('inactive');
    backArrow.classList.remove('inactive');
    linkCategories.classList.add('inactive');
    linkMovies.classList.add('inactive');
    linkTv.classList.add('inactive');
    categoriesTitle.classList.add('inactive');
    moviesTitle.classList.add('inactive');
    tvTitle.classList.add('inactive');
    formSearch.classList.add('inactive');
    searchInput.classList.add('inactive');
    searchIcon.classList.add('inactive');
    searchIconActive.classList.add('inactive');
    searchIconClose.classList.add('inactive');
    genericTitle.classList.remove('inactive');
    // contenedores
    homeContainer.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    movieViewContainer.classList.remove('inactive');
    tvViewContainer.classList.add('inactive');
    genericContainer.classList.add('inactive');  

    const [_, movieId] = location.hash.split('=');

    getMovieById(movieId);
};

function seriePage(){
    // header
    headerContainer.classList.remove('inactive');
    header.classList.add('header-fixed');
    logo.classList.add('inactive');
    backArrow.classList.remove('inactive');
    linkCategories.classList.add('inactive');
    linkMovies.classList.add('inactive');
    linkTv.classList.add('inactive');
    categoriesTitle.classList.add('inactive');
    moviesTitle.classList.add('inactive');
    tvTitle.classList.add('inactive');
    formSearch.classList.add('inactive');
    searchInput.classList.add('inactive');
    searchIcon.classList.add('inactive');
    searchIconActive.classList.add('inactive');
    searchIconClose.classList.add('inactive');
    genericTitle.classList.remove('inactive');
    // contenedores
    homeContainer.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    movieViewContainer.classList.add('inactive');
    genericContainer.classList.add('inactive');
    tvViewContainer.classList.remove('inactive');

    const [_, serieId] = location.hash.split('=');
    getSerieById(serieId);
};

function seasonsPage(){
    headerContainer.classList.remove('inactive');
    header.classList.add('header-fixed');
    logo.classList.add('inactive');
    backArrow.classList.remove('inactive');
    linkCategories.classList.add('inactive');
    linkMovies.classList.add('inactive');
    linkTv.classList.add('inactive');
    categoriesTitle.classList.add('inactive');
    moviesTitle.classList.add('inactive');
    tvTitle.classList.add('inactive');
    formSearch.classList.add('inactive');
    searchInput.classList.add('inactive');
    searchIcon.classList.add('inactive');
    searchIconActive.classList.add('inactive');
    searchIconClose.classList.add('inactive');
    genericTitle.classList.remove('inactive');
    // contenedores
    homeContainer.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    movieViewContainer.classList.add('inactive');
    genericContainer.classList.add('inactive');
    tvViewContainer.classList.add('inactive');

    getSeasonsById();
}


