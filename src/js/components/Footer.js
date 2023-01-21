import { templates } from '../settings.js';
import utils from '../utils.js';

class Footer{
  constructor(elementSelector){
    const thisFooter = this;

    thisFooter.render(elementSelector);
  }

  render(elementSelector){
    const thisFooter = this;

    const generatedHTML = templates.footer();
    thisFooter.element = utils.createDOMFromHTML(generatedHTML);
    const footerElement = document.querySelector(elementSelector);
    footerElement.appendChild(thisFooter.element).innerHTML;
  }
}

export default Footer;