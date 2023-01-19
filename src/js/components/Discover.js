import { templates } from '../settings.js';
import utils from '../utils.js';

class Discover{
  constructor(element){
    const thisDiscover = this;

    thisDiscover.render(element);
  }

  render(element){
    const thisDiscover = this;

    const generatedHTML = templates.discover();
    thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
    const discoveryElement = document.querySelector(element);
    discoveryElement.appendChild(thisDiscover.element).innerHTML;
  }
}

export default Discover;