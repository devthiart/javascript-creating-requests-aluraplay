import { APIConnect } from "./APIConnect.js";

const form = document.querySelector('[data-formulario]');

async function createVideo(event) {
  event.preventDefault();

  const image = document.querySelector('[data-imagem]').value;
  const url = document.querySelector('[data-url]').value;
  const title = document.querySelector('[data-titulo]').value;
  const description = Math.floor(Math.random() * 100).toString();

  try {
    await APIConnect.createVideo(title, description, url, image);
  
    window.location.href = "../pages/envio-concluido.html";
  } catch (error) {
    alert(error);
  }
}

form.addEventListener('submit', event => createVideo(event));
