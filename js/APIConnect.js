const apiUrl = "http://localhost:3000";

async function listVideos() {
  const connection = await fetch(`${apiUrl}/videos`);
  const convertedConnection = await connection.json();
  
  return convertedConnection;
}

async function createVideo(title, description, url, image) {
  const connection = await fetch(`${apiUrl}/videos`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      titulo: title,
      descricao: `${description} mil visualizações.`,
      url: url,
      imagem: image
    })
  });

  if (connection.ok === false) {
    throw new Error("Não foi possível enviar o vídeo.");
  }

  const convertedConnection = await connection.json();

  return convertedConnection;
}

async function searchVideo(searchTerm) {
  const connection = await fetch(`${apiUrl}/videos?q=${searchTerm}`)
  const convertedConnection = await connection.json();

  return convertedConnection;
}

export const APIConnect = {
  listVideos,
  createVideo,
  searchVideo
}
