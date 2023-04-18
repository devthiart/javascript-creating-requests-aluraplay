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

  if(search.length == 0) {
    list.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com este termo.</h2>`
  }

}

const searchButton = document.querySelector('[data-botao-pesquisa]');

searchButton.addEventListener('click', event => searchVideo(event));
