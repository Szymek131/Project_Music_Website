import { select, classNames } from '../settings.js';

class SearchWidget {
  constructor(){
    const thisSearchWidget = this;

    thisSearchWidget.initElements();
    thisSearchWidget.initWidgets();
  }

  initElements(){
    const thisSearchWidget = this;

    thisSearchWidget.dom = {
      searchButton: document.querySelector(select.containerOf.searchSubmitButton),
      songs: document.querySelectorAll(select.containerOf.searchSong),
    };

    for(let song of thisSearchWidget.dom.songs){
      song.classList.add(classNames.songs.hidden);
    }
  }

  initWidgets(){
    const thisSearchWidget = this;

    thisSearchWidget.dom.searchButton.addEventListener('click', function(event){
      event.preventDefault();
      const inputValue = document.querySelector(select.containerOf.searchInput).value.toLowerCase();
      const categoryValue = document.querySelector(select.containerOf.selectElement).value.toLowerCase();

      for(let song of thisSearchWidget.dom.songs){
        if(!song.classList.contains(classNames.songs.hidden)){
          song.classList.add(classNames.songs.hidden);
        }
      }
      
      for(let song of thisSearchWidget.dom.songs){
        const songTitle = song.querySelector(select.containerOf.songTitle).innerHTML.toLowerCase();
        const songAuthor = song.querySelector(select.containerOf.songAuthor).innerHTML.toLowerCase();
        const author = songAuthor.replaceAll(' -', '');
        const songCategories = song.querySelector(select.containerOf.songCategories).innerHTML.toLowerCase();
        const songCategory = songCategories.split(' ');
        const songAuthorWithTitle = author + songTitle;
        const categoryArray = [];

        for(let i = 1; i < 10; i++){
          if(songCategory[i]){
            categoryArray.push(songCategory[i]);
          }
        }

        if(!inputValue && !categoryValue){
          song.classList.remove(classNames.songs.hidden);

        } else if(categoryArray.includes(categoryValue) && songAuthorWithTitle.includes(inputValue)){
          song.classList.remove(classNames.songs.hidden);

        } else if(songAuthorWithTitle.includes(inputValue)){
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