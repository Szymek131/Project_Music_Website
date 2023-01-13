import { templates } from '../settings.js';
import utils from '../utils.js';

class Song{
  constructor(element, songData){
    const thisSong = this;
    const generatedHTML = templates.singleSong(songData);
    thisSong.element = utils.createDOMFromHTML(generatedHTML);
    const songElement = document.querySelector(element);
    songElement.appendChild(thisSong.element).innerHTML;
    
    GreenAudioPlayer.init({
      selector: '.player', // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true
    });
  }
}

export default Song;