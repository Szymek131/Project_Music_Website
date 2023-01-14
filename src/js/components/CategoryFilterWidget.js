import { select, classNames } from '../settings.js';

class CategoryFilterWidget {
  constructor(){
    const thisCatagoryFilter = this;

    thisCatagoryFilter.widgetListener();
  }

  widgetListener(){
    const categoriesContainer = document.querySelector(select.containerOf.categoriesContainer);
    const songElement = document.querySelectorAll(select.containerOf.song);
    const categoryLinks = document.querySelectorAll(select.containerOf.categoryLink);
    categoriesContainer.addEventListener('click', function(event){
      event.preventDefault();
      const id = event.target.getAttribute('id');
      
      if(event.target.classList.contains(classNames.links.categoryLink)){
        for(let element of songElement){
          if(!element.classList.contains(id)){
            element.classList.add(classNames.songs.hidden);
          } else {
            element.classList.remove(classNames.songs.hidden);
          }
        }

        if(!event.target.classList.contains(classNames.links.active)){
          for(let link of categoryLinks){
            link.classList.remove(classNames.links.active);
          }
          event.target.classList.add(classNames.links.active);
        } else {
          for(let element of songElement){
            event.target.classList.remove(classNames.links.active);
            element.classList.remove(classNames.songs.hidden);
          }
        }
      }
    });
  }
}

export default CategoryFilterWidget;