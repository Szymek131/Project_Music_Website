export const select = {
  templateOf: {
    song: '#template-song',
  },

  containerOf: {
    home: '.home',
    search: '.search',
    discover: '.discover',
    pages: '#pages',
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
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    songs: 'songs',
  },
};

export const templates = {
  singleSong: Handlebars.compile(document.querySelector(select.templateOf.song).innerHTML),
};