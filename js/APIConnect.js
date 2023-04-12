const apiUrl = "http://localhost:3000";

async function listVideos() {
  const connection = await fetch(`${apiUrl}/videos`);
  const convertedConnection = await connection.json();
  
  return convertedConnection;
}

export const APIConnect = {
  listVideos
}
