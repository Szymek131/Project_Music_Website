import { select, classNames } from '../settings.js';

class CategoryFilterWidget {
  constructor(){
    const thisCatagoryFilter = this;

    thisCatagoryFilter.getElements();
    thisCatagoryFilter.widgetListener();
  }

  getElements(){
    const thisCatagoryFilter = this;

    thisCatagoryFilter.dom = {
      categories: document.querySelector(select.containerOf.categoriesContainer),
      songs: document.querySelectorAll(select.containerOf.homeSong),
      categoryLinks: document.querySelectorAll(select.containerOf.categoryLink),
    };

  }

  widgetListener(){
    const thisCatagoryFilter = this;

    thisCatagoryFilter.dom.categories.addEventListener('click', function(event){
      event.preventDefault();
      const id = event.target.getAttribute('id');

      if(event.target.classList.contains(classNames.links.categoryLink)){
        for(let element of thisCatagoryFilter.dom.songs){
          if(!element.classList.contains(id)){
            element.classList.add(classNames.songs.hidden);
          } else {
            element.classList.remove(classNames.songs.hidden);
          }
        }

        if(!event.target.classList.contains(classNames.links.active)){
          for(let link of thisCatagoryFilter.dom.categoryLinks){
            link.classList.remove(classNames.links.active);
          }
          event.target.classList.add(classNames.links.active);
        } else {
          for(let element of thisCatagoryFilter.dom.songs){
            event.target.classList.remove(classNames.links.active);
            element.classList.remove(classNames.songs.hidden);
          }
        }
      }
    });
  }
}

export default CategoryFilterWidget;