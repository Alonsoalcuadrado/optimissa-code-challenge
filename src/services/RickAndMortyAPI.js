const URL = 'https://rickandmortyapi.com/api/character';

const getCharacters = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

const getEpisode = async (episode) => {
  const response = await fetch(episode);
  const data = await response.json();

  return data;
};

export default {
  getCharacters,
  getEpisode,
};
