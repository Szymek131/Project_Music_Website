export const select = {
  templateOf: {
    song: '#template-song',
    homeCategoryWidget: '#template-home-category-widget',
    searchWidget: '#template-search-widget',
    subscribe: '#template-subscribe',
    footer: '#template-footer',
  },

  containerOf: {
    home: '.home',
    search: '.search',
    discover: '.discover',
    pages: '#pages',
    categoriesContainer: '.home-category-container',
    searchFilterContainer: '.search-widget-container',
    homeSong: '.home > .song-container',
    searchSong: '.search > .song-container',
    song: '.song-container',
    categoryLink: '.category-link',
    searchSubmitButton: '.search-btn',
    searchInput: '#search-input',
    selectElement: '#categories',
    songTitle: '.search > .song-container > .song-title > #song-title',
    songCategories: '.search > .song-container > .song-description > #song-categories',
  },

  nav: {
    navLinks: '.main-nav a',
  }
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
  songs: {
    hidden: 'hidden',
  },
  links: {
    active: 'active',
    categoryLink: 'category-link',
  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    songs: 'songs',
  },
};

export const templates = {
  singleSong: Handlebars.compile(document.querySelector(select.templateOf.song).innerHTML),
  homeCategoryWidget: Handlebars.compile(document.querySelector(select.templateOf.homeCategoryWidget).innerHTML),
  searchWidget: Handlebars.compile(document.querySelector(select.templateOf.searchWidget).innerHTML),
  subscribe: Handlebars.compile(document.querySelector(select.templateOf.subscribe).innerHTML),
  footer: Handlebars.compile(document.querySelector(select.templateOf.footer).innerHTML),
};