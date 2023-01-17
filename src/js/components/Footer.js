import { templates } from '../settings.js';
import utils from '../utils.js';

class Footer{
  constructor(element){
    const thisFooter = this;

    thisFooter.render(element);
  }

  render(element){
    const thisFooter = this;

    const generatedHTML = templates.footer();
    thisFooter.element = utils.createDOMFromHTML(generatedHTML);
    const footerElement = document.querySelector(element);
    footerElement.appendChild(thisFooter.element).innerHTML;
  }
}

export default Footer;