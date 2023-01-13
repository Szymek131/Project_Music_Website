import { settings, select, classNames } from './settings.js';
import CategoryFilterWidget from './components/CategoryFilterWidget.js';
import Song from './components/Song.js';
import Home from './components/Home.js';


const app = {

  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    console.log(thisApp.pages);
    thisApp.navLinks = document.querySelectorAll(select.nav.navLinks);
    console.log(thisApp.navLinks);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[2].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        event.preventDefault();
        const clickedElement = this;
        const id = clickedElement.getAttribute('href').replace('#', '');
        console.log(id);
        thisApp.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initSongs: function(){
    const thisApp = this;

    thisApp.songs = {};

    const url = settings.db.url + '/' + settings.db.songs;
    console.log(url);

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        thisApp.songs = [];
        thisApp.songs = parsedResponse;
        thisApp.initWidgets();
        thisApp.initSearch();
        thisApp.initDiscovery();
      });
  },

  initWidgets: function(){
    const thisApp = this;
    for(let song of thisApp.songs){
      new Song(select.containerOf.home, song);
    }
    new CategoryFilterWidget();
  },

  initSearch: function(){
    const thisApp = this;
    for(let song of thisApp.songs){
      
      if(song.title == 'At The Top'){
        new Song(select.containerOf.search, song);
      }
    }
  },

  initDiscovery: function(){
    const thisApp = this;
    new Song(select.containerOf.discover, thisApp.songs[Math.floor(Math.random()*thisApp.songs.length)]);
  },

  initHome: function(){
    new Home(select.containerOf.home);
    new GreenAudioPlayer('.gap-example');
  },

  init: function(){
    const thisApp = this;
    console.log('App starting');
    thisApp.initPages();
    thisApp.initSongs();
    thisApp.initHome();
  },
};

app.init();