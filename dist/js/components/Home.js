import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Home{
  constructor(data){
    const thisHome = this;
    
    const generatedHTML = templates.homeCategoryWidget(data);
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    const homeWidgetElement = document.querySelector(select.containerOf.home);
    homeWidgetElement.appendChild(thisHome.element).innerHTML;
  }
}

export default Home;