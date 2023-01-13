import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Home{
  constructor(){
    const thisHomeCategoryWidget = this;

    thisHomeCategoryWidget.render();
  }

  render(){
    const thisHomeCategoryWidget = this;

    const generatedHTML = templates.homeCategoryWidget();
    thisHomeCategoryWidget.element = utils.createDOMFromHTML(generatedHTML);
    const homeWidgetElement = document.querySelector(select.containerOf.home);
    homeWidgetElement.appendChild(thisHomeCategoryWidget.element).innerHTML;
  }
}

export default Home;