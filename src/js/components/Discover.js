import { templates } from '../settings.js';
import utils from '../utils.js';

class Discover{
  constructor(elementSelector){
    const thisDiscover = this;

    thisDiscover.render(elementSelector);
  }

  render(elementSelector){
    const thisDiscover = this;

    const generatedHTML = templates.discover();
    thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
    const discoveryElement = document.querySelector(elementSelector);
    discoveryElement.appendChild(thisDiscover.element).innerHTML;
  }
}

export default Discover;