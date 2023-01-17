import { settings, select, classNames } from './settings.js';
import CategoryFilterWidget from './components/CategoryFilterWidget.js';
import Song from './components/Song.js';
import Home from './components/Home.js';
import Search from './components/Search.js';
import SearchWidget from './components/SearchWidget.js';
import Subscribe from './components/Subscribe.js';
import Footer from './components/Footer.js';


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

    const url = settings.db.url + '/' + settings.db.songs;
    console.log(url);

    thisApp.data = {
      categories: [],
    };
    
    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        thisApp.songs = [];
        thisApp.songs = parsedResponse;
        thisApp.data.song = parsedResponse;
        console.log(thisApp.data);

        for(let song of thisApp.songs){
          for(let category of song.categories){
            if(!thisApp.data.categories.includes(category)){
              thisApp.data.categories.push(category);
            }
            console.log(thisApp.data.categories);
          }
        }
        thisApp.initHome();
        thisApp.initSearch();
        thisApp.initDiscovery();
        thisApp.initGreenAudioPlayer();
      });
  },
  initDiscovery: function(){
    const thisApp = this;
    new Song(select.containerOf.discover, thisApp.songs[Math.floor(Math.random()*thisApp.songs.length)]);

    new Footer(select.containerOf.discover);
  },

  initHome: function(){
    const thisApp = this;
    new Home(thisApp.data);
    console.log(thisApp.data);
    for(let song of thisApp.songs){
      new Song(select.containerOf.home, song);
    }
    new CategoryFilterWidget();
    new Subscribe();
    new Footer(select.containerOf.home);

  },

  initSearch: function(){
    const thisApp = this;
    new Search(thisApp.data);
    for(let song of thisApp.songs){
      new Song(select.containerOf.search, song);
    }
    new SearchWidget();
    new Footer(select.containerOf.search);
  },

  initGreenAudioPlayer: function(){
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '.player', // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true
    });
  },

  init: function(){
    const thisApp = this;
    console.log('App starting');
    thisApp.initPages();
    thisApp.initSongs();
  },
};

app.init();