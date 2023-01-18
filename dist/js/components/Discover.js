import { templates } from '../settings.js';
import utils from '../utils.js';

class Discover{
  constructor(element){
    const thisDiscovery = this;

    thisDiscovery.render(element);
  }

  render(element){
    const thisDiscovery = this;

    const generatedHTML = templates.discover();
    thisDiscovery.element = utils.createDOMFromHTML(generatedHTML);
    const discoveryElement = document.querySelector(element);
    discoveryElement.appendChild(thisDiscovery.element).innerHTML;
  }
}

export default Discover;