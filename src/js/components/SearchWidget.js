import { select, classNames } from '../settings.js';

class SearchWidget {
  constructor(){
    const thisSearchWidget = this;

    thisSearchWidget.widgetListener();
  }

  widgetListener(){
    const searchSubmitButton = document.querySelector(select.containerOf.searchSubmitButton);
    const songElement = document.querySelectorAll(select.containerOf.searchSong);
    for(let song of songElement){
      song.classList.add(classNames.songs.hidden);
    }


    searchSubmitButton.addEventListener('click', function(event){
      event.preventDefault();
      const inputValue = document.querySelector(select.containerOf.searchInput).value;
      const categoryValue = document.querySelector(select.containerOf.selectElement).value.toLowerCase();

      for(let song of songElement){
        if(!song.classList.contains(classNames.songs.hidden)){
          song.classList.add(classNames.songs.hidden);
        }
      }
      
      for(let song of songElement){
        console.log(song);
        const songTitle = song.querySelector(select.containerOf.songTitle).innerHTML.toLowerCase();
        const songAuthor = song.getAttribute('author').toLowerCase();
        const songCategories = song.querySelector(select.containerOf.songCategories).innerHTML.toLowerCase();
        const songCategory = songCategories.split(' ');
        const categoryArray = [];

        for(let i = 1; i < 10; i++){
          if(songCategory[i]){
            categoryArray.push(songCategory[i]);
          }
        }

        if(!inputValue && !categoryValue){
          song.classList.remove(classNames.songs.hidden);

        } else if(categoryArray.includes(categoryValue) && inputValue.includes(songTitle) || inputValue.includes(songAuthor)){
          song.classList.remove(classNames.songs.hidden);

        } else if(inputValue.includes(songTitle) || inputValue.includes(songAuthor)){
          song.classList.remove(classNames.songs.hidden);

          if(!categoryArray.includes(categoryValue) && categoryValue){
            song.classList.add(classNames.songs.hidden);
          }

        } else if (categoryArray.includes(categoryValue) && !inputValue){
          song.classList.remove(classNames.songs.hidden);

        } else {
          song.classList.add(classNames.songs.hidden);
        }
      }
    });
  }
}

export default SearchWidget;