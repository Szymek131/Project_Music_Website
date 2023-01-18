import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Search{
  constructor(data){
    const thisSearch = this;

    thisSearch.render(data);
  }

  render(data){
    const thisSearch = this;

    const generatedHTML = templates.searchWidget(data);
    thisSearch.element = utils.createDOMFromHTML(generatedHTML);
    const homeWidgetElement = document.querySelector(select.containerOf.search);
    homeWidgetElement.appendChild(thisSearch.element).innerHTML;
  }
}

export default Search;