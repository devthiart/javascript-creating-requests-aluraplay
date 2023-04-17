import { APIConnect } from './APIConnect.js';
import { createCard } from './showVideos.js';

async function searchVideo(event) {
  event.preventDefault();

  const searchData = document.querySelector('[data-pesquisa]');
  const search = await APIConnect.searchVideo(searchData.value);
  const list = document.querySelector('[data-lista]');
  searchData.value = "";

  while(list.firstChild) {
    list.removeChild(list.firstChild);
  }

  search.forEach(element => { list.appendChild(
      createCard(element.titulo, element.descricao, element.url, element.imagem)
    );
  });

}

const searchButton = document.querySelector('[data-botao-pesquisa]');

searchButton.addEventListener('click', event => searchVideo(event));
