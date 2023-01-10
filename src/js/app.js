import { settings } from './settings.js';

const app = {

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
        thisApp.songs.singleSong = parsedResponse;
        console.log(thisApp.songs);
      });
  },

  init: function(){
    const thisApp = this;
    console.log('App starting');
    thisApp.initSongs();
  },
};

app.init();