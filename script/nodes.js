
// header
const header = document.querySelector('header');
const headerContainer = document.querySelector('.header-container');
const logo = document.querySelector('.logo');
const backArrow = document.querySelector('.backArrow');
const linkCategories = document.querySelector('#categories-link');
const linkMovies = document.querySelector('#movies-link');
const linkTv = document.querySelector('#tv-link');
const categoriesTitle = document.querySelector('#category-title');
const moviesTitle = document.querySelector('#movies-title');
const tvTitle = document.querySelector('#tv-title');
const formSearch = document.querySelector('.form-search');
const searchIcon = document.querySelector('#search-icon');
const searchInput = document.querySelector('#search-input');
const searchIconClose = document.querySelector('#search-iconClose');
const searchIconActive = document.querySelector('#search-iconActive');
const genericTitle = document.querySelector('#generic-title');


// contenedores principales
const homeContainer = document.querySelector('#home-container');
const categoriesContainer = document.querySelector('#categories-container');
const genericContainer = document.querySelector('.generic-list');
const movieViewContainer = document.querySelector('.movie-view');
const tvViewContainer = document.querySelector('.tv-view');
const tvSeasonEpisodesContainer = document.querySelector('.seasonEpisodes-Container');
const moviesPageContainer = document.querySelector('.movies-pageContainer');
const seriesPageContainer = document.querySelector('.series-pageContainer');

// contenedores especificos
const trendScrollContainerPreview = document.querySelector('.trend-scrollContainerPreview');
const trendTvScrollContainerPreview = document.querySelector('.trendTv-scrollContainerPreview');
const categoriesList = document.querySelector('.categories-list');
const tvCategoriesList = document.querySelector('.tvCategories-list');
const moviesCategoriesList = document.querySelector('.moviesCategories-list');
const moviesPageScrollContainer = document.querySelector('.moviesPage-revenuesMoviesScrollContainer');
const seriesPageScrollContainer = document.querySelector('.seriesPage-revenuesSeriesScrollContainer');
const moviesPageLastReleasesMoviesScrollContainer = document.querySelector('.moviesPage-epicMoviesScrollContainer');
const seriesPageLastReleasesSeriesScrollContainer = document.querySelector('.seriesPage-epicSeriesScrollContainer');
const genericResults = document.querySelector('.generic-results');

//elementos
const categoryItem = document.querySelector('.category-item');

// botones de las secciones
const btnTrendsPreview = document.querySelector('#btn-trendsPreview');
const btnTrendsTvPreview = document.querySelector('#btn-trendsTvPreview');
const btnGoHome = document.querySelector('.btn-goHome');

//pelicula 
const movieContainer = document.querySelector('.movie-container');
const movieImg = document.querySelector('.movieImg');
const movieViewImg = document.querySelector('.movieView-img');
const movieViewScore = document.querySelector('.movie-score');
const movieViewDescription = document.querySelector('.movie-description');
const movieViewCategoriesContainer = document.querySelector('.movieView-categoryContainer');
const movieViewCategoryItem = document.querySelector('.movieView-category-item');
const recommendations = document.querySelector('.recommendations');
const movieRecommendationsScroll = document.querySelector('.movie-recommendations-scroll');
const movieViewScrollImages = document.querySelector('.movieView-ScrollImages');
const btnMoviesCategories = document.querySelector('#btn-moviesCategories');

//serie
const tvContainer = document.querySelector('.tv-container');
const tvImg = document.querySelector('.tvImg');
const tvViewImg = document.querySelector('.tvView-img');
const tvViewScore = document.querySelector('.tv-score');
const tvViewDescription = document.querySelector('.tv-description');
const tvViewCategoriesContainer = document.querySelector('.tvView-categoryContainer');
const tvViewCategoryItem = document.querySelector('.tvView-category-item');
const tvRecommendationsScroll = document.querySelector('.tv-recommendations-scroll');
const tvViewScrollImages = document.querySelector('.tvView-ScrollImages');
const btnTvCategories = document.querySelector('#btn-tvCategories');

//temporadas
const btnSeasonsPreview = document.querySelector('#btn-seasonsPreview');
const seasonsMainContainer = document.querySelector('.seasonsMainContainer');
const seasonContainer = document.querySelector('.season-container');
const seasonTitle = document.querySelector('.seasonTitle');
//episodios
const episodeHeader = document.querySelector('.episode-header');
const episodeBody = document.querySelector('.episode-body');
const episodeContainer = document.querySelector('.episode-container');
