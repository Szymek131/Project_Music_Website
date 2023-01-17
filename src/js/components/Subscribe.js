import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Subscribe{
  constructor(){
    const thisSubscribe = this;

    thisSubscribe.render();
  }

  render(){
    const thisSubscribe = this;

    const generatedHTML = templates.subscribe();
    thisSubscribe.element = utils.createDOMFromHTML(generatedHTML);
    const subscribeElement = document.querySelector(select.containerOf.home);
    subscribeElement.appendChild(thisSubscribe.element).innerHTML;
  }
}

export default Subscribe;